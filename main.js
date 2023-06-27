canvas=new fabric.Canvas('myCanvas');

player_x='10';
player_y='10';
block_width='30';
block_height='30';
player_object="";
block_object="";

function player_upload()
{
   console.log("player_uploadworking");
    fabric.Image.fromURL("player.png",
    function(Img){
     player_object=Img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({
        top:player_y,
        left:player_x
     });
     canvas.add(player_object);
    }
    );
}
function new_image(get_Image)
{
    fabric.Image.fromURL(get_Image,
    function(Img){
     block_object=Img;
     block_object.scaleToWidth(block_width);
     block_object.scaleToHeight(block_height);
     block_object.set({
        top:player_y,
        left:player_x
     });
     canvas.add(block_object);
    }
    );
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    KeyPressed= e.keyCode;
    console.log(KeyPressed);
    if(e.shiftKey == true && KeyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width= block_image_width + 10;
        block_image_height= block_image_height +10;
        document.getElementById("current_width").innerHTML =  block_image_width;
        document.getElementById("current_height").innerHTML =  block_image_height;
        }

        if(e.shiftKey && KeyPressed == '77')    
        {
            console.log("m and shift pressed together");
            block_image_width= block_image_width - 10;
            block_image_height= block_image_height -10;
            document.getElementById("current_width").innerHTML =  block_image_width;
            document.getElementById("current_height").innerHTML =  block_image_height;
        }

        if(KeyPressed == '38')
        {
           up();
           console.log("up");
        }
        if(KeyPressed == '40')
        {
           down();
           console.log("down");
        }
        if(KeyPressed == '37')
        {
           left();
           console.log("left");
        }
        if(KeyPressed == '39')
        {
           right();
           console.log("right");
        }

        if(KeyPressed == '87')
        {
           new_image('wall.jpg');
           console.log("w");
        }
        if(KeyPressed == '71')
        {
           new_image("ground.png");
           console.log("g");
        }
        if(KeyPressed == '76')
        {
           new_image("light_green.png");
           console.log("l");
        }
        if(KeyPressed == '84')
        {
           new_image("trunk.jpg");
           console.log("t");
        }
        if(KeyPressed == '82')
        {
           new_image("roof.jpg");
           console.log("r");
        }
        if(KeyPressed == '89')
        {
           new_image("yellow_wall.png")
           console.log("y");
        }
        if(KeyPressed == '68')
        {
           new_image("dark_green.png")
           console.log("d");
        }

        if(KeyPressed == '85')
        {
           new_image("unique.png")
           console.log("u");
        }
        if(KeyPressed == '67')
        {
           new_image("cloud.jpg")
           console.log("c");
        }
}

function up()
{
   if(player_y   >= 0)
{
   player_y= player_y - block_height;
   console.log("block height="+ block_height);
   console.log("when up arrow is pressed x= "+player_x +"y="+ player_y);
   canvas.remove(player_object);
   player_upload();
}
}
function down()
{
   if(player_y <= 500)
{
   player_y= player_y + block_height;
   console.log("block height="+ block_height);
   console.log("when down arrow is pressed x= "+player_x +"y="+ player_y);
   canvas.remove(player_object);
   player_upload();
}
}
function left()
{
   if(player_x  >= 0)
{
   player_x= player_x - block_width;
   console.log("block width="+ block_width);
   console.log("when left arrow is pressed x= "+player_x +"y="+ player_y);
   canvas.remove(player_object);
   player_upload();
}
}
function right()
{
   if(player_x <=850)
{
   player_x= player_x + block_width;
   console.log("block width="+ block_width);
   console.log("when right arrow is pressed x= "+player_x +"y="+ player_y);
   canvas.remove(player_object);
   player_upload();
}
}