canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

vMove = 20;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 75;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}else
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}else
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}else

		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y > 60){
		greencar_y = greencar_y - vMove;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y < 240){
		greencar_y = greencar_y + vMove;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x > 0){
		greencar_x = greencar_x - vMove;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x < 700){
		greencar_x = greencar_x + vMove;
		uploadBackground();
		uploadgreencar();
	}
}
