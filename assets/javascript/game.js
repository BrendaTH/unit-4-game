   // Crystal collector game by Brenda Thompson April 14, 2019
    
    // VARIABLES
    // ==========================================================================
    // OBJECTS
    var myGame ={
        totalScore: 0,
        scoreToBeat: 0,
        wins: 0,
        losses: 0,
        initGame: function() {
            this.refreshUserLoses(false);
            this.refreshUserWins(false);
            this.newGameSetUp();
        },
        newGameSetUp: function() {
            this.totalScore = 0;
            $(".total-score").text(this.totalScore);
            this.genCrystalNumbers();
            this.genScoreToBeat();
            
        },

        // generate random number between 19-120 for scoreToBeat
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

        // refreshUserLoses: 
        // called to:
        //    update the users losses game variable
        //    to display an alert if the user lost
        //    to update the display with the number of loses
        // a boolean is passed in - didUserLose
        //     it indicates if user has actually lost a game (true)
        //     or if we are only updating the display (false) on game init
        refreshUserLoses: function(didUserLose) {
            if (didUserLose) {
                this.losses++;
                alert("you lost!");
            }
            $(".number-of-losses").text("Losses: " + this.losses);
        },

        // refreshUserWins:
        // called to:
        //     update users wins game variable
        //     to display an alert if the user won
        //     to update the display with the number of wins
        // a boolean is passed in - didUserWin
        //     it indicates if user has actually won a game (true)
        //     or if we are only updating the display (false) on game init
        refreshUserWins: function(didUserWin) {
            if (didUserWin) {
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
        // if score is greater than score-to-reach user losses
        // if score is equal to score-to-reach user wins
        // if score is less than score-to-reach keep going
        $(".crystal-image").on("click", function() {
            myGame.totalScore += parseInt($(this).attr("value"));
            $(".total-score").text(myGame.totalScore);
            if (myGame.totalScore === myGame.scoreToBeat) {
                // a win
                myGame.refreshUserWins(true);
                myGame.newGameSetUp();
            } else if (myGame.totalScore > myGame.scoreToBeat) {
                // a loss
                myGame.refreshUserLoses(true);
                myGame.newGameSetUp();
            } else {
                myGame.userContinues();
            }
        });
    });