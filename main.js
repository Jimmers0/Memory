    let card1 = 'none'
    let card2 = 'none'
    var test = 'none'
    var lives = 12
    var livesLost = 0
    var time = 0
    var seconds = 0
    var minutes = 0
    var deduction = 0
    var deduction2 = 0
    var totalDeduction = 0
    var finalScore = 0
    var matchedcardsarr = []
    var vadermatch = false
    var maulmatch = false
    var troopermatch = false
    var sidiousmatch = false
    var bobamatch = false
    var dookumatch = false
    var phasmamatch = false
    var grievousmatch = false
    var kylomatch = false
    var inquisitormatch = false
    var tiematch = false
    var snokematch = false
    var cardFlipSound = new Audio("flip.mp3")
    var wrongSound = new Audio("wrong.mp3")
    var vaderLose = new Audio("vadersound.mov")
    var match = new Audio("confirm.mp3")

    function win(){
        if (matchedcardsarr.length === 9){
            $('#youwin').toggleClass('show')
            $('#container').removeClass('show')
            $('#container2').removeClass('show')
            $('#hearts').removeClass('show')
            calculateScore()
            $("#score").html("SCORE: " +finalScore)

        }

        
    }

    function consoleCard(){
        console.log('card1= ' +card1)
        console.log('card2= ' +card2)
        console.log(matchedcardsarr)
        console.log(matchedcardsarrHard)
    }

    function calculateScore() {
        console.log(time)
        deduction = time * 10
        livesLost = 12 - lives
        console.log(livesLost)
        deduction2 = livesLost * 1000
        totalDeduction = deduction + deduction2
        finalScore = 12000 - totalDeduction
    }

    function calculateScoreHard() {
        console.log(time)
        deduction = time * 10
        livesLostHard = 12 - livesHard
        console.log(livesLostHard)
        deduction2Hard = livesLostHard * 1000
        totalDeductionHard = deductionHard + deduction2Hard
        finalScoreHard = 12000 - totalDeductionHard
    }


    function checkLives(){

        console.log(lives)
        if (lives === 12){

        } else if (lives === 11) {
            $('#heart12').addClass('show')
        } else if (lives === 10) {
            $('#heart11').addClass('show')
        } else if (lives === 9) {
            $('#heart10').addClass('show')
        } else if (lives === 8) {
            $('#heart9').addClass('show')
        } else if (lives === 7) {
            $('#heart8').addClass('show')
        } else if (lives === 6) {
            $('#heart7').addClass('show')
        } else if (lives === 5) {
            $('#heart6').addClass('show')
        } else if (lives === 4) {
            $('#heart5').addClass('show')
        } else if (lives === 3) {
            $('#heart4').addClass('show')
        } else if (lives === 2) {
            $('#heart3').addClass('show')
        } else if (lives === 1) {
            $('#heart2').addClass('show')
        } else if (lives === 0) {
            $('#heart1').addClass('show')
            $('#youlose').toggleClass('show')
            $('#container').removeClass('show')
            $('#hearts').removeClass('show')
            vaderLose.play()
        }
    }


$(document).ready(() => {

    $('#winnewgame').click(function() {
        location.reload()
    })

    $('#losenewgame').click(function() {
        location.reload()
    })

 


    function shuffle(){
        $("#gamecards").each(function(){
            var divs = $(this).find('div');
            for(var i = 0; i < divs.length; i++) $(divs[i]).remove();            
            //the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
            var i = divs.length;
            if ( i == 0 ) return false;
            while ( --i ) {
               var j = Math.floor( Math.random() * ( i + 1 ) );
               var tempi = divs[i];
               var tempj = divs[j];
               divs[i] = tempj;
               divs[j] = tempi;
             }
            for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
        });                    
    }

    shuffle()

    $('.vader').click(function() {
        console.log("vader clicked")
        console.log('test card: ' + test)

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (vadermatch === true || card1 === 'vader') {
            console.log("cards already matched or is already on first flip")
        } else {
            $('#vadercardinside').toggleClass('show')
            cardFlipSound.play()

        if (card1 === 'none'){
            card1 = 'vader'
            test = '#vadercardinside'
            
            console.log('test card: ' +test)
        }
// if card one is not vader AND card2 is none card2 will be vader
        if ((card1 !== 'vader') && (card2 === 'none')) {
                card2 = 'vader'
            //if card one is vader2 consolelog match, vader is true and push darth vader to array 
                if (card1 === 'vader2') {
                    console.log('match!')
                    vadermatch = true
                    match.play()
                    matchedcardsarr.push('darthvader')
                    card1 = 'none'
                    card2 = 'none'
                }  else {

                    setTimeout(function(){
                        console.log('nomatch')
                        lives--;
                        checkLives()
                        $(test).toggleClass('show')
                        $('#vadercardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                        console.log('??' +test)
                       }, 1000);
                }
        }

    }
        win()
        consoleCard()
    })

    $('.vader2').click(function() {
        console.log("vader2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (vadermatch === true || card1 === 'vader2'){
            console.log("cards already matched")
        } else {
            $('#vader2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'vader2'
            test = '#vader2cardinside'
            console.log('test card: ' +test)
            
        }
// checks to see if card is its match if not flips card and first card
        if ((card1 !== 'vader2') && (card2 === 'none')) {
                card2 = 'vader2'
                if (card1 === 'vader') {
                    console.log('match!')
                    vadermatch = true
                    match.play()
                    matchedcardsarr.push('darthvader')
                    card1 = 'none'
                    card2 = 'none'
                } else {
                    setTimeout(function(){
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#vader2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
        win()
        consoleCard()
    })

    $('.maul').click(function() {
        console.log("maul clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (maulmatch === true || card1 === 'maul'){
            console.log("cards already matched")
        } else {
            $('#maulcardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'maul'
            test = '#maulcardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'maul') && (card2 === 'none')) {
                card2 = 'maul'
                if (card1 === 'maul2') {
                    console.log('match!')
                    maulmatch = true
                    match.play()
                    matchedcardsarr.push('darthmaul')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#maulcardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })


    $('.maul2').click(function() {
        console.log("maul2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (maulmatch === true || card1 === 'maul2'){
            console.log("cards already matched")
        } else {
            $('#maul2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'maul2'
            test = '#maul2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'maul2') && (card2 === 'none')) {
                card2 = 'maul2'
                if (card1 === 'maul') {
                    console.log('match!')
                    maulmatch = true
                    match.play()
                    matchedcardsarr.push('darthmaul')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#maul2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
        win()
        consoleCard()
    })


    $('.trooper').click(function() {
        console.log("trooper clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (troopermatch === true || card1 === 'trooper'){
            console.log("cards already matched")
        } else {
            $('#troopercardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'trooper'
            test = '#troopercardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'trooper') && (card2 === 'none')) {
                card2 = 'trooper'
                if (card1 === 'trooper2') {
                    console.log('match!')
                    troopermatch = true
                    match.play()
                    matchedcardsarr.push('stormtrooper')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#troopercardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
        win()
        consoleCard()
    })


    $('.trooper2').click(function() {
        console.log("trooper2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (troopermatch === true || card1 === 'trooper2'){
            console.log("cards already matched")
        } else {
            $('#trooper2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'trooper2'
            test = '#trooper2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'trooper2') && (card2 === 'none')) {
                card2 = 'trooper2'
                if (card1 === 'trooper') {
                    console.log('match!')
                    troopermatch = true
                    match.play()
                    matchedcardsarr.push('stormtrooper')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#trooper2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
        win()
        consoleCard()
    })
    


    $('.sidious').click(function() {
        console.log("sidious clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (sidiousmatch === true || card1 === 'sidious'){
            console.log("cards already matched")
        } else {
            $('#sidiouscardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'sidious'
            test = '#sidiouscardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'sidious') && (card2 === 'none')) {
                card2 = 'sidious'
                if (card1 === 'sidious2') {
                    console.log('match!')
                    sidiousmatch = true
                    match.play()
                    matchedcardsarr.push('sidious')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#sidiouscardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })


    $('.sidious2').click(function() {
        console.log("sidious2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (sidiousmatch === true || card1 === 'sidious2'){
            console.log("cards already matched")
        } else {
            $('#sidious2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'sidious2'
            test = '#sidious2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'sidious2') && (card2 === 'none')) {
                card2 = 'sidious2'
                if (card1 === 'sidious') {
                    console.log('match!')
                    sidiousmatch = true
                    match.play()
                    matchedcardsarr.push('sidious')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#sidious2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })
       
    $('.boba').click(function() {
        console.log("boba clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (bobamatch === true || card1 === 'boba'){
            console.log("cards already matched")
        } else {
            $('#bobacardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'boba'
            test = '#bobacardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'boba') && (card2 === 'none')) {
                card2 = 'boba'
                if (card1 === 'boba2') {
                    console.log('match!')
                    bobamatch = true
                    match.play()
                    matchedcardsarr.push('bobafett')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#bobacardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.boba2').click(function() {
        console.log("boba2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (bobamatch === true || card1 === 'boba2'){
            console.log("cards already matched")
        } else {
            $('#boba2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'boba2'
            test = '#boba2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'boba2') && (card2 === 'none')) {
                card2 = 'boba2'
                if (card1 === 'boba') {
                    console.log('match!')
                    bobamatch = true
                    match.play()
                    matchedcardsarr.push('bobafett')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#boba2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.dooku').click(function() {
        console.log("dooku clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (dookumatch === true || card1 === 'dooku'){
            console.log("cards already matched")
        } else {
            $('#dookucardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'dooku'
            test = '#dookucardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'dooku') && (card2 === 'none')) {
                card2 = 'dooku'
                if (card1 === 'dooku2') {
                    console.log('match!')
                    dookumatch = true
                    match.play()
                    matchedcardsarr.push('countdooku')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#dookucardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.dooku2').click(function() {
        console.log("dooku2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (dookumatch === true || card1 === 'dooku2'){
            console.log("cards already matched")
        } else {
            $('#dooku2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'dooku2'
            test = '#dooku2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'dooku2') && (card2 === 'none')) {
                card2 = 'dooku2'
                if (card1 === 'dooku') {
                    console.log('match!')
                    dookumatch = true
                    match.play()
                    matchedcardsarr.push('countdooku')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#dooku2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.phasma').click(function() {
        console.log("phasma clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (phasmamatch === true || card1 === 'phasma'){
            console.log("cards already matched")
        } else {
            $('#phasmacardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'phasma'
            test = '#phasmacardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'phasma') && (card2 === 'none')) {
                card2 = 'phasma'
                if (card1 === 'phasma2') {
                    console.log('match!')
                    phasmamatch = true
                    match.play()
                    matchedcardsarr.push('captainphasma')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#phasmacardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.phasma2').click(function() {
        console.log("phasma2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (phasmamatch === true || card1 === 'phasma2'){
            console.log("cards already matched")
        } else {
            $('#phasma2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'phasma2'
            test = '#phasma2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'phasma2') && (card2 === 'none')) {
                card2 = 'phasma2'
                if (card1 === 'phasma') {
                    console.log('match!')
                    phasmamatch = true
                    match.play()
                    matchedcardsarr.push('captainphasma')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#phasma2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.grievous').click(function() {
        console.log("grievous clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (grievousmatch === true || card1 === 'grievous'){
            console.log("cards already matched")
        } else {
            $('#grievouscardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'grievous'
            test = '#grievouscardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'grievous') && (card2 === 'none')) {
                card2 = 'grievous'
                if (card1 === 'grievous2') {
                    console.log('match!')
                    grievousmatch = true
                    match.play()
                    matchedcardsarr.push('generalgrievous')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#grievouscardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.grievous2').click(function() {
        console.log("grievous2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (grievousmatch === true || card1 === 'grievous2'){
            console.log("cards already matched")
        } else {
            $('#grievous2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'grievous2'
            test = '#grievous2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'grievous2') && (card2 === 'none')) {
                card2 = 'grievous2'
                if (card1 === 'grievous') {
                    console.log('match!')
                    grievousmatch = true
                    match.play()
                    matchedcardsarr.push('generalgrievous')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#grievous2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.kylo').click(function() {
        console.log("kylo clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (kylomatch === true || card1 === 'kylo'){
            console.log("cards already matched")
        } else {
            $('#kylocardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'kylo'
            test = '#kylocardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'kylo') && (card2 === 'none')) {
                card2 = 'kylo'
                if (card1 === 'kylo2') {
                    console.log('match!')
                    kylomatch = true
                    match.play()
                    matchedcardsarr.push('kyloren')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#kylocardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })

    $('.kylo2').click(function() {
        console.log("kylo2 clicked")

        if (card1 !== 'none' && card2 !== 'none'){

        } else if (kylomatch === true || card1 === 'kylo2'){
            console.log("cards already matched")
        } else {
            $('#kylo2cardinside').toggleClass('show')
            cardFlipSound.play()

       
        if (card1 === 'none'){
            card1 = 'kylo2'
            test = '#kylo2cardinside' 
            console.log('test card: ' +test)
        }

        if ((card1 !== 'kylo2') && (card2 === 'none')) {
                card2 = 'kylo2'
                if (card1 === 'kylo') {
                    console.log('match!')
                    kylomatch = true
                    match.play()
                    matchedcardsarr.push('kyloren')
                    card1 = 'none'
                    card2 = 'none'
                } else {

                    setTimeout(function(){
                        console.log('nomatch')
                        $(test).toggleClass('show')
                        lives--;
                        checkLives()
                        $('#kylo2cardinside').toggleClass('show')
                        cardFlipSound.play()
                        wrongSound.play()
                        test = 'none'
                        card1 = 'none'
                        card2 = 'none'
                       }, 1000);
                }
        }
    }
    win()
    consoleCard()
    })
})