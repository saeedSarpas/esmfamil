
firebaseRef = new Firebase "https://fiery-fire-2012.firebaseio.com/"

esmfamil.factory 'players', ($firebase) ->
  playersRef = firebaseRef.child 'players'
  $firebase playersRef

esmfamil.factory 'games', ($firebase) ->
  gamesRef = firebaseRef.child 'games'
  $firebase gamesRef

esmfamil.factory 'setOnPlayers', (games, myself, setOnPerson) ->
  (key, value) ->
    for id of games[myself.game]
      setOnPerson id, key, value

esmfamil.factory 'setOnPerson', (games, myself) ->
  r_builder = (key, value) ->
    result = {}
    temp = result
    keys = key.split('.')
    for k, i in keys
      temp[k] = if i < keys.length-1 then {} else value
      temp = temp[k]
    result
  (pid, key, value) ->
    games.$child(myself.game).$child(pid).$transaction (data) ->
      $.extend true, data, if value? then r_builder(key, value) else key

esmfamil.factory 'setOnUs', (setOnPerson, myself) ->
  (key, value) -> setOnPerson myself.id, key, value

esmfamil.factory 'myself', ->
  {}

esmfamil.factory 'loginSvc',
  ($http, $q, $rootScope, $firebaseSimpleLogin, myself, players, games) ->
    auth = $firebaseSimpleLogin firebaseRef
    svc = null
    (provider) ->
      switch provider
        when 'google'
          svc ?= new GoogleService auth, $rootScope, $http, $q
        when 'facebook'
          svc ?= new FacebookService auth, $rootScope, $http, $q
      svc.login().then (user) ->
        players.$child(user.id).$set user
        games.$on 'loaded', ->
          for index in games.$getIndex()
            games.$child(index).$remove user.id
        angular.copy user, myself
        svc.getFriendList().then (friends) ->
          myself.friends = friends
      svc

class LoginService
  constructor: (@auth, rootScope, @http, @q) ->
    rootScope.$on "$firebaseSimpleLogin:login", @_onLogin.bind @
    @logged_in_promise = @q.defer()

  _onLogin: (e, user) ->
    @user = user
    @logged_in_promise.resolve @_processUser user
    @logged_in = true

  login: ->
    @_login() unless @logged_in
    @logged_in_promise.promise

  getFriendList: ->
    @_friends()

class GoogleService extends LoginService
  _base_url: 'https://www.googleapis.com/'
  _scopes: ['auth/plus.me', 'auth/plus.login']

  _processUser: (user) ->
    {
      id: user.id
      name: user.displayName
      picture: user.thirdPartyUserData.picture
      provider: 'googleplus'
    }

  _processFriends: (friends) ->
    f.id for f in friends

  _login: ->
    @auth.$login 'google',
      scope: [@_base_url+scope for scope in @_scopes].join ' '

  _friends: ->
    deferred = @q.defer()
    @http.get('https://www.googleapis.com/plus/v1/people/me/people/visible',
      headers:
        Authorization: 'Bearer ' + @user.accessToken
    ).success (data) => deferred.resolve @_processFriends data.items
    deferred.promise

class FacebookService extends LoginService
  _base_url: 'https://graph.facebook.com/'

  _processUser: (user) ->
    {
      id: user.id
      name: user.displayName
      picture: @_pic_url user.id
      provider: 'facebook'
    }

  _pic_url: (id) ->
    "#{@_base_url}#{id}/picture?type=square"

  _processFriends: (friends) ->
    f.id for f in friends

  _login: ->
    @auth.$login 'facebook',
      scope: 'public_profile,email,user_friends'

  _friends: ->
    deferred = @q.defer()
    @http.get(@_base_url + 'me/friends' +
      '?access_token=' + @user.accessToken
    ).success (data) =>
      deferred.resolve @_processFriends data.data
    deferred.promise
