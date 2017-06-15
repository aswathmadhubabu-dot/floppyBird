$(function(){

var container = $("#container");
var bird = $("#bird");
var pole = $(".pole");
var pole1 = $("#pole1");
var pole2 = $("#pole2");
var score = $("#score");
var speed_span = $("#speed");
var restart_btn = $("#restart_btn");

var container_width = parseInt(container.width());
var pole_initial_position = parseInt(pole.css('right'));
var pole_initial_height = parseInt(pole.css('height'));
var bird_left = parseInt(bird.css('left'));
var speed = 10;

    var the_game = setInterval(function(){
        var pole_current_position = parseInt(pole.css('right'));

        //poles contain
        if(pole_current_position > container_width)
        {
            var new_height = parseInt(Math.random() * 100);

            //pole height change
            pole1.css('height',pole_initial_height+new_height);
            pole2.css('height',pole_initial_height-new_height);

            //speed plus...
            speed = speed+1;
            speed_span.text(speed);

            pole_current_position = pole_initial_position
        }
    });
});