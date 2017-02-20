/*
* @Author: Administrator
* @Date:   2017-02-10 21:13:34
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-12 11:24:58
*/

window.onload=function(){
	//页面伸缩后重加载页面
	window.onresize = function(){
    location.reload(true);
}
	
	
	var catleft=document.getElementsByClassName('cat-left')[0];
    var catitems=document.getElementsByClassName('cat-items')[0];
    var catright=document.getElementsByClassName('cat-right')[0];
    var catrightbox=document.getElementsByClassName('cat-rightbox')[0];
    	//console.log(catright);
    	//console.log(catrightbox);
    	drap(catitems,catleft);
    	drap(catrightbox,catright);

		function drap(smbox,lgbox){

//页面内容拖放
	var startY,nowY,distance;
	var offsettop=0;
	var max=lgbox.offsetHeight-smbox.offsetHeight;
    //console.log(max);
    // console.log(smbox);
    // smbox.style.transform="translateY(500px)"; 
    // smbox.style.webkitTransform="translateY(500px)";
    function addTransition(){
    	smbox.style.tansition="all .5s  ease 0s"
    	smbox.style.webkitTansition="all .5s  ease 0s"
    }
    function removeTransition(){
    	smbox.style.tansition="all 0s  ease 0s"
    	smbox.style.webkitTansition="all 0s  ease 0s"
    }
    smbox.addEventListener('touchstart',function(e){
    	e.preventDefault();
    	//console.log(e.touches);
    	startY=e.touches[0].clientY;
    })
     smbox.addEventListener('touchmove',function(e){
    	e.preventDefault();
    	nowY=e.touches[0].clientY;
    	distance=nowY-startY;
    	//console.log(distance);
    	addTransition();
    	
    	  smbox.style.transform="translateY("+(offsettop+distance)+"px)"; 
    	  smbox.style.webkitTransform="translateY("+(offsettop+distance)+"px)";
    	
    })

	smbox.addEventListener('touchend',function(e){
		offsettop=offsettop+distance;
		if(offsettop>0){
			offsettop=0;
			smbox.style.transform="translateY(0px)"; 
    	  smbox.style.webkitTransform="translateY(0px)";
		}
		if(offsettop<max){
			offsettop=max;
			smbox.style.transform="translateY("+max+"px)"; 
    	  smbox.style.webkitTransform="translateY("+max+"px)";
		}
	})
 }

}