$(window).load(function () {

	/*--------Helper Dot--------*/
	var serpFrame=$("#serpFrame").contents();
	var helperStyle="<div id='removeAfter' style='display:inline'><style type='text/css'>.helper{position:absolute;z-index:2;display:block;width:10px;height:10px;background:#e74c3c;-webkit-transition:background-color .2s;-moz-transition:background-color .2s;-o-transition:background-color .2s;transition:background-color .2s;border-radius:100%}.helper::after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;border-radius:inherit;z-index:1;-moz-transform:translateZ(0);-o-transform:translateZ(0);-ms-transform:translateZ(0);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;-webkit-animation:cd-pulse 2s infinite;-moz-animation:cd-pulse 2s infinite;animation:cd-pulse 2s infinite;-webkit-animation-delay:.5s;-moz-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes cd-pulse{0%{box-shadow:0 0 0 0 #e74c3c}100%{box-shadow:0 0 0 20px rgba(255,150,44,0)}}@-moz-keyframes cd-pulse{0%{box-shadow:0 0 0 0 #e74c3c}100%{box-shadow:0 0 0 20px rgba(255,150,44,0)}}@keyframes cd-pulse{0%{box-shadow:0 0 0 0 #e74c3c}100%{box-shadow:0 0 0 20px rgba(255,150,44,0)}}</style><div class='helper'></div></div>";
	function changeHelper(cname){
		serpFrame.find('*').remove('.helper');
		serpFrame.find(cname).append(helperStyle);
	}

	$(".accordion-section-title").each(function(index) {
	    $(this).on("click", function(){
	        var accID=$(this).attr('id');
	        // console.log(accID);
	        var accHelperName = accID.substr(0, accID.indexOf("Accordion"));
	        if(accHelperName == "body"){
	        	changeHelper("body");
	        }
	        else{
	        	changeHelper('.'+accHelperName);	
	        }
	        // console.log(myString);
	    });
	});













	/*--------Get Code Button Animation--------*/
	function getRandom(min, max){
	  return Math.random() * (max - min) + min;
	}

	var isSafari = /constructor/i.test(window.HTMLElement);
	var isFF = !!navigator.userAgent.match(/firefox/i);

	if (isSafari) {
	  document.getElementsByTagName('html')[0].classList.add('safari');
	}

	initBt1();

	
	function initBt1() {
	  var bt1 = document.querySelectorAll('#getCodeBtn')[0];
	  var $circlesTopLeft = bt1.querySelectorAll('.circle.top-left');
	  var $circlesBottomRight = bt1.querySelectorAll('.circle.bottom-right');

	  var tl = new TimelineLite();
	  var tl2 = new TimelineLite();

	  var btTl = new TimelineLite({ paused: true });

	  tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
	  tl.to($circlesTopLeft[0], 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
	  tl.to($circlesTopLeft[1], 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
	  tl.to($circlesTopLeft[2], 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
	  tl.to($circlesTopLeft[0], 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
	  tl.to($circlesTopLeft[1], 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
	  tl.to($circlesTopLeft[2], 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

	  var tlBt1 = new TimelineLite();
	  var tlBt2 = new TimelineLite();

	  tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
	  tlBt1.add(tl);

	  tl2.to($circlesBottomRight, 1.2, { x: 25, y: 25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
	  tl2.to($circlesBottomRight[0], 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
	  tl2.to($circlesBottomRight[1], 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
	  tl2.to($circlesBottomRight[2], 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.1');
	  tl2.to($circlesBottomRight[0], 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
	  tl2.to($circlesBottomRight[1], 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
	  tl2.to($circlesBottomRight[2], 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');
	  
	  tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: -45 });
	  tlBt2.add(tl2);

	  btTl.add(tlBt1);
	  btTl.to(bt1.parentNode.querySelectorAll('.button__bg'), 0.8, { scaleY: 1.1 }, 0.1);
	  btTl.add(tlBt2, 0.2);
	  btTl.to(bt1.parentNode.querySelectorAll('.button__bg'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

	  btTl.timeScale(2.6);

	  bt1.addEventListener('click', function() {
	    btTl.restart();
	  });
	}










});