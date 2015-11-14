var aneObj = function()
{
    this.x = [];
    this.len = [];
}
aneObj.prototype.num =50;
aneObj.prototype.init = function()
{
    for (var i = 0; i < this.num; i++) {
        this.x[i] = i * 16 + Math.random() * 20;//[0,1) 
        this.len[i] = 200 + Math.random() * 50;
    }
}  
aneObj.prototype.draw = function()
{   
     ctx2.save(); //canvas的属性只在内部有作用
     ctx2.globalAlbha = 0.6; //透明度
     ctx2.lineWidth = 20; //线宽
     ctx2.lineCap = "round"; //样式
     ctx2.strokeStyle = "#3b154e"; //颜色
    for (var i = 0; i < this.num; i++) {
        //beginPath,moveTo,linTo,stroke,starokeStyle,linewidth,lineCap,globalAlbha
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight); //移动到初始化的点
        ctx2.lineTo(this.x[i],canHeight - this.len[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}