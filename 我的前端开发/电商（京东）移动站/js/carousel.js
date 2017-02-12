/*
* @Author: Administrator
* @Date:   2017-02-06 18:21:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-12 21:19:45
*/


//焦点轮播图
////点击图片移动
///<!DOCTYPE html>
// <html>
// <head lang="en">
//     <meta charset="UTF-8">
//     <title></title>
// <body>
   //  <div id="coursel">
   //          <ul id="imgs">
   //              <li><img src="imgs/l8.jpg" alt=""/></li>
   //              <li><img src="imgs/l1.jpg" alt=""/></li>
   //              <li><img src="imgs/l2.jpg" alt=""/></li>
   //              <li><img src="imgs/l3.jpg" alt=""/></li>
   //              <li><img src="imgs/l4.jpg" alt=""/></li>
   //              <li><img src="imgs/l5.jpg" alt=""/></li>
   //              <li><img src="imgs/l6.jpg" alt=""/></li>
   //              <li><img src="imgs/l7.jpg" alt=""/></li>
   //              <li><img src="imgs/l8.jpg" alt=""/></li>
   //              <li><img src="imgs/l1.jpg" alt=""/></li>
   //          </ul>
   //          <ul id="focus">
   //              <li class="now"></li>
   //              <li></li>
   //              <li></li>
   //              <li></li>
   //              <li></li>
   //              <li></li>
   //              <li></li>
   //              <li></li>
   //          </ul>
   //      </div>
   // </body>
// </html>
// 调用轮播图方法carousel 需要按上建立html（imgs，focus）

     function carousel(){
        var imgs=document.getElementById("imgs").getElementsByTagName('li');
        var lis=document.getElementById('focus').getElementsByTagName('li');
        var courselBox=document.getElementById('imgs');
        var timer=null;
        var length=imgs.length;
        var index=1;
        var img_width=imgs[0].offsetWidth;
        var leader=img_width;
        var target=img_width;
        var dis=0;
        var startX=0;
        var endX=0;
        var timer=null;
        courselBox.style.marginLeft=-img_width+'px';
        //console.log(courselBox.style.marginLeft);
        courselBox.addEventListener('touchstart',function(event){
              event.preventDefault();
               stopplay();
             startX=event.targetTouches[0].clientX;
        },false)
        courselBox.addEventListener('touchmove',function(event){
          event.preventDefault();
             endX=event.targetTouches[0].clientX;
        },false)
        courselBox.addEventListener('touchend',function(event){
          event.preventDefault();
          autoplay();
             dis=endX-startX;
              if(dis<0&& Math.abs(dis)>40){
                    moveLeft();
                }
                else if(dis>0&& Math.abs(dis)>40){
                    moveRight();
                }
        },false)
        function moveLeft(){
           console.log(index+1);
            if(index==length-2){index=1; leader=0;}
            else{index++;}
            
            target=img_width*index;
            // console.log(index);
            show();
        }
         function moveRight(){
            console.log(index+1);
            if(index==1){index=length-2; leader=img_width*(length-1);}
            else{index--;}
            
            target=img_width*index;
            // console.log(index);
            show();
        }
        function show(){
            for(var i=0,length=lis.length;i<length;i++){
                lis[i].className="";
                if(index==0){index=length;lis[index-1].className="now";}
                else{lis[index-1].className="now";}
                
            }
        }
       setInterval(function(){
            // console.log(target);
            leader=leader+(target-leader)/10;
            courselBox.style.marginLeft=-leader+'px';
        },30)
     

       function autoplay(){
             timer=setInterval(function () {
                moveLeft();
            },3500)
        }
        function stopplay(){
            clearInterval(timer);
        }
        autoplay();
    }