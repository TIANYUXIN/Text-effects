var h=0;
$('.button').bind('mousedown touchstart',function(e){
	$('.clicked').removeClass('clicked');
	$(this).addClass('clicked');
})
$(document).bind('mousemove touchmove',function(e){
	e.preventDefault();
	var drawsize=55;
	var drawtype=$('.clicked').html();
	var floattypes=Array('floatOne','floatTwo','floatThree','floatFour','floatFive');
	var floattype=floattypes[Math.floor(Math.random()*floattypes.length)];
	var xpos=e.originalEvent.pageX;
	var ypos=e.originalEvent.pageY;
	$('body').append('<div class="draw" style="font-size:'+drawsize+'px;left:'+xpos+'px;top:'+ypos+'px;-webkit-animation:'+floattype+' .9s 1;-moz-animation:'+floattype+' .9s 1;color:hsla('+h+',100%,70%,1)">'+drawtype+'</div>');
	$('.draw').each(function() {
      var div = $(this);
      setTimeout(function() {$(div).remove();},800);
    });
});
setInterval(function() {
  if(h<=360) {h++;}
  else {h=0;}
},10);