var canvas = new fabric.Canvas('mycan');

blockwidth= 30;
blockheight=30;

playerx=10;
playery=10; 

var playobis="";
var blockimg="";

function playerupd(){
    fabric.Image,fromURL("player.png", function(Img){
        playobis= Img;

        playobis.scaleToWidth(150);
        playobis.scaleToHeight(140);
        playobis.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}

function newimage(get_image){
    fabric.Image,fromURL(get_image, function(Img){
        blockimg= Img;

        blockimg.scaleToWidth(blockwidth);
        blockimg.scaleToHeight(blockheight);
        blockimg.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}