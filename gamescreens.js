$(document).ready(() => {


    document.createElement('template').content

    $('#startgame').click(function() {
        
        
        $('#welcomescreen').addClass('hide')
        $('#container').addClass('show')
        $('#hearts').addClass('show')

        setInterval(function(){
            time++;
            seconds++;
            if (seconds === 60){
             seconds = 0;
             minutes++;
             if (minutes < 10) {
                minutes = "0" + minutes;
            }
            }

            if (minutes < 0) {
                minutes = "00"
            }
            
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            $("#minutes").html(minutes)
            $("#seconds").html(seconds)
           }, 1000);    
    })

    $('#startgamehard').click(function() {
        
        
        $('#welcomescreen').addClass('hide')
        $('#container2').addClass('show')
        $('#hearts').addClass('show')
        

        setInterval(function(){
            time++;
            seconds++;
            if (seconds === 60){
             seconds = 0;
             minutes++;
             if (minutes < 10) {
                minutes = "0" + minutes;
            }
            }

            if (minutes < 0) {
                minutes = "00"
            }
            
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            $("#minutes").html(minutes)
            $("#seconds").html(seconds)
           }, 1000);    
    })





})