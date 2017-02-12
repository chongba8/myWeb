/*
* @Author: Administrator
* @Date:   2017-02-11 15:42:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-12 11:20:39
*/
window.onload=function(){
	var checked=document.getElementsByClassName('choose');
	var delelt=document.getElementsByClassName('delelt');
	var log=document.getElementsByClassName('log')[0];//弹出层对象
	var btn1=document.getElementsByClassName('delebtn')[0].getElementsByTagName('button')[0];
	var btn2=document.getElementsByClassName('delebtn')[0].getElementsByTagName('button')[1];
	var body=document.getElementsByTagName('body')[0];
	var back=document.getElementsByClassName('icon_back')[0];
	console.log(body);
		back1(body,back);
	//遍历选中点击
	for(var i=0,length=checked.length;i<length;i++){
		checked[i].onclick=function(){
			var havechecked=this.getAttribute('checked');
			if(havechecked!=null){
				this.removeAttribute('checked')
			}
			else{
				this.setAttribute('checked',' ');
			}
		}
	}
	//删除按钮点击弹出罩子层
	for(var i=0,length=delelt.length;i<length;i++){
		delelt[i].onclick=function(){
			log.style.display="block";
		}
	}
	btn1.onclick=function(){
		log.style.display="none";
	}

}