$(document).ready( function(){

    //handling levels for Home.html
    var userInSession = sessionStorage.getItem("currentUser")
    var loggedInUserDetails = JSON.parse(localStorage.getItem(userInSession));

    //managing hints
    if(loggedInUserDetails){
        var hint = 3;
        // if(loggedInUserDetails.level == "easy"){
        //     hint = 3;
        // }else if(loggedInUserDetails.level == "medium"){
        //     hint = 3;
        // }else if(loggedInUserDetails.level == "hard"){
        //     hint = 3;
        // }
    }

    //function for highestScoreer and HighestScoreofAll
    var highestScorer = userInSession
    var highestOfAll = 0;
    function highestScoreInDb(){
        keys = Object.keys(localStorage),
        i = keys.length;
    
        while ( i-- ) {
            if(highestOfAll < JSON.parse(localStorage.getItem(keys[i])).score){
                highestOfAll = JSON.parse(localStorage.getItem(keys[i])).score;
                highestScorer = keys[i];
            }
        }
    }
    highestScoreInDb()

    if(loggedInUserDetails){
        if(loggedInUserDetails.level === "easy"){
            $("#second").find(".card-body").addClass("cardBlocked")
            $("#second").addClass("non-clickable")
            $("#second").find(".card-body").html(`<div class="card-info" >
                <div class="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/lock.webp" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:red;font-weight:700;margin-bottm:0px">Locked</p>
                </div>
                <h1 class="card-title jaro-title blueCardText">Medium</h1>
                <div class="line"></div>
                <p class="miniDesc blueCardText">20 Matching Cards</p>
                </div>
                <p class="card-text jaro-title blackShadow">You will have 40 cards (20 matching cards) in total. For each matching pair of cards you will get 10 points.</p>`)
                // $("#second").find(".card-info").css("opacity","0")
                
            $("#third").find(".card-body").addClass("cardBlocked")
            $("#third").addClass("non-clickable")
            $("#third").find(".card-body").html(`<div class="card-info" title="Complete easy level first">
                <div class="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/lock.webp" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:red;font-weight:700;margin-bottm:0px">Locked</p>
                </div>
                    <h1 class="card-title jaro-title redCardText">Hard</h1>
                    <div class="line"></div>
                    <p class="miniDesc redCardText">30 Matching Cards</p>
                </div>
                <p class="card-text jaro-title blackShadow">You will have 60 cards (30 matching cards) in total. For each matching pair of cards you will get 10 points.</p>`)
                // $("#third").find(".card-info").css("opacity","0")
                
            }else if(loggedInUserDetails.level === "medium"){
                
                $("#first").find(".card-body").addClass("cardBlocked")
                $("#first").find(".card-body").html(`<div class="card-info">
                    <div id="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/doneImage.png" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:#26db27;font-weight:700;margin-bottm:0px">Completed</p>
                    </div>
                    <h1 class="card-title jaro-title greenCardText">Easy</h1>
                    <div class="line"></div>
                    <p class="miniDesc greenCardText">10 Matching Cards</p>
                </div>
                <p class="card-text jaro-title blackShadow">You will have 20 cards (10 matching cards) in total. For each matching pair of cards you will get 10 points. </p>`)
                    $("#first").addClass("non-clickable")
                    
                    // $("#first").find(".card-info").css("opacity","0")
                    
                $("#third").find(".card-body").addClass("cardBlocked")
                $("#third").addClass("non-clickable")
                $("#third").find(".card-body").html(`<div class="card-info">
                <div class="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/lock.webp" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:red;font-weight:700;margin-bottm:0px">Locked</p>
                </div>
                <h1 class="card-title jaro-title redCardText">Hard</h1>
                <div class="line"></div>
                <p class="miniDesc redCardText">30 Matching Cards</p>
                </div>
                <p class="card-text jaro-title blackShadow">You will have 60 cards (30 matching cards) in total. For each matching pair of cards you will get -- points.</p>`)
                    // $("#third").find(".card-info").css("opacity","0")
                        
            }else if(loggedInUserDetails.level === "won" ){
                $("#first").find(".card-body").addClass("cardBlocked")
                $("#first").addClass("non-clickable")
                $("#first").find(".card-body").html(`<div class="card-info">
                        <div id="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/doneImage.png" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:#26db27;font-weight:700;margin-bottom:0px">Completed</p>
                    </div>
                        <h1 class="card-title jaro-title greenCardText">Easy</h1>
                    <div class="line"></div>
                    <p class="miniDesc greenCardText">10 Matching Cards</p>
                </div>
                <p class="card-text jaro-title blackShadow">You will have 20 cards (10 matching cards) in total. For each matching pair of cards you will get -- points. </p>`)
                    // $("#first").find(".card-info").css("opacity","0")
                    
                $("#second").find(".card-body").addClass("cardBlocked")
                $("#second").addClass("non-clickable")
                $("#second").find(".card-body").html(`<div class="card-info">
                        <div id="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/doneImage.png" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:#26db27;font-weight:700;margin-bottm:0px">Completed</p>
                    </div>
                        <h1 class="card-title jaro-title blueCardText">Medium</h1>
                        <div class="line"></div>
                        <p class="miniDesc blueCardText">20 Matching Cards</p>
                    </div>
                    <p class="card-text jaro-title blackShadow">You will have 40 cards (20 matching cards) in total. For each matching pair of cards you will get -- points.</p>`)
                // $("#second").find(".card-info").css("opacity","0")

                $("#third").find(".card-body").addClass("cardBlocked")
                    $("#third").addClass("non-clickable")
                    $("#third").find(".card-body").html(`<div class="card-info">
                    <div class="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                        <img src="./images/doneImage.png" alt="Complete" style="width:80px;heigth:80px">
                        <p style="font-size:20px;color:#26db27;font-weight:700;margin-bottm:0px">Completed</p>
                    </div>
                    <h1 class="card-title jaro-title redCardText">Hard</h1>
                    <div class="line"></div>
                    <p class="miniDesc redCardText">30 Matching Cards</p>
                    </div>
                    <p class="card-text jaro-title blackShadow">You will have 60 cards (30 matching cards) in total. For each matching pair of cards you will get -- points.</p>`)
                
                let resetBtn = `<Button id="resetBtn" onclick="handleResetBtn()">Reset</Button>`;
                $(".content").append(resetBtn);
            }else{
                $("#first").find(".card-body").addClass("cardBlocked")
                $("#first").addClass("non-clickable")
                $("#first").find(".card-body").html(`<div class="card-info">
                        <div id="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/doneImage.png" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:#26db27;font-weight:700;margin-bottom:0px">Completed</p>
                    </div>
                        <h1 class="card-title jaro-title greenCardText">Easy</h1>
                    <div class="line"></div>
                    <p class="miniDesc greenCardText">10 Matching Cards</p>
                </div>
                <p class="card-text jaro-title blackShadow">You will have 20 cards (10 matching cards) in total. For each matching pair of cards you will get -- points. </p>`)
                    // $("#first").find(".card-info").css("opacity","0")
                    
                $("#second").find(".card-body").addClass("cardBlocked")
                $("#second").addClass("non-clickable")
                $("#second").find(".card-body").html(`<div class="card-info">
                        <div id="status" style="position: absolute;top: 6%;right: 0%;display: flex;justify-content: flex-start;align-items: center;width: 40%;background-color: rgb(38, 38, 38);border-top-left-radius:20px;border-bottom-left-radius:20px;height: 20%;">
                    <img src="./images/doneImage.png" alt="Complete" style="width:80px;heigth:80px">
                    <p style="font-size:20px;color:#26db27;font-weight:700;margin-bottm:0px">Completed</p>
                    </div>
                        <h1 class="card-title jaro-title blueCardText">Medium</h1>
                        <div class="line"></div>
                        <p class="miniDesc blueCardText">20 Matching Cards</p>
                    </div>
                    <p class="card-text jaro-title blackShadow">You will have 40 cards (20 matching cards) in total. For each matching pair of cards you will get -- points.</p>`)
                // $("#second").find(".card-info").css("opacity","0")

            }
    }







    function shuffle(array) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }
      
    // Used like so
    var easyCardsArray = [
        './images/mango.webp','./images/mango.webp',
        './images/apple.avif','./images/apple.avif',
        './images/banana.webp','./images/banana.webp',
        './images/waterMelon.jpg','./images/waterMelon.jpg',
        './images/guava.avif','./images/guava.avif',
        './images/orange.jpg','./images/orange.jpg',
        './images/pineapple.jpg','./images/pineapple.jpg',
        './images/pears.jpg','./images/pears.jpg',
        './images/kiwi.jpg','./images/kiwi.jpg',
        './images/pomegranate.webp','./images/pomegranate.webp'
    ];

    var mediumCardsArray = [
        './images/cars/beetle.jfif', './images/cars/beetle.jfif',
        './images/cars/aventador.avif', './images/cars/aventador.avif',
        './images/cars/camaro.jpg' , './images/cars/camaro.jpg',
        './images/cars/challenger.webp' , './images/cars/challenger.webp',
        './images/cars/chiron.jpg' , './images/cars/chiron.jpg',
        './images/cars/cooper.jfif' , './images/cars/cooper.jfif',
        './images/cars/cv2.jpg' , './images/cars/cv2.jpg',
        './images/cars/db5.webp' , './images/cars/db5.webp',
        './images/cars/dmc-12.jfif' , './images/cars/dmc-12.jfif',
        './images/cars/fiat500.webp' , './images/cars/fiat500.webp',
        './images/cars/gt3rs.jpg' , './images/cars/gt3rs.jpg',
        './images/cars/hummer.jpg' , './images/cars/hummer.jpg',
        './images/cars/i8.jpg' , './images/cars/i8.jpg',
        './images/cars/mcLaren.jpg' , './images/cars/mcLaren.jpg',
        './images/cars/modelX.webp' , './images/cars/modelX.webp',
        './images/cars/mustang.jpeg' , './images/cars/mustang.jpeg',
        './images/cars/phantom.webp' , './images/cars/phantom.webp',
        './images/cars/testarosa.webp' , './images/cars/testarosa.webp',
        './images/cars/wagonR.jpg' , './images/cars/wagonR.jpg',
        './images/cars/wrangler.webp' , './images/cars/wrangler.webp'
    ]

    var hardCardsArray = [
        './images/marvel/antMan.jpg', './images/marvel/antMan.jpg',
        './images/marvel/aquaMan.avif', './images/marvel/aquaMan.avif',
        './images/marvel/batman.webp' , './images/marvel/batman.webp',
        './images/marvel/blackPanther.webp' , './images/marvel/blackPanther.webp',
        './images/marvel/blackWidow.avif' , './images/marvel/blackWidow.avif',
        './images/marvel/bucky.jfif' , './images/marvel/bucky.jfif',
        './images/marvel/captainAmerica.webp' , './images/marvel/captainAmerica.webp',
        './images/marvel/captainMarvel.webp' , './images/marvel/captainMarvel.webp',
        './images/marvel/dareDevil.jpg' , './images/marvel/dareDevil.jpg',
        './images/marvel/deadpool.jfif' , './images/marvel/deadpool.jfif',
        './images/marvel/drStrange.jfif' , './images/marvel/drStrange.jfif',
        './images/marvel/falcon.jpg' , './images/marvel/falcon.jpg',
        './images/marvel/flash.jpg' , './images/marvel/flash.jpg',
        './images/marvel/grrot.jpg' , './images/marvel/grrot.jpg',
        './images/marvel/hawkEye.webp' , './images/marvel/hawkEye.webp',
        './images/marvel/hulk.jpg' , './images/marvel/hulk.jpg',
        './images/marvel/ironMan.webp' , './images/marvel/ironMan.webp',
        './images/marvel/loki.jpeg' , './images/marvel/loki.jpeg',
        './images/marvel/Nebula.png' , './images/marvel/Nebula.png',
        './images/marvel/rocket.jpeg' , './images/marvel/Nebula.png',

        './images/marvel/scarletWitch.jfif', './images/marvel/scarletWitch.jfif',
        './images/marvel/shazam.jfif', './images/marvel/shazam.jfif',
        './images/marvel/spiderMan.jpg' , './images/marvel/spiderMan.jpg',
        './images/marvel/starlord.jpg' , './images/marvel/starlord.jpg',
        './images/marvel/superMan.jpg' , './images/marvel/superMan.jpg',
        './images/marvel/thanos.webp' , './images/marvel/thanos.webp',
        './images/marvel/thor.jpg' , './images/marvel/thor.jpg',
        './images/marvel/vision.jfif' , './images/marvel/vision.jfif',
        './images/marvel/wolverine.webp' , './images/marvel/wolverine.webp',
        './images/marvel/wonderMan.webp' , './images/marvel/wonderMan.webp'

    ]


    function insertCards(array){
        var cardsHtml = '';
        for(let i=0;i<array.length;i++){
            cardsHtml += `<div class="cards" style="display:none">
            <div class="flip-body">
            <div class="card-front" >
            <img src="./images/questionMark.jpg" class="frontImage" alt="questionMark">
            
            </div>
            <div class="card-back">
            <img src="${array[i]}" alt="pomegranate image" class="cardImage">
            </div>
            </div>
            </div>`
        }
        $("#gameDiv").append(cardsHtml);
    }
    if(loggedInUserDetails){
        if(loggedInUserDetails.level=="easy"){
            $("#mode").text("Game Mode : Easy")
            shuffle(easyCardsArray)
            insertCards(easyCardsArray)
            
        }else if(loggedInUserDetails.level=="medium"){
            
            $("#mode").text("Game Mode : Medium")
            $("#gameDiv").css("grid-template-columns","repeat(8,1fr)")
            $("#gameDiv").css("grid-template-rows","repeat(5,1fr)")
            shuffle(mediumCardsArray)
            insertCards(mediumCardsArray)
        }else{
            $("#mode").text("Game Mode : Hard")
            $("#gameDiv").css("grid-template-columns","repeat(10,1fr)")
            $("#gameDiv").css("grid-template-rows","repeat(6,1fr)")
            shuffle(hardCardsArray)
            insertCards(hardCardsArray)
        }
    }

    $("#second").click(function (){
        window.location.href = "./EasyPage.html"
    })

    $("#third").click(function (){
        window.location.href = "./EasyPage.html"
    })
    
    

    //flipping cards as per level
    var finalisedFlipTime;
    setTimeout(() => {
        function updateCountDown(){
            
            $("#countDown").text(`Game starts in ${finalisedFlipTime} seconds`);
            finalisedFlipTime--;
            if(finalisedFlipTime == -1){
                clearInterval(flipInterval);
                $("#countDown").text(`Lets go!`);
                setTimeout(() => {
                    $("#countDown").remove()
                }, 3000);
            }
        }
        let flipInterval = setInterval(() => {
            updateCountDown();
        }, 1000);
        
    }, 1000);



    // fetch name from local Storage to greet the player
    var loggedInUserName = userInSession;
    if(userInSession){
        var loggedInUserScore = loggedInUserDetails.score;
        $(".helloTxt").html(`Hello ${loggedInUserName? loggedInUserName :  "Player"}`);
        $("#score").html(`Highest Score : ${highestOfAll} by ${highestScorer===userInSession?"You":highestScorer} `);
    }
    if(userInSession){
        $("#currScore").text(`Current Score : ${loggedInUserDetails.score}`)
        var currScore = loggedInUserDetails.level=="easy"? 0:loggedInUserDetails.score;
        $("#actualCurrentScore").text(currScore);
        $("#ownCurrentScore").text(`You are at : ${loggedInUserDetails.score}`)
    }
    
    


    //index page animation
    $("#neecheWalaBox").hide()
    setTimeout(() => {
        $("#neecheWalaBox").show("slow");
        $(".wlcmName").css("fontSize","65px");
        
    }, 3000);



    $(".card").hide();
    setTimeout(() => {
        
        $(".card").slideDown("slow");
        $(".card").show();
    }, 100);
    
    var hr;
    var h = new Date().getHours();
    if(h>12){
        hr = h -12;
    }
    else{
        hr=h;
    }
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    $("#actualWatch").text( `${hr<10? `0${hr}` : hr}:${m<10 ? `0${m}` : m}:${s<10 ? `0${s}`:s}`);
    setInterval(() => {
        var hr;
        h = new Date().getHours();
        if(h>12){
            hr = h -12;
        }
        else{
            hr=h;
        }
       
        m = new Date().getMinutes();
        s = new Date().getSeconds();
        $("#actualWatch").text(`${hr<10? `0${hr}` : hr}:${m<10 ? `0${m}` : m}:${s<10 ? `0${s}`:s}`);
    }, 1000);
    
    

    //card-text hover effect
    $(".card-text").slideUp(1200);

    $(".card").mouseenter( function(){
        this.style.transform = 'scale(1.1)'; // Scale up on mouse over
        let cardText = $(this).find(".card-text"); // Select only the .card-text within this .card
        let cardInfo  = $(this).find(".card-info");
        if (cardText.is(":hidden") && !cardText.is(":animated")) {
            cardText.slideDown(300); // Stop any ongoing animations and slide down
            
            cardInfo.slideUp(300)
        }
    })
    $(".card").mouseleave( function(){
        this.style.transform = 'scale(1)'; // Scale back to normal
        let cardText = $(this).find(".card-text"); // Select only the .card-text within this .card

        let cardInfo  = $(this).find(".card-info");
        if (cardText.is(":visible") && !cardText.is(":animated")) {// Check if hidden
            cardText.slideUp(300); // Stop any ongoing animations and slide down
            cardInfo.slideDown(300)

        }
    })

    
    // let users = JSON.parse(localStorage.getItem("users")) || []; 

    // const userExists = users.some(user => user.name === username);

    // if (userExists) {
    //     const userScores = users.filter(user => user.name === username);
    //     localStorage.setItem("loggedInUser", JSON.stringify(userScores));
    //     window.location.href = "Home.html";
    // } else {
    //     const newUser = { name: username, score: 0 }; 
    //     users.push(newUser);

    //     localStorage.setItem("users", JSON.stringify(users));
    //     localStorage.setItem("loggedInUser", JSON.stringify([newUser]));

    //     window.location.href = "Home.html";
    // }

    $("#startBtn").click(function(){
        
        let username = $('#nameInput').val();
        if(username !== ''){
            let userdetails = JSON.parse(localStorage.getItem(username));
            if(userdetails){
                let userscore = userdetails.score;
                let userlevel = userdetails.level;
                
                localStorage.setItem(username,JSON.stringify({"score":userscore,"level" : userlevel}));
                sessionStorage.setItem("currentUser",username);
            }else{
                localStorage.setItem(username,JSON.stringify({"score":"0","level":"easy"}));
                sessionStorage.setItem("currentUser",username);
            }
            window.location.href = "./Home.html"
        }else{
            let alert = `<div id="alert" style="background-color:rgb(74, 112, 124);width: 40%;height:30%; border: 1px solid #ccc; border-radius: 20px; box-shadow: 0px 0px 10px black; overflow: hidden; position:absolute; top:50%;left:50%; transform:translate(-50%,-50%);">
    
    <div style="padding: 15px; background-color:rgb(74, 112, 124); color: white; font-size: 14px; line-height: 1.5;height:60%;font-size : 20px;display:flex; justify-content:space-evenly;align-items:center">
        You have not entered your name. Kindly do so else your score won't be saved 
    </div>
    <div style="height:40%; padding: 10px; text-align: right; background-color: #1e3360; display:flex; justify-content:space-evenly;align-items:center">
        <button id="yesBtn" onclick="handleSkipBtn()" style="background-color:rgba(1,0,60,0.5);border-radius:20px; color: white; cursor: pointer;width:
        20%;height:70%;border:none;outline:none">Skip</button>
        <button id="noBtn" onclick="handleOkBtn()" style="background-color:rgba(1,0,60,0.5);border-radius:20px; color: white; cursor: pointer;width:
        20%;height:70%;border:none;outline:none">Ok</button>
    </div>
    </div>
    `
            $(".container").append(alert);

        }
    });

    $("#first").click(function(){
        window.location.href="./EasyPage.html";
    })



    var time = 60; // Time in seconds
   if(loggedInUserDetails){
    
        if(loggedInUserDetails.level=="medium"){
            time = 120;
        }else if(loggedInUserDetails.level=="hard"){
            time = 240;
        }
   }
    let interval;
    // Function to update the timer
    function updateTimer() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // Format minutes and seconds to always have two digits
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#actualTimer").text(`${minutes}:${seconds}`);
        
        if (time > 0) {
            time--;
            $("#actualTimer").text(`${minutes}:${seconds}`);
        } else {
            
            clearInterval(interval); // Stop the timer when it reaches 0
            let popUp = $('<div>',{
                class : 'modal-dialog modal-xl',
                html : `<p>Time's Up <br>Your score : </p>`
            });
            
            userHighestScore = JSON.parse(localStorage.getItem(loggedInUserName)).score;
            userHighestLevel = JSON.parse(localStorage.getItem(loggedInUserName)).level;
            if(userHighestScore < currScore){
                localStorage.setItem(loggedInUserName,JSON.stringify({"score" :currScore , "level" : userHighestLevel}));
            }
            $("#gameDiv").prepend(popUp);
            $('.modal-xl').find("p").html(`Time's Up <br>Your score : ${currScore}`);
            $(".loader").toggleClass("paused");
            $(".cards").addClass("non-clickable");
            setTimeout(() => {
                window.location.href = "./Home.html"
            }, 2500);
        }
    }

    $(".loader").toggleClass("paused");
    function startInterval() {
        $(".loader").toggleClass("paused");
        // Update the timer every second
        interval = setInterval(updateTimer, 1000);
    }
    window.startInterval = startInterval.bind(window);
    if(loggedInUserDetails){
        if(loggedInUserDetails.level == "easy"){
            setTimeout(() => {
                startInterval();
            }, 4000);
        }else if(loggedInUserDetails.level == "medium"){
            setTimeout(() => {
                startInterval();
            }, 7000);
        }
        else{
            setTimeout(() => {
                startInterval();
            }, 9000);
    
        }
    }
    

    //pause and resume button
    $("#pause").click(function () {
        if ($(this).hasClass("pause")) {
            clearInterval(interval); // Clear the interval to pause
            $(this).removeClass("pause").addClass("resume").text("Resume");
            // $(".cards").addClass("non-clickable");
            $(".loader").addClass("paused");
            $("#gameDiv").css("cursor","not-allowed")
            $(".cards").css("cursor","not-allowed");
            $("#hintButton").css("cursor","not-allowed");
            
            $("#timerDisplay").css("box-shadow","0px 1px 8px  orange")
            $(".loader").css("border-color","orange")
            
        } else if ($(this).hasClass("resume")) {
            startInterval();
            // $(".cards").removeClass("non-clickable");
            $(".loader").removeClass("paused");
            $("#gameDiv").css("cursor","pointer")
            $(".cards").css("cursor","pointer");
            $("#hintButton").css("cursor","pointer");
            $(this).removeClass("resume").addClass("pause").text("Pause");



            $("#timerDisplay").css("box-shadow","0px 1px 8px  rgb(61, 187, 61)")
            $(".loader").css("border-color","rgb(61, 187, 61)")
        }
    })


    //display player name and highest score
    $(".easyPlayerName").text(`Player Name : ${userInSession}`);
    $("#highestScore").text(`Highest Score : ${highestOfAll}`)



    // fade in and flip cards at start
    $(".cards").ready(function(){
        $(".cards").addClass("non-clickable");
        $(".cards").attr("display","block");
        $(".cards").fadeOut();
        $(".cards").fadeIn(2000);

        let flipTime = 3000;
        if(loggedInUserDetails.level == "medium"){
            flipTime = 5000;
        }else if(loggedInUserDetails.level == "hard"){
            flipTime = 7000;
        }
        finalisedFlipTime = flipTime/1000;
        
        //disable pause button
        $("#pause").addClass("non-clickable");
        setTimeout(() => {
            $(".flip-body").addClass("flipped");
            setTimeout(() => {
                $(".flip-body").removeClass("flipped");
                $(".cards").removeClass("non-clickable");
                $("#pause").removeClass("non-clickable");

            }, flipTime);
        }, 2000);
    })


//hint button

$("#hintButton").click(function(){

    if(hint > 0){
        if ($('#pause').hasClass('pause') && finalisedFlipTime == -1) {
            

            $("#hintLeft").text(`Hints left : ${hint-1}`);
            if(hint==1){
                $("#hintButton").css("cursor","not-allowed")
            }
            $(".cards:not(.non-clickable)").addClass("disabledCard");
            $(".cards.disabledCard").find(".flip-body").addClass("flipped");
            setTimeout(() => {

                $(".cards.disabledCard").find(".flip-body").removeClass("flipped");
                $(".cards").removeClass("disabledCard");
                
                
            }, 2500);
            hint--;
        }
        
    }
    
})

//back button
$("#backButton").click(function(){
    // $("#gameDiv").addClass("non-clickable");
    
    $("#statisticsCard").addClass("non-clickable");
    if($("#pause").hasClass("pause")){
        $(".loader").addClass("paused");
        $("#hintButton").css("cursor","not-allowed");
        clearInterval(interval); // Clear the interval to pause
        $("#timerDisplay").css("box-shadow","0px 1px 8px  orange")
        $(".loader").css("border-color","orange")
    }

    let alert = `<div id="alert" style="background-color:rgb(74, 112, 124);width: 40%;height:40%; border: 1px solid #ccc; border-radius: 20px; box-shadow: 0px 0px 10px black; overflow: hidden; position:absolute; top:50%;left:50%; transform:translate(-50%,-50%);">
    
    <div style="padding: 15px; background-color: rgb(74, 112, 124); color: white; font-size: 14px; line-height: 1.5;height:60%;font-size : 20px;display:flex; justify-content:space-evenly;align-items:center">
        Are you sure you want to quit this game?
    </div>
    <div style="height:40%; padding: 10px; text-align: right; background-color: #1e3360; display:flex; justify-content:space-evenly;align-items:center">
        <button id="yesBtn" onclick="handleYesBtn()" style="background-color: rgba(1,0,60,0.5); color: white; border-radius: 4px; cursor: pointer;width:
        20%;height:70%;border:none;outline:none">Yes</button>
        <button id="noBtn" onclick="handleNoBtn()" style="background-color:rgba(1,0,60,0.5); color: white; border-radius: 4px; cursor: pointer;width:
        20%;height:70%;border:none;outline:none">No</button>
    </div>
    </div>
    `
    const children = Object.values($("#gameDiv").children());
    const hasAlert = children.some(child => $(child).is("#alert"));
    if(!hasAlert){

        $("#gameDiv").append(alert);
    }


        
})






// flip cards on click &7 complete logic of the game
let prevUrl;
let isFirst = true;
$(".cards").click(function () {
    debugger
    if($("#pause").hasClass("pause")){
        $(this).find(".flip-body").addClass("flipped");
        $(this).addClass("non-clickable");

        url = $(this).find(".cardImage").attr("src");
        if(prevUrl !== undefined && isFirst == false){
            if(prevUrl == url){
                
                let imagesWithMatchedUrl = $(".cards").find(`img[src="${url}"]`);
                let cardsWithMatchedUrl = imagesWithMatchedUrl.closest(".cards");
                cardsWithMatchedUrl.addClass("non-clickable");
                cardsWithMatchedUrl.addClass("matched")
                currScore += 10;
                prevUrl='';
                isFirst = true;

                cardsWithMatchedUrl.css("box-shadow","green 5px 5px 6px");
                $("#actualCurrentScore").text('');
                $("#actualCurrentScore").text(currScore);
                $("#actualCurrentScore").css("color","green");
                $("#actualCurrentScore").css("text-shadow","0px 0px 2px green ")
                if($(".cards").length == $(".matched").length ){
                    matchedAllCards();
                }
                // console.log(cardsWithMatchedUrl)
                
                
                // $(this).addClass("non-clickable");
            }else {
                setTimeout(() => {
                    if(loggedInUserDetails.level == "easy"){
                        currScore -= 2;
                    }else if(loggedInUserDetails.level == "medium"){
                        currScore -= 3;
                    }else if(loggedInUserDetails.level=="hard"){
                        currScore -= 4;
                    }
                    $(this).find(".flip-body").removeClass("flipped");
                    $(this).removeClass("non-clickable");
                    $("#actualCurrentScore").text(currScore);
                    $("#actualCurrentScore").css("color","red");
                    $("#actualCurrentScore").css("text-shadow","0px 0px 2px red ")
                    // console.log(this);
                    if(prevUrl!== ''){
                        $(".cards").find(`img[src="${prevUrl}"]`).closest(".flip-body").removeClass("flipped")
                        $(".cards").find(`img[src="${prevUrl}"]`).closest(".cards").removeClass("non-clickable")
                        // console.log($(".cards").find(`img[src="${prevUrl}"]`).closest(".cards"));
                    }
                    isFirst = true;
                }, 400);
            }
        }
        else{
            // prevUrl = $(this).find(".cardImage").attr("src");
            prevUrl =url;
            isFirst = false;
        }
    }
    function handleRestartBtn(){
        localStorage.setItem(userInSession,JSON.stringify({"score":"0","level":"easy"}));
        window.location.href = "./Home.html"
    }
    
});
function matchedAllCards(){
    if($(".cards").length == $(".matched").length && loggedInUserDetails.level=="easy"){
        var userHighestScore = JSON.parse(localStorage.getItem(userInSession)).score;
        if( userHighestScore <= currScore){
            localStorage.setItem(loggedInUserName,JSON.stringify({"score" :currScore , "level" : "medium"}))
        }
        
        setTimeout(() => {
            $('#gameDiv').children(':lt(10)').css("transform","translateY(-1000px)");
            $('#gameDiv').children(':lt(10)').fadeOut(200);
        $('#gameDiv').children(':gt(9)').css("transform","translateY(1000px)");
        $('#gameDiv').children(':gt(9)').fadeOut(200);
        
        
        //$('#gameDiv').css("background-image","url('./images/poppers.gif')");
        }, 1000);
    
    
        setTimeout(() => {
            $('#gameBody').html("")
            $('#gameBody').append(`
                <video autoplay muted loop style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; border-radius:20px;">
                <source src="./images/poppers.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                `);
            $("#statisticsCard").addClass("non-clickable");
            $("#timerDisplay").css("box-shadow","0px 1px 8px  orange")
            $(".loader").css("border-color","orange")
            // $("#gameBody").removeClass("non-clickable");
            var popUp = `<div class="modal-dialog modal-xl" style="position: relative; top: 45%; left: 25%; width: 50%; height: 100%; object-fit: cover; z-index: 2; max-height:200px; display:flex; flex-direction:column; justify-content:space-evenly; pointer-events: auto;">
            <p>Congratulations!</p><p>Medium Level Unlocked</p> <div> <a id="homeBtn" onclick="goHome()" >Home</a>  <a id="nextBtn" href="./EasyPage.html">Next</a> </div>
            </div>`

            $("#gameBody").prepend(popUp);
            $(".loader").addClass("paused");
            clearInterval(interval);
        }, 1200);
    }else if($(".cards").length == $(".matched").length && loggedInUserDetails.level=="medium"){
        var userHighestScore = JSON.parse(localStorage.getItem(userInSession)).score;
        if(userHighestScore <= currScore){
            localStorage.setItem(loggedInUserName,JSON.stringify({"score" :currScore ,"level" : "hard"}))
        }
        
        setTimeout(() => {
            $('#gameDiv').children(':lt(20)').css("transform","translateY(-1000px)");
            $('#gameDiv').children(':lt(20)').fadeOut(200);
        $('#gameDiv').children(':gt(19)').css("transform","translateY(1000px)");
        $('#gameDiv').children(':gt(19)').fadeOut(200);

        //$('#gameDiv').css("background-image","url('./images/poppers.gif')");
        }, 1000);
        
        setTimeout(() => {
            $('#gameBody').html("")
            $('#gameBody').append(`
                <video autoplay muted loop style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; border-radius:20px;">
                <source src="./images/poppers.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                `);
                $("#statisticsCard").addClass("non-clickable");
                $("#timerDisplay").css("box-shadow","0px 1px 8px  orange")
                $(".loader").css("border-color","orange")
            // $("#gameBody").removeClass("non-clickable");
            var popUp = `<div class="modal-dialog modal-xl" style="position: relative; top: 45%; left: 25%; width: 50%; height: 100%; object-fit: cover; z-index: 2; max-height:200px; display:flex; flex-direction:column; justify-content:space-evenly; pointer-events: auto;">
            <p>Congratulations!</p><p>Hard Level Unlocked</p> <div> <a id="homeBtn" onclick="goHome()" >Home</a>  <a id="nextBtn" href="./EasyPage.html">Next</a> </div>
            </div>`

            $("#gameBody").prepend(popUp);
            $(".loader").addClass("paused");
            clearInterval(interval);
        }, 1200);
    }else if($(".cards").length == $(".matched").length && loggedInUserDetails.level=="hard"){
        var userHighestScore = JSON.parse(localStorage.getItem(userInSession)).score;
        if(userHighestScore <= currScore){
            localStorage.setItem(loggedInUserName,JSON.stringify({"score" :currScore ,"level" : "won"}))
        }
        setTimeout(() => {
            $('#gameDiv').children(':lt(30)').css("transform","translateY(-1000px)");
            $('#gameDiv').children(':lt(30)').fadeOut(200);
            $('#gameDiv').children(':gt(29)').css("transform","translateY(1000px)");
            $('#gameDiv').children(':gt(29)').fadeOut(200);

        //$('#gameDiv').css("background-image","url('./images/poppers.gif')");
        }, 1000);
        
        setTimeout(() => {
            $('#gameBody').html("")
            $('#gameBody').append(`
                <video autoplay muted loop style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; border-radius:20px;">
                <source src="./images/poppers.mp4" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                `);
                $("#statisticsCard").addClass("non-clickable");
                $("#timerDisplay").css("box-shadow","0px 1px 8px  orange")
                $(".loader").css("border-color","orange")
            // $("#gameBody").removeClass("non-clickable");
            var popUp = `<div class="modal-dialog modal-xl" style="position: relative; top: 45%; left: 25%; width: 50%; height: 100%; object-fit: cover; z-index: 2; max-height:200px; display:flex; flex-direction:column; justify-content:space-evenly; pointer-events: auto;">
            <p>Congratulations!</p><p>You Completed all the levels</p> <div> <a id="homeBtn" onclick="goHome()" >Home</a>   </div>
            </div>`

            $("#gameBody").prepend(popUp);
            $(".loader").addClass("paused");
            clearInterval(interval);
        }, 1200);
    }
}

})

function goHome(){
    window.location.href = "./Home.html";
}
function handleYesBtn(){
    window.location.href = "./Home.html";

}
function handleNoBtn(){

    // $("#gameDiv").removeClass("non-clickable");
    $("#statisticsCard").removeClass("non-clickable");
    if($("#pause").hasClass("pause")){
        $(".loader").removeClass("paused");
        $("#hintButton").css("cursor","pointer");
        startInterval();
        $("#timerDisplay").css("box-shadow","0px 1px 8px  rgb(61, 187, 61)")
        $(".loader").css("border-color","rgb(61, 187, 61)")
    }
    $("#alert").remove()
}
function handleSkipBtn(){
    localStorage.setItem("Player",JSON.stringify({"score":"0","level":"easy"}));
    sessionStorage.setItem("currentUser","Player");
    window.location.href = "./Home.html";
}
function handleOkBtn(){
    $("#alert").remove();
}
function handleResetBtn(){
    localStorage.setItem(sessionStorage.getItem("currentUser"),JSON.stringify({"score":"0","level":"easy"}));
    window.location.href="./Home.html";
}