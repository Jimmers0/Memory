var livesHard = 12
var livesLostHard = 0
var timeHard = 0
var secondsHard = 0
var minutesHard = 0
var deductionHard = 0
var deduction2Hard = 0
var totalDeductionHard = 0
var finalScoreHard = 0
var matchedcardsarrHard = []
var time = 0
var seconds = 0
var minutes = 0

function calculateScoreHard() {
    console.log("time: " +time)
    deductionHard = time * 10
    livesLostHard = 12 - livesHard
    console.log("lives lost: " +livesLostHard)
    deduction2Hard = livesLostHard * 1000
    totalDeductionHard = deductionHard + deduction2Hard
    finalScoreHard = 12000 - totalDeductionHard
}



function winHard() {
    console.log("hard array: " +matchedcardsarrHard)
    if (matchedcardsarrHard.length === 1) {
        $('#youwin').toggleClass('show');
        $('#container').removeClass('show');
        $('#container2').removeClass('show');
        $('#hearts').removeClass('show');
        calculateScoreHard();
        $("#score").html("SCORE: " + finalScoreHard);
    }
}
    
    
        function shuffle() {
            $("#gamecards2").each(function () {
                var divs = $(this).find('div');
                for (var i = 0; i < divs.length; i++)
                    $(divs[i]).remove();
            
                var i = divs.length;
                if (i == 0)
                    return false;
                while (--i) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tempi = divs[i];
                    var tempj = divs[j];
                    divs[i] = tempj;
                    divs[j] = tempi;
                }
                for (var i = 0; i < divs.length; i++)
                    $(divs[i]).appendTo(this);
            });
        }


        function checkLivesHard(){

            console.log("lives: "+ livesHard)
            if (livesHard === 12){
    
            } else if (livesHard === 11) {
                $('#heart12').addClass('show')
            } else if (livesHard === 10) {
                $('#heart11').addClass('show')
            } else if (livesHard === 9) {
                $('#heart10').addClass('show')
            } else if (livesHard === 8) {
                $('#heart9').addClass('show')
            } else if (livesHard === 7) {
                $('#heart8').addClass('show')
            } else if (livesHard === 6) {
                $('#heart7').addClass('show')
            } else if (livesHard === 5) {
                $('#heart6').addClass('show')
            } else if (livesHard === 4) {
                $('#heart5').addClass('show')
            } else if (livesHard === 3) {
                $('#heart4').addClass('show')
            } else if (livesHard === 2) {
                $('#heart3').addClass('show')
            } else if (livesHard === 1) {
                $('#heart2').addClass('show')
            } else if (livesHard === 0) {
                $('#heart1').addClass('show')
                $('#youlose').toggleClass('show')
                $('#container2').removeClass('show')
                $('#hearts').removeClass('show')
                vaderLose.play()
            }
        }


        shuffle();


        $(document).ready(() => {

            shuffle();

        $('.vader3').click(function () {
            console.log("vader3 clicked");
            console.log('test card: ' + test);
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (vadermatch === true || card1 === 'vader3') {
                console.log("cards already matched or is already on first flip");
            }
            else {
                $('#vader3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'vader3';
                    test = '#vader3cardinside';
                    console.log('test card: ' + test);
                }
                // if card one is not vader AND card2 is none card2 will be vader
                if ((card1 !== 'vader3') && (card2 === 'none')) {
                    card2 = 'vader3';
                    //if card one is vader2 consolelog match, vader is true and push darth vader to array 
                    if (card1 === 'vader4') {
                        console.log('match!');
                        vadermatch = true;
                        match.play();
                        matchedcardsarrHard.push('darthvader');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            livesHard--;
                            checkLivesHard();
                            $(test).toggleClass('show');
                            $('#vader3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                            console.log('??' + test);
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.vader4').click(function () {
            console.log("vader4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (vadermatch === true || card1 === 'vader4') {
                console.log("cards already matched");
            }
            else {
                $('#vader4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'vader4';
                    test = '#vader4cardinside';
                    console.log('test card: ' + test);
                }
                // checks to see if card is its match if not flips card and first card
                if ((card1 !== 'vader4') && (card2 === 'none')) {
                    card2 = 'vader4';
                    if (card1 === 'vader3') {
                        console.log('match!');
                        vadermatch = true;
                        match.play();
                        matchedcardsarrHard.push('darthvader');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#vader4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.maul3').click(function () {
            console.log("maul3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (maulmatch === true || card1 === 'maul3') {
                console.log("cards already matched");
            }
            else {
                $('#maul3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'maul3';
                    test = '#maul3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'maul3') && (card2 === 'none')) {
                    card2 = 'maul3';
                    if (card1 === 'maul4') {
                        console.log('match!');
                        maulmatch = true;
                        match.play();
                        matchedcardsarrHard.push('darthmaul');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#maul3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.maul4').click(function () {
            console.log("maul4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (maulmatch === true || card1 === 'maul4') {
                console.log("cards already matched");
            }
            else {
                $('#maul4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'maul4';
                    test = '#maul4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'maul4') && (card2 === 'none')) {
                    card2 = 'maul4';
                    if (card1 === 'maul3') {
                        console.log('match!');
                        maulmatch = true;
                        match.play();
                        matchedcardsarrHard.push('darthmaul');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#maul4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.trooper3').click(function () {
            console.log("trooper3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (troopermatch === true || card1 === 'trooper3') {
                console.log("cards already matched");
            }
            else {
                $('#trooper3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'trooper3';
                    test = '#trooper3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'trooper3') && (card2 === 'none')) {
                    card2 = 'trooper3';
                    if (card1 === 'trooper4') {
                        console.log('match!');
                        troopermatch = true;
                        match.play();
                        matchedcardsarrHard.push('stormtrooper');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#trooper3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.trooper4').click(function () {
            console.log("trooper4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (troopermatch === true || card1 === 'trooper4') {
                console.log("cards already matched");
            }
            else {
                $('#trooper4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'trooper4';
                    test = '#trooper4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'trooper4') && (card2 === 'none')) {
                    card2 = 'trooper4';
                    if (card1 === 'trooper3') {
                        console.log('match!');
                        troopermatch = true;
                        match.play();
                        matchedcardsarrHard.push('stormtrooper');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#trooper4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.sidious3').click(function () {
            console.log("sidious3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (sidiousmatch === true || card1 === 'sidious3') {
                console.log("cards already matched");
            }
            else {
                $('#sidious3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'sidious3';
                    test = '#sidious3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'sidious3') && (card2 === 'none')) {
                    card2 = 'sidious3';
                    if (card1 === 'sidious4') {
                        console.log('match!');
                        sidiousmatch = true;
                        match.play();
                        matchedcardsarrHard.push('sidious3');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#sidious3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.sidious4').click(function () {
            console.log("sidious4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (sidiousmatch === true || card1 === 'sidious4') {
                console.log("cards already matched");
            }
            else {
                $('#sidious4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'sidious4';
                    test = '#sidious4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'sidious4') && (card2 === 'none')) {
                    card2 = 'sidious4';
                    if (card1 === 'sidious3') {
                        console.log('match!');
                        sidiousmatch = true;
                        match.play();
                        matchedcardsarrHard.push('sidious');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#sidious4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.boba3').click(function () {
            console.log("boba3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (bobamatch === true || card1 === 'boba3') {
                console.log("cards already matched");
            }
            else {
                $('#boba3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'boba3';
                    test = '#boba3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'boba3') && (card2 === 'none')) {
                    card2 = 'boba3';
                    if (card1 === 'boba4') {
                        console.log('match!');
                        bobamatch = true;
                        match.play();
                        matchedcardsarrHard.push('bobafett');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#boba3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.boba4').click(function () {
            console.log("boba4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (bobamatch === true || card1 === 'boba4') {
                console.log("cards already matched");
            }
            else {
                $('#boba4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'boba4';
                    test = '#boba4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'boba4') && (card2 === 'none')) {
                    card2 = 'boba4';
                    if (card1 === 'boba3') {
                        console.log('match!');
                        bobamatch = true;
                        match.play();
                        matchedcardsarrHard.push('bobafett');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#boba4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.dooku3').click(function () {
            console.log("dooku3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (dookumatch === true || card1 === 'dooku3') {
                console.log("cards already matched");
            }
            else {
                $('#dooku3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'dooku3';
                    test = '#dooku3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'dooku3') && (card2 === 'none')) {
                    card2 = 'dooku3';
                    if (card1 === 'dooku4') {
                        console.log('match!');
                        dookumatch = true;
                        match.play();
                        matchedcardsarrHard.push('countdooku');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#dooku3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.dooku4').click(function () {
            console.log("dooku4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (dookumatch === true || card1 === 'dooku4') {
                console.log("cards already matched");
            }
            else {
                $('#dooku4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'dooku4';
                    test = '#dooku4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'dooku4') && (card2 === 'none')) {
                    card2 = 'dooku4';
                    if (card1 === 'dooku3') {
                        console.log('match!');
                        dookumatch = true;
                        match.play();
                        matchedcardsarrHard.push('countdooku');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#dooku4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.phasma3').click(function () {
            console.log("phasma3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (phasmamatch === true || card1 === 'phasma3') {
                console.log("cards already matched");
            }
            else {
                $('#phasma3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'phasma3';
                    test = '#phasma3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'phasma3') && (card2 === 'none')) {
                    card2 = 'phasma3';
                    if (card1 === 'phasma4') {
                        console.log('match!');
                        phasmamatch = true;
                        match.play();
                        matchedcardsarrHard.push('captainphasma');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#phasma3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.phasma4').click(function () {
            console.log("phasma4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (phasmamatch === true || card1 === 'phasma4') {
                console.log("cards already matched");
            }
            else {
                $('#phasma4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'phasma4';
                    test = '#phasma4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'phasma4') && (card2 === 'none')) {
                    card2 = 'phasma4';
                    if (card1 === 'phasma3') {
                        console.log('match!');
                        phasmamatch = true;
                        match.play();
                        matchedcardsarrHard.push('captainphasma');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#phasma4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.grievous3').click(function () {
            console.log("grievous3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (grievousmatch === true || card1 === 'grievous3') {
                console.log("cards already matched");
            }
            else {
                $('#grievous3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'grievous3';
                    test = '#grievous3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'grievous3') && (card2 === 'none')) {
                    card2 = 'grievous3';
                    if (card1 === 'grievous4') {
                        console.log('match!');
                        grievousmatch = true;
                        match.play();
                        matchedcardsarr.push('generalgrievous');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#grievous3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.grievous4').click(function () {
            console.log("grievous4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (grievousmatch === true || card1 === 'grievous4') {
                console.log("cards already matched");
            }
            else {
                $('#grievous4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'grievous4';
                    test = '#grievous4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'grievous4') && (card2 === 'none')) {
                    card2 = 'grievous4';
                    if (card1 === 'grievous3') {
                        console.log('match!');
                        grievousmatch = true;
                        match.play();
                        matchedcardsarrHard.push('generalgrievous');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#grievous4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.kylo3').click(function () {
            console.log("kylo3 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (kylomatch === true || card1 === 'kylo3') {
                console.log("cards already matched");
            }
            else {
                $('#kylo3cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'kylo3';
                    test = '#kylo3cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'kylo3') && (card2 === 'none')) {
                    card2 = 'kylo3';
                    if (card1 === 'kylo4') {
                        console.log('match!');
                        kylomatch = true;
                        match.play();
                        matchedcardsarrHard.push('kyloren');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#kylo3cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.kylo4').click(function () {
            console.log("kylo4 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (kylomatch === true || card1 === 'kylo4') {
                console.log("cards already matched");
            }
            else {
                $('#kylo4cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'kylo4';
                    test = '#kylo4cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'kylo4') && (card2 === 'none')) {
                    card2 = 'kylo4';
                    if (card1 === 'kylo3') {
                        console.log('match!');
                        kylomatch = true;
                        match.play();
                        matchedcardsarrHard.push('kyloren');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#kylo4cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.inquisitor').click(function () {
            console.log("inquisitor clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (inquisitormatch === true || card1 === 'inquisitor') {
                console.log("cards already matched");
            }
            else {
                $('#inquisitorcardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'inquisitor';
                    test = '#inquisitorcardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'inquisitor') && (card2 === 'none')) {
                    card2 = 'inquisitor';
                    if (card1 === 'inquisitor2') {
                        console.log('match!');
                        inquisitormatch = true;
                        match.play();
                        matchedcardsarrHard.push('inquisitor');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#inquisitorcardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.inquisitor2').click(function () {
            console.log("inquisitor2 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (inquisitormatch === true || card1 === 'inquisitor2') {
                console.log("cards already matched");
            }
            else {
                $('#inquisitor2cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'inquisitor2';
                    test = '#inquisitor2cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'inquisitor2') && (card2 === 'none')) {
                    card2 = 'inquisitor2';
                    if (card1 === 'inquisitor') {
                        console.log('match!');
                        inquisitormatch = true;
                        match.play();
                        matchedcardsarrHard.push('inquisitor');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#inquisitor2cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.tie').click(function () {
            console.log("tie clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (tiematch === true || card1 === 'tie') {
                console.log("cards already matched");
            }
            else {
                $('#tiecardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'tie';
                    test = '#tiecardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'tie') && (card2 === 'none')) {
                    card2 = 'tie';
                    if (card1 === 'tie2') {
                        console.log('match!');
                        inquisitormatch = true;
                        match.play();
                        matchedcardsarrHard.push('tiefighterpilot');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#tiecardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.tie2').click(function () {
            console.log("tie2 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (tiematch === true || card1 === 'tie2') {
                console.log("cards already matched");
            }
            else {
                $('#tie2cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'tie2';
                    test = '#tie2cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'tie2') && (card2 === 'none')) {
                    card2 = 'tie2';
                    if (card1 === 'tie') {
                        console.log('match!');
                        tiematch = true;
                        match.play();
                        matchedcardsarrHard.push('tiefighterpilot');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#tie2cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.snoke').click(function () {
            console.log("snoke clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (snokematch === true || card1 === 'snoke') {
                console.log("cards already matched");
            }
            else {
                $('#snokecardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'snoke';
                    test = '#snokecardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'snoke') && (card2 === 'none')) {
                    card2 = 'snoke';
                    if (card1 === 'snoke2') {
                        console.log('match!');
                        inquisitormatch = true;
                        match.play();
                        matchedcardsarrHard.push('snokefighterpilot');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#snokecardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
        $('.snoke2').click(function () {
            console.log("snoke2 clicked");
            if (card1 !== 'none' && card2 !== 'none') {
            }
            else if (snokematch === true || card1 === 'snoke2') {
                console.log("cards already matched");
            }
            else {
                $('#snoke2cardinside').toggleClass('show');
                cardFlipSound.play();
                if (card1 === 'none') {
                    card1 = 'snoke2';
                    test = '#snoke2cardinside';
                    console.log('test card: ' + test);
                }
                if ((card1 !== 'snoke2') && (card2 === 'none')) {
                    card2 = 'snoke2';
                    if (card1 === 'snoke') {
                        console.log('match!');
                        snokematch = true;
                        match.play();
                        matchedcardsarrHard.push('snokefighterpilot');
                        card1 = 'none';
                        card2 = 'none';
                    }
                    else {
                        setTimeout(function () {
                            console.log('nomatch');
                            $(test).toggleClass('show');
                            livesHard--;
                            checkLivesHard();
                            $('#snoke2cardinside').toggleClass('show');
                            cardFlipSound.play();
                            wrongSound.play();
                            test = 'none';
                            card1 = 'none';
                            card2 = 'none';
                        }, 1000);
                    }
                }
            }
            winHard();
            consoleCard();
        });
    });

