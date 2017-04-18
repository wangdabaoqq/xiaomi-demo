define(function(){
window.onscroll = function() {   
  var sTop = document.body.scrollTop || document.documentElement.scrollTop;   
  _loadImage(sTop);
}
function _loadImage(sTop) {   
  var imgList = document.querySelectorAll(".lazyload");  
  for (var i = 0; i < imgList.length; i++) {  
   var el = imgList[i];   
   if (_isToShow(el, sTop)) {   
    var imgUrl = el.getAttribute("data-src");   
    el.setAttribute("src", imgUrl);   
    el.className = el.className.replace("lazyload", "");   
   }   
  };  
}
function _isToShow(el, sTop) {   
 var coords = el.getBoundingClientRect();   
 var wHeight = window.innerHeight || document.documentElement.clientHeight;   
 return (coords.top >= 0 && coords.left >= 0 && coords.top <= wHeight);   
}

});