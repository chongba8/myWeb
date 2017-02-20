/*
* @Author: Administrator
* @Date:   2017-02-19 17:15:43
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-20 14:59:00
*/

/*创建一个圆+文字的生成器对象*/
 function circle_text(option){
 	this._init(option);
 };
 circle_text.prototype={
 	
 	_init:function(option){
 		/*创建圆+文字的一个组*/
 		this.group=new Konva.Group({
 			x:option.x,
 			y:option.y
 		});
 		var circle = new Konva.Circle({
 			x:0,
 			y:0,
 			radius:option.radius,
 			fill:option.style,
 			opacity:0.8,
 			
 		})
 		this.group.add(circle);
 		/*添加文字*/
 		var text=new Konva.Text({
 			x:0-option.radius,
 			y:-8,
 			width:option.radius*2,
 			align:'center',
 			text:option.text,
 			fontSize:option.fontSize,
 			fill: '#fff',
 			fontStyle:'bold'
 		});
 		this.group.add(text);

 	},
 	addToGroupLayer: function( arg ) {
		arg.add( this.group );
	}
 }
/*宇宙模型生成器*/
 function universe(options){


//var container
        var stage = new Konva.Stage({
            container:options.container,
            width:500,
            height:500
        });
        /*创建背景层*/
        var bg_layer = new Konva.Layer();
        stage.add(bg_layer);
        /*创建2个背景圆*/
       
        var bgCircle1 = new Konva.Circle({
            x:250,
            y:250,
            radius:radius1,
            stroke:'#11ffdd',
            dash:[10,4],
            opacity:0.2
        });
        
    var bgCircle2 = new Konva.Circle({
            x:250,
            y:250,
            radius:radius2,
            stroke:'#11ffdd',
            dash:[10,6],
            opacity:0.2
        });
  
        bg_layer.add(bgCircle1);
        bg_layer.add(bgCircle2);
       
        /*中间的大圆*/
        var circle_text0=new circle_text(options.option0);
        circle_text0.addToGroupLayer(bg_layer);
        bg_layer.draw();
        /*创建运动层*/
        var animate1=new Konva.Layer();
        stage.add(animate1);
        /*第一环第1个*/
        var group1=new Konva.Group({
            x:250,
            y:250,
        });
        var circle_text1=new circle_text(options.option1);
        circle_text1.addToGroupLayer(group1);
        /*第一环第2个*/
        var circle_text2=new circle_text(options.option2);
        circle_text2.addToGroupLayer(group1);
        /*第一环第3个*/
         var circle_text3=new circle_text(options.option3);
         circle_text3.addToGroupLayer(group1);
         animate1.add(group1);
        /*第2环第1个*/
         var group2=new Konva.Group({
            x:250,
            y:250,
        });
        var circle_text4=new circle_text(options.option4);
        circle_text4.addToGroupLayer(group2);
        /*第2环第2个*/
        var circle_text5=new circle_text(options.option5);
        circle_text5.addToGroupLayer(group2);
        
       /*第2环第3个*/
        var circle_text6=new circle_text(options.option6);
        circle_text6.addToGroupLayer(group2);
        animate1.add(group2);
       
       
       
        animate1.draw();
        /*动起来*/
       var rotateAnglPerSecond=50;//设置每秒旋转50度
       var animate=new Konva.Animation(function(frame){
       var rotateAngle=rotateAnglPerSecond*frame.timeDiff/1000;//timeDiff 上一祯和下一祯的时间间隔，毫秒级
        group1.rotate(rotateAngle);
        group1.getChildren().each(function(item,index){
            item.rotate(-rotateAngle);
        }) 
        group2.rotate(-rotateAngle);
        group2.getChildren().each(function(item,index){
            item.rotate(rotateAngle);
        })

       },animate1)
       animate.start();
       /*鼠标放上去放下去的效果*/
       animate1.on('mouseover',function(){
       	rotateAnglPerSecond=10;
       }) 
       animate1.on('mouseout',function(){
       	rotateAnglPerSecond=50;
       })
    }