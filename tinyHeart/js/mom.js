var momObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigbody = new Image();
	this.bigTail = new Image();
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigbody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function()
{
		//lerp x,y
		this.x = lerpDistance(mx, this.x, 0.99);
		this.y = lerpDistance(my, this.y, 0.99);

		//delta angle
		//Math.atan2(y,x)
		var deltaY = my - this.y;
		var deltaX = mx - this.x;	
		var beta = Math.atan2(deltaY, deltaX) + Math.PI;//-PI,PI

		//lerp angle
		this.angle = lerpAngle(beta, this.angle, 0.6);	

		ctx1.save();
		ctx1.translate(this.x,this.y); //移动画布原点
		ctx1.rotate(this.angle);
		ctx1.drawImage(this.bigEye, -this.bigEye.width*0.5, -this.bigEye.height * 0.5);
		ctx1.drawImage(this.bigbody, -this.bigbody.width*0.5, -this.bigbody.height * 0.5);
		ctx1.drawImage(this.bigTail, -this.bigTail.width*0.5 + 30, -this.bigTail.height * 0.5);

		ctx1.restore();
}