/**
 * Created by Administrator on 2016/12/18.
 */
function show(obj){obj.style.display="block";}
function hide(obj){obj.style.display="none";}
function scroll(){
    //֧��pageYoffset�������
    if(pageYOffset!=null){
        return{
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }
    //�����ǹ���ģʽ���������������doctype��
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