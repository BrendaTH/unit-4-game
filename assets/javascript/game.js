   // Crystal collector game by Brenda Thompson April 14, 2019
    
    // VARIABLES
    // ==========================================================================
    // OBJECTS
    var myGame ={
        totalScore: 0,
        scoreToBeat: 0, // do we need to keep this? just check the dom?
        wins: 0,
        losses: 0,
        initGame: function() {
            this.userLoses(false);
            this.userWins(false);
            this.newGameSetUp();
        },
        newGameSetUp: function() {
            this.totalScore = 0;
            $(".total-score").text(this.totalScore);
            this.genCrystalNumbers();
            this.genScoreToBeat();
            
        },

        // generate random number between 1-99 for scoreToBeat
        // display scoreToBeat for user to see
        genScoreToBeat: function() {
            this.scoreToBeat = getRndInteger(19, 121);
            $(".score-to-beat").text(this.scoreToBeat);
        },
        // generate 4 random numbers between 1 - 12, 1 for each crystal
        // write the value attribute with the random number for each crystal
        genCrystalNumbers: function() {
            $(".crystal-image").each(function(){
                $(this).attr("value",getRndInteger(1, 13));
                console.log("the crystal numbers are: " + $(this).attr("value"));
            });
        },

        userLoses: function(doIncrement) {
            if (doIncrement) {
                this.losses++;
                alert("you lost!");
            }
            $(".number-of-losses").text("Loses: " + this.losses);
        },
        userWins: function(doIncrement) {
            if (doIncrement) {
                this.wins++;
                alert("you won!");
            }
            $(".number-of-wins").text("Wins: " + this.wins);
        },
        userContinues:function() {
            // nothing to do yet
            
        },
        
    };
    // FUNCTIONS
    // generate a randon number of the integer flavor
     function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    // run this code when we load the page
    $(document).ready(function() {
        myGame.initGame();
        // when the user clicks on the crystal add the value to the users score
        // if score is greater that score-to-reach user losses
        // if score is equal to score-to-reach user wins
        // if score is less than score-to-reach keep goingf
        $(".crystal-image").on("click", function() {
            myGame.totalScore += parseInt($(this).attr("value"));
            $(".total-score").text(myGame.totalScore);
            if (myGame.totalScore === myGame.scoreToBeat) {
                // a win
                myGame.userWins(true);
                myGame.newGameSetUp();
            } else if (myGame.totalScore > myGame.scoreToBeat) {
                // a loss
                myGame.userLoses(true);
                myGame.newGameSetUp();
            } else {
                myGame.userContinues();
            }

        });

    });