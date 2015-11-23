var dataObj = function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
	
	this.yellowTemp = 0;
	this.blueTemp = 0;
	this.yellowCount = 0;
	this.blueCount = 0;
}

dataObj.prototype.draw = function()
{
	var w = can1.width;
	var h = can1.height;

	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	ctx1.fillStyle = "white";
	//ctx1.fillText("SCORE: "+ this.score, w * 0.5, h - 20);//绘制分数
	ctx1.fillText("SCORE: "+ this.score, w * 0.5, h - 540);

	var yellow = new Image();
	yellow.src = "./src/fruit.png";
	ctx1.drawImage(yellow, w * 0.35, h - 60);
	ctx1.fillText(" : "+ this.yellowCount, w * 0.42, h - 40);

	var blue = new Image();
	blue.src = "./src/blue.png";
	ctx1.drawImage(blue, w * 0.58, h - 60);
	ctx1.fillText(" : "+ this.blueCount, w * 0.65, h - 40);


	if(this.gameOver)
	{
			this.alpha += deltaTime * 0.0005;
			if(this.alpha >1){
				this.alpha = 1;
			}
			ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
		  	ctx1.fillText("GAMEOVER",w * 0.5 , h * 0.5);
	}
	ctx1.restore();
}
dataObj.prototype.addScore = function()
{
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}