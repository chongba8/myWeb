/*
* @Author: Administrator
* @Date:   2017-02-12 10:22:14
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-12 11:21:47
*/

function back1(ob,back){
	var startX;
    var endX;
    var distance;
      //console.log(obj);
     ob.addEventListener('touchstart',function(){
      startX=event.targetTouches[0].clientX;

     },false)
     ob.addEventListener('touchmove',function(){
      endX=event.targetTouches[0].clientX;
      //console.log(endX);
     })
     ob.addEventListener('touchend',function(){
      distance=endX-startX;
      //console.log(distance);
    if(distance>0&& Math.abs(distance)>100){
            back.click();
          }
		})
 }
 