/**
 * Created by Administrator on 2016/12/18.
 */
function show(obj){obj.style.display="block";}
function hide(obj){obj.style.display="none";}
function scroll(){
    //支持pageYoffset的浏览器
    if(pageYOffset!=null){
        return{
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }
    //其他非怪异模式浏览器，即声明了doctype的
    else if(document.compatMode == "CSS1Compat"){
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
    return{
        top:document.body.scrollTop,
        left:document.body.scrollLeft
    }
}