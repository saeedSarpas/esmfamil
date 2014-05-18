esmfamil.classy.controller({
  name: 'logo',
  inject: ['$scope'],
  init: function() {
    var htmlCanvas, xWindow, yWindow;
    xWindow = window.innerWidth;
    yWindow = window.innerHeight;
    htmlCanvas = document.getElementById('canvas');
    htmlCanvas.width = xWindow;
    htmlCanvas.height = yWindow;
    return this.draw();
  },
  draw: function() {
    var canvas, ctx, lineargradient1, lineargradient2, lineargradient3, lineargradient4, logoLeftPadding, logoTopPadding, xScale, xTranslate, xWindow, yTranslate, yWindow;
    xWindow = window.innerWidth;
    yWindow = window.innerHeight;
    logoLeftPadding = 190;
    logoTopPadding = 270;
    xScale = (xWindow / 2) / 294;
    xTranslate = (xWindow / 4) - (xScale * logoLeftPadding);
    yTranslate = 50 - (xScale * logoTopPadding);
    canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      ctx = canvas.getContext("2d");
      lineargradient1 = ctx.createLinearGradient(xWindow, yWindow, xWindow / 3, yWindow / 3);
      lineargradient1.addColorStop(0, 'rgba(40,60,120,0.9)');
      lineargradient1.addColorStop(1, 'rgba(0,0,0,0.1)');
      lineargradient2 = ctx.createLinearGradient(0, yWindow, (2 * xWindow) / 3, yWindow / 3);
      lineargradient2.addColorStop(0, 'rgba(10,40,80,0.9)');
      lineargradient2.addColorStop(1, 'rgba(0,0,0,0)');
      lineargradient3 = ctx.createLinearGradient(0, 0, (2 * xWindow) / 3, (2 * yWindow) / 3);
      lineargradient3.addColorStop(0, 'rgba(20,120,100,0.9)');
      lineargradient3.addColorStop(1, 'rgba(0,0,0,0)');
      lineargradient4 = ctx.createLinearGradient(xWindow, 0, xWindow / 3, (2 * yWindow) / 3);
      lineargradient4.addColorStop(0, 'rgba(30,150,140,0.9)');
      lineargradient4.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = lineargradient1;
      ctx.fillRect(0, 0, xWindow, yWindow);
      ctx.fill();
      ctx.fillStyle = lineargradient2;
      ctx.fillRect(0, 0, xWindow, yWindow);
      ctx.fill();
      ctx.fillStyle = lineargradient3;
      ctx.fillRect(0, 0, xWindow, yWindow);
      ctx.fill();
      ctx.fillStyle = lineargradient4;
      ctx.fillRect(0, 0, xWindow, yWindow);
      ctx.fill();
      ctx.fillStyle = lineargradient2;
      ctx.fillRect(0, 0, xWindow, yWindow);
      ctx.fill();
      ctx.translate(xTranslate, yTranslate);
      ctx.scale(xScale, xScale);
      ctx.save();
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.moveTo(482, 294);
      ctx.lineTo(489, 294.25);
      ctx.bezierCurveTo(488.75, 294.25, 488, 321.25, 482.5, 340.25);
      ctx.bezierCurveTo(477.25, 359, 474.25, 363, 474.25, 363);
      ctx.lineTo(468.25, 360.25);
      ctx.bezierCurveTo(468.25, 360.25, 474.75, 346, 477.75, 330.75);
      ctx.bezierCurveTo(481.75, 309.75, 482, 294, 482, 294);
      ctx.moveTo(464.65577, 313.29982);
      ctx.lineTo(471.45146, 314.96841);
      ctx.bezierCurveTo(471.5, 315, 469, 326, 463, 333.25);
      ctx.bezierCurveTo(458.75, 338.25, 452, 340.25, 445, 335.5);
      ctx.bezierCurveTo(438.25, 330.75, 437, 327.5, 432.5, 327.5);
      ctx.bezierCurveTo(428, 327.5, 424.75, 330, 420.5, 335.5);
      ctx.bezierCurveTo(419, 337.5, 417, 342.25, 417, 342.25);
      ctx.bezierCurveTo(417, 342.25, 419.5, 345.5, 418.75, 350.5);
      ctx.bezierCurveTo(418, 355.25, 415, 357.25, 413, 357.25);
      ctx.bezierCurveTo(410.8046499999999, 357.22114999999997, 408.0937799999999, 355.56013999999993, 407.30189999999993, 351.05537999999996);
      ctx.bezierCurveTo(406.38487999999995, 345.83869999999996, 408.42439999999993, 343.03099, 408.42439999999993, 343.03099);
      ctx.bezierCurveTo(408.42439999999993, 343.03099, 408.2829899999999, 338.07896, 404.58665999999994, 334.3316);
      ctx.bezierCurveTo(402.50872999999996, 332.22497999999996, 389.90309999999994, 328.25642, 380.80171999999993, 344.39619999999996);
      ctx.bezierCurveTo(371.7003399999999, 360.53597999999994, 378.93015999999994, 380.50478, 384.2927399999999, 389.36742);
      ctx.bezierCurveTo(387.7247699999999, 395.03947, 389.56049999999993, 396.62034, 389.56049999999993, 396.62034);
      ctx.lineTo(384.41193999999996, 401.3405);
      ctx.bezierCurveTo(384.41193999999996, 401.3405, 374.26079, 389.07283, 371.18611999999996, 375.8263);
      ctx.bezierCurveTo(368.12737999999996, 362.64837, 369.03016999999994, 348.20863, 377.43420999999995, 336.81172);
      ctx.bezierCurveTo(387.17583999999994, 323.60087999999996, 400.28108999999995, 323.65395, 406.40693999999996, 327.16425999999996);
      ctx.bezierCurveTo(411.80708999999996, 330.25872, 413.02061, 334.80941999999993, 413.02061, 334.80941999999993);
      ctx.bezierCurveTo(413.02061, 334.80941999999993, 418.85749, 322.6673799999999, 429.46376999999995, 320.85396999999995);
      ctx.bezierCurveTo(437.47228999999993, 319.48470999999995, 441.2045499999999, 323.37200999999993, 444.26866999999993, 326.07208999999995);
      ctx.bezierCurveTo(447.4979399999999, 328.91768999999994, 450.54862999999995, 331.71493999999996, 453.82512999999994, 331.13851999999997);
      ctx.bezierCurveTo(458.1870599999999, 330.37114999999994, 461.13656999999995, 323.76640999999995, 462.1073799999999, 321.58207999999996);
      ctx.bezierCurveTo(463.0781899999999, 319.39775, 464.6557699999999, 313.29981999999995, 464.6557699999999, 313.29981999999995);
      ctx.moveTo(356.44905, 326.85022);
      ctx.bezierCurveTo(356.44905, 326.85022, 352.25792, 322.81613999999996, 352.97009, 315.99965);
      ctx.bezierCurveTo(353.77158000000003, 308.32827, 361.54324, 304.92515, 365.88800000000003, 305.26935);
      ctx.bezierCurveTo(369.79004000000003, 305.57847, 375.18503000000004, 307.69485999999995, 376.82860000000005, 315.738);
      ctx.bezierCurveTo(378.41627000000005, 323.50759, 371.1546000000001, 331.21057, 363.8285900000001, 333.15715);
      ctx.bezierCurveTo(357.2204700000001, 334.91298, 347.69657000000007, 333.11425, 342.46224000000007, 328.56639);
      ctx.bezierCurveTo(337.22791000000007, 324.01853, 335.10222000000005, 317.05222000000003, 337.14211000000006, 302.8238);
      ctx.bezierCurveTo(339.0503100000001, 289.51392, 345.3797400000001, 270.13071, 345.3797400000001, 270.13071);
      ctx.lineTo(352.0273400000001, 272.35437);
      ctx.bezierCurveTo(352.0273400000001, 272.35437, 346.39393000000007, 288.51008, 344.6261700000001, 300.35412);
      ctx.bezierCurveTo(342.85840000000013, 312.19816000000003, 341.7295300000001, 320.09661, 348.7081200000001, 324.43236);
      ctx.bezierCurveTo(352.55981000000014, 326.82539, 356.4490500000001, 326.85022000000004, 356.4490500000001, 326.85022000000004);
      ctx.moveTo(320.03125, 298.42468);
      ctx.bezierCurveTo(320.03125, 298.42468, 330.79339, 306.67389000000003, 332.29599, 316.13144);
      ctx.bezierCurveTo(333.79859, 325.589, 322.70250000000004, 328.91353, 319.7117, 328.6163);
      ctx.bezierCurveTo(316.15407, 328.26274, 314.13935000000004, 326.59667, 312.85056000000003, 325.14705000000004);
      ctx.bezierCurveTo(310.64483, 322.66607000000005, 309.93374000000006, 319.40181, 309.93374000000006, 319.40181);
      ctx.bezierCurveTo(309.93374000000006, 319.40181, 305.95853000000005, 321.9918, 301.93459000000007, 321.47894);
      ctx.bezierCurveTo(297.4267900000001, 320.90442, 294.8635300000001, 317.2363, 294.8635300000001, 317.2363);
      ctx.bezierCurveTo(294.8635300000001, 317.2363, 291.4421400000001, 321.49218, 285.6029000000001, 321.35081);
      ctx.bezierCurveTo(280.4015900000001, 321.22488000000004, 275.3680700000001, 315.88807, 275.3680700000001, 315.88807);
      ctx.bezierCurveTo(275.3680700000001, 315.88807, 277.9741100000001, 330.89121, 268.9375000000001, 341.79968);
      ctx.bezierCurveTo(259.97248000000013, 352.62173, 244.42005000000012, 352.59023, 232.3125000000001, 350.48718);
      ctx.bezierCurveTo(219.7187500000001, 348.29968, 208.12951000000012, 343.52068, 201.5312500000001, 338.18249000000003);
      ctx.bezierCurveTo(194.53353000000013, 332.52113, 189.9527700000001, 324.62038, 189.7812500000001, 317.24499000000003);
      ctx.bezierCurveTo(189.5937500000001, 309.18249000000003, 192.7979900000001, 301.47267000000005, 202.0479900000001, 295.97267000000005);
      ctx.bezierCurveTo(211.2979900000001, 290.47267000000005, 222.35991000000013, 291.56357, 229.0625000000001, 293.48718);
      ctx.bezierCurveTo(243.0000000000001, 297.48718, 250.9062500000001, 304.51843, 250.9062500000001, 304.51843);
      ctx.lineTo(246.6562500000001, 310.17468);
      ctx.bezierCurveTo(246.6562500000001, 310.17468, 235.0246200000001, 299.82379000000003, 220.1753700000001, 298.93991);
      ctx.bezierCurveTo(205.3261300000001, 298.05603, 197.0908500000001, 306.93591, 196.5756800000001, 315.11498);
      ctx.bezierCurveTo(196.0808900000001, 322.97044, 201.7906000000001, 333.85331, 219.2031000000001, 339.77533);
      ctx.bezierCurveTo(236.6156100000001, 345.69734, 251.6264600000001, 346.54462, 260.28852000000006, 340.35743);
      ctx.bezierCurveTo(268.95058000000006, 334.17025, 270.21617000000003, 322.18278000000004, 267.46314000000007, 311.22589000000005);
      ctx.bezierCurveTo(264.34810000000004, 298.8282300000001, 255.44232000000005, 287.00748000000004, 252.61390000000006, 283.56034000000005);
      ctx.bezierCurveTo(249.78547000000006, 280.11319000000003, 247.89617000000007, 278.61059000000006, 247.89617000000007, 278.61059000000006);
      ctx.lineTo(252.87906000000007, 273.66084000000006);
      ctx.bezierCurveTo(252.87906000000007, 273.66084000000006, 261.4597800000001, 282.24860000000007, 267.19797000000005, 291.6920600000001);
      ctx.bezierCurveTo(270.69894000000005, 297.4536900000001, 274.8940400000001, 305.3512100000001, 279.66073000000006, 310.25362000000007);
      ctx.bezierCurveTo(284.88980000000004, 315.63158000000004, 286.7014700000001, 314.5480300000001, 287.74827000000005, 314.0101200000001);
      ctx.bezierCurveTo(289.24507000000006, 313.24097000000006, 290.13475000000005, 312.1981600000001, 290.93025000000006, 310.6955600000001);
      ctx.bezierCurveTo(291.72574000000003, 309.19296000000014, 291.85832000000005, 308.1323000000001, 291.85832000000005, 308.1323000000001);
      ctx.lineTo(298.75261000000006, 308.3532700000001);
      ctx.bezierCurveTo(298.75261000000006, 308.3532700000001, 299.32714000000004, 311.57944000000015, 300.4761900000001, 313.0378500000001);
      ctx.bezierCurveTo(301.6252400000001, 314.4962600000001, 302.8184800000001, 315.0265900000001, 305.0281900000001, 314.0985100000001);
      ctx.bezierCurveTo(307.2379000000001, 313.17043000000007, 311.7189100000001, 309.8857400000001, 315.81157000000013, 303.6244900000001);
      ctx.bezierCurveTo(317.14259000000015, 301.5882000000001, 320.0312500000001, 298.4246800000001, 320.0312500000001, 298.4246800000001);
      ctx.moveTo(286.39062, 340.56531);
      ctx.bezierCurveTo(286.39062, 340.56531, 288.21941000000004, 338.36595, 291.40625, 338.45593);
      ctx.bezierCurveTo(294.53136, 338.54413, 297.84603, 341.33050000000003, 297.875, 344.89343);
      ctx.bezierCurveTo(297.9062, 348.73718, 295.09375, 351.64343, 291.625, 351.73718);
      ctx.bezierCurveTo(288.15625, 351.83088000000004, 286.375, 349.64343, 286.375, 349.64343);
      ctx.bezierCurveTo(286.375, 349.64343, 284.59375, 351.76843, 281.34375, 351.76843);
      ctx.bezierCurveTo(278.09375, 351.76843, 275.03125, 348.64343, 274.9375, 345.23718);
      ctx.bezierCurveTo(274.8438, 341.83093, 277.21935, 338.56848, 281.4375, 338.42468);
      ctx.bezierCurveTo(284.1875, 338.33098, 286.39062, 340.56531, 286.39062, 340.56531);
      ctx.moveTo(379.09375, 278.42468);
      ctx.translate(372.5625, 278.42468);
      ctx.rotate(0);
      ctx.scale(0.990521327014218, 1);
      ctx.arc(0, 0, 6.59375, 0, 3.141592653589793, 0);
      ctx.scale(1.0095693779904307, 1);
      ctx.rotate(0);
      ctx.translate(-372.5625, -278.42468);
      ctx.translate(372.5625, 278.42468);
      ctx.rotate(0);
      ctx.scale(0.990521327014218, 1);
      ctx.arc(0, 0, 6.59375, 3.141592653589793, 6.283185307179586, 0);
      ctx.scale(1.0095693779904307, 1);
      ctx.rotate(0);
      ctx.translate(-372.5625, -278.42468);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'black';
      ctx.lineWidth = 1;
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4;
      ctx.beginPath();
      ctx.moveTo(481.92272, 293.97205);
      ctx.lineTo(488.70160000000004, 294.22948);
      ctx.bezierCurveTo(488.70160000000004, 294.22948, 487.88426000000004, 321.35021, 482.56413000000003, 340.22811);
      ctx.bezierCurveTo(477.24399000000005, 359.106, 474.24284000000006, 363.13381000000004, 474.24284000000006, 363.13381000000004);
      ctx.lineTo(468.15042000000005, 360.25922);
      ctx.bezierCurveTo(468.15042000000005, 360.25922, 474.75860000000006, 345.99, 477.7180900000001, 330.69815000000006);
      ctx.bezierCurveTo(481.7473300000001, 309.87887000000006, 481.9227200000001, 293.9720500000001, 481.9227200000001, 293.9720500000001);
      ctx.moveTo(464.65577, 313.29982);
      ctx.lineTo(471.45146, 314.96841);
      ctx.bezierCurveTo(471.45146, 314.96841, 468.96197, 326.08115, 462.83549, 333.35319);
      ctx.bezierCurveTo(458.72524, 338.23199, 452.03519, 340.17922999999996, 445.11814, 335.44651999999996);
      ctx.bezierCurveTo(438.20108999999997, 330.7138, 437.10892, 327.40695999999997, 432.61890999999997, 327.40695999999997);
      ctx.bezierCurveTo(428.1289, 327.40695999999997, 424.76295999999996, 330.03542, 420.60508999999996, 335.41616999999997);
      ctx.bezierCurveTo(419.05785, 337.41846999999996, 416.96453999999994, 342.21187, 416.96453999999994, 342.21187);
      ctx.bezierCurveTo(416.96453999999994, 342.21187, 419.39156999999994, 345.36701999999997, 418.66345999999993, 350.34243999999995);
      ctx.bezierCurveTo(417.9353499999999, 355.31785999999994, 414.93562999999995, 357.23566999999997, 413.02059999999994, 357.22914999999995);
      ctx.bezierCurveTo(410.8046499999999, 357.22114999999997, 408.0937799999999, 355.56013999999993, 407.30189999999993, 351.05537999999996);
      ctx.bezierCurveTo(406.38487999999995, 345.83869999999996, 408.42439999999993, 343.03099, 408.42439999999993, 343.03099);
      ctx.bezierCurveTo(408.42439999999993, 343.03099, 408.2829899999999, 338.07896, 404.58665999999994, 334.3316);
      ctx.bezierCurveTo(402.50872999999996, 332.22497999999996, 389.90309999999994, 328.25642, 380.80171999999993, 344.39619999999996);
      ctx.bezierCurveTo(371.7003399999999, 360.53597999999994, 378.93015999999994, 380.50478, 384.2927399999999, 389.36742);
      ctx.bezierCurveTo(387.7247699999999, 395.03947, 389.56049999999993, 396.62034, 389.56049999999993, 396.62034);
      ctx.lineTo(384.41193999999996, 401.3405);
      ctx.bezierCurveTo(384.41193999999996, 401.3405, 374.26079, 389.07283, 371.18611999999996, 375.8263);
      ctx.bezierCurveTo(368.12737999999996, 362.64837, 369.03016999999994, 348.20863, 377.43420999999995, 336.81172);
      ctx.bezierCurveTo(387.17583999999994, 323.60087999999996, 400.28108999999995, 323.65395, 406.40693999999996, 327.16425999999996);
      ctx.bezierCurveTo(411.80708999999996, 330.25872, 413.02061, 334.80941999999993, 413.02061, 334.80941999999993);
      ctx.bezierCurveTo(413.02061, 334.80941999999993, 418.85749, 322.6673799999999, 429.46376999999995, 320.85396999999995);
      ctx.bezierCurveTo(437.47228999999993, 319.48470999999995, 441.2045499999999, 323.37200999999993, 444.26866999999993, 326.07208999999995);
      ctx.bezierCurveTo(447.4979399999999, 328.91768999999994, 450.54862999999995, 331.71493999999996, 453.82512999999994, 331.13851999999997);
      ctx.bezierCurveTo(458.1870599999999, 330.37114999999994, 461.13656999999995, 323.76640999999995, 462.1073799999999, 321.58207999999996);
      ctx.bezierCurveTo(463.0781899999999, 319.39775, 464.6557699999999, 313.29981999999995, 464.6557699999999, 313.29981999999995);
      ctx.moveTo(356.44905, 326.85022);
      ctx.bezierCurveTo(356.44905, 326.85022, 352.25792, 322.81613999999996, 352.97009, 315.99965);
      ctx.bezierCurveTo(353.77158000000003, 308.32827, 361.54324, 304.92515, 365.88800000000003, 305.26935);
      ctx.bezierCurveTo(369.79004000000003, 305.57847, 375.18503000000004, 307.69485999999995, 376.82860000000005, 315.738);
      ctx.bezierCurveTo(378.41627000000005, 323.50759, 371.1546000000001, 331.21057, 363.8285900000001, 333.15715);
      ctx.bezierCurveTo(357.2204700000001, 334.91298, 347.69657000000007, 333.11425, 342.46224000000007, 328.56639);
      ctx.bezierCurveTo(337.22791000000007, 324.01853, 335.10222000000005, 317.05222000000003, 337.14211000000006, 302.8238);
      ctx.bezierCurveTo(339.0503100000001, 289.51392, 345.3797400000001, 270.13071, 345.3797400000001, 270.13071);
      ctx.lineTo(352.0273400000001, 272.35437);
      ctx.bezierCurveTo(352.0273400000001, 272.35437, 346.39393000000007, 288.51008, 344.6261700000001, 300.35412);
      ctx.bezierCurveTo(342.85840000000013, 312.19816000000003, 341.7295300000001, 320.09661, 348.7081200000001, 324.43236);
      ctx.bezierCurveTo(352.55981000000014, 326.82539, 356.4490500000001, 326.85022000000004, 356.4490500000001, 326.85022000000004);
      ctx.moveTo(320.03125, 298.42468);
      ctx.bezierCurveTo(320.03125, 298.42468, 330.79339, 306.67389000000003, 332.29599, 316.13144);
      ctx.bezierCurveTo(333.79859, 325.589, 322.70250000000004, 328.91353, 319.7117, 328.6163);
      ctx.bezierCurveTo(316.15407, 328.26274, 314.13935000000004, 326.59667, 312.85056000000003, 325.14705000000004);
      ctx.bezierCurveTo(310.64483, 322.66607000000005, 309.93374000000006, 319.40181, 309.93374000000006, 319.40181);
      ctx.bezierCurveTo(309.93374000000006, 319.40181, 305.95853000000005, 321.9918, 301.93459000000007, 321.47894);
      ctx.bezierCurveTo(297.4267900000001, 320.90442, 294.8635300000001, 317.2363, 294.8635300000001, 317.2363);
      ctx.bezierCurveTo(294.8635300000001, 317.2363, 291.4421400000001, 321.49218, 285.6029000000001, 321.35081);
      ctx.bezierCurveTo(280.4015900000001, 321.22488000000004, 275.3680700000001, 315.88807, 275.3680700000001, 315.88807);
      ctx.bezierCurveTo(275.3680700000001, 315.88807, 277.9741100000001, 330.89121, 268.9375000000001, 341.79968);
      ctx.bezierCurveTo(259.97248000000013, 352.62173, 244.42005000000012, 352.59023, 232.3125000000001, 350.48718);
      ctx.bezierCurveTo(219.7187500000001, 348.29968, 208.12951000000012, 343.52068, 201.5312500000001, 338.18249000000003);
      ctx.bezierCurveTo(194.53353000000013, 332.52113, 189.9527700000001, 324.62038, 189.7812500000001, 317.24499000000003);
      ctx.bezierCurveTo(189.5937500000001, 309.18249000000003, 192.7979900000001, 301.47267000000005, 202.0479900000001, 295.97267000000005);
      ctx.bezierCurveTo(211.2979900000001, 290.47267000000005, 222.35991000000013, 291.56357, 229.0625000000001, 293.48718);
      ctx.bezierCurveTo(243.0000000000001, 297.48718, 250.9062500000001, 304.51843, 250.9062500000001, 304.51843);
      ctx.lineTo(246.6562500000001, 310.17468);
      ctx.bezierCurveTo(246.6562500000001, 310.17468, 235.0246200000001, 299.82379000000003, 220.1753700000001, 298.93991);
      ctx.bezierCurveTo(205.3261300000001, 298.05603, 197.0908500000001, 306.93591, 196.5756800000001, 315.11498);
      ctx.bezierCurveTo(196.0808900000001, 322.97044, 201.7906000000001, 333.85331, 219.2031000000001, 339.77533);
      ctx.bezierCurveTo(236.6156100000001, 345.69734, 251.6264600000001, 346.54462, 260.28852000000006, 340.35743);
      ctx.bezierCurveTo(268.95058000000006, 334.17025, 270.21617000000003, 322.18278000000004, 267.46314000000007, 311.22589000000005);
      ctx.bezierCurveTo(264.34810000000004, 298.8282300000001, 255.44232000000005, 287.00748000000004, 252.61390000000006, 283.56034000000005);
      ctx.bezierCurveTo(249.78547000000006, 280.11319000000003, 247.89617000000007, 278.61059000000006, 247.89617000000007, 278.61059000000006);
      ctx.lineTo(252.87906000000007, 273.66084000000006);
      ctx.bezierCurveTo(252.87906000000007, 273.66084000000006, 261.4597800000001, 282.24860000000007, 267.19797000000005, 291.6920600000001);
      ctx.bezierCurveTo(270.69894000000005, 297.4536900000001, 274.8940400000001, 305.3512100000001, 279.66073000000006, 310.25362000000007);
      ctx.bezierCurveTo(284.88980000000004, 315.63158000000004, 286.7014700000001, 314.5480300000001, 287.74827000000005, 314.0101200000001);
      ctx.bezierCurveTo(289.24507000000006, 313.24097000000006, 290.13475000000005, 312.1981600000001, 290.93025000000006, 310.6955600000001);
      ctx.bezierCurveTo(291.72574000000003, 309.19296000000014, 291.85832000000005, 308.1323000000001, 291.85832000000005, 308.1323000000001);
      ctx.lineTo(298.75261000000006, 308.3532700000001);
      ctx.bezierCurveTo(298.75261000000006, 308.3532700000001, 299.32714000000004, 311.57944000000015, 300.4761900000001, 313.0378500000001);
      ctx.bezierCurveTo(301.6252400000001, 314.4962600000001, 302.8184800000001, 315.0265900000001, 305.0281900000001, 314.0985100000001);
      ctx.bezierCurveTo(307.2379000000001, 313.17043000000007, 311.7189100000001, 309.8857400000001, 315.81157000000013, 303.6244900000001);
      ctx.bezierCurveTo(317.14259000000015, 301.5882000000001, 320.0312500000001, 298.4246800000001, 320.0312500000001, 298.4246800000001);
      ctx.moveTo(286.39062, 340.56531);
      ctx.bezierCurveTo(286.39062, 340.56531, 288.21941000000004, 338.36595, 291.40625, 338.45593);
      ctx.bezierCurveTo(294.53136, 338.54413, 297.84603, 341.33050000000003, 297.875, 344.89343);
      ctx.bezierCurveTo(297.9062, 348.73718, 295.09375, 351.64343, 291.625, 351.73718);
      ctx.bezierCurveTo(288.15625, 351.83088000000004, 286.375, 349.64343, 286.375, 349.64343);
      ctx.bezierCurveTo(286.375, 349.64343, 284.59375, 351.76843, 281.34375, 351.76843);
      ctx.bezierCurveTo(278.09375, 351.76843, 275.03125, 348.64343, 274.9375, 345.23718);
      ctx.bezierCurveTo(274.8438, 341.83093, 277.21935, 338.56848, 281.4375, 338.42468);
      ctx.bezierCurveTo(284.1875, 338.33098, 286.39062, 340.56531, 286.39062, 340.56531);
      ctx.moveTo(379.09375, 278.42468);
      ctx.translate(372.5625, 278.42468);
      ctx.rotate(0);
      ctx.scale(0.990521327014218, 1);
      ctx.arc(0, 0, 6.59375, 0, 3.141592653589793, 0);
      ctx.scale(1.0095693779904307, 1);
      ctx.rotate(0);
      ctx.translate(-372.5625, -278.42468);
      ctx.translate(372.5625, 278.42468);
      ctx.rotate(0);
      ctx.scale(0.990521327014218, 1);
      ctx.arc(0, 0, 6.59375, 3.141592653589793, 6.283185307179586, 0);
      ctx.scale(1.0095693779904307, 1);
      ctx.rotate(0);
      ctx.translate(-372.5625, -278.42468);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.moveTo(logoLeftPadding - 10, logoTopPadding + 90.5);
      ctx.lineTo(logoLeftPadding + 170, logoTopPadding + 90.5);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      ctx.font = "30px Cabin";
      ctx.fillStyle = 'rgba(0,0,0,1)';
      return ctx.fillText('esmfamil', logoLeftPadding + 30, logoTopPadding + 120);
    }
  }
});

//# sourceMappingURL=logoCanvas.js.map
