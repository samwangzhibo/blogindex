var aneObj = function()
{
    //start point, contro point, end point(sin)
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.amp = [];
    this.alpha = 0;
}
aneObj.prototype.num =50;
aneObj.prototype.init = function()
{
    for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 16 + Math.random() * 20;//[0,1) 
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 +50;
    }
}  
aneObj.prototype.draw = function()
{   
     this.alpha += deltaTime * 0.0008;
     var l = Math.sin(this.alpha); //[-1, 1]
     ctx2.save(); //canvas的属性只在内部有作用
     ctx2.globalAlpha = 0.6; //透明度
     ctx2.lineWidth = 20; //线宽
     ctx2.lineCap = "round"; //样式
     ctx2.strokeStyle = "#3b154e"; //颜色
    for (var i = 0; i < this.num; i++) {
        //beginPath,moveTo,linTo,stroke,starokeStyle,linewidth,lineCap,globalAlbha
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight); //移动到初始化的点
        ctx2.quadraticCurveTo(this.rootx[i],canHeight - 10, this.headx[i] + l * this.amp[i],this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}