var audioGreen= new Audio("./sounds/green.mp3");
var audioRed= new Audio("./sounds/red.mp3");
var audioYellow= new Audio("./sounds/yellow.mp3");
var audioBlue= new Audio("./sounds/blue.mp3");
var audioWrong= new Audio("./sounds/wrong.mp3");
document.getElementsByClassName("1")[0].addEventListener("click",arrejiPush);
document.getElementsByClassName("2")[0].addEventListener("click",arrejiPush);
document.getElementsByClassName("3")[0].addEventListener("click",arrejiPush);
document.getElementsByClassName("4")[0].addEventListener("click",arrejiPush);
startingPosition();
var arrejiJone;
var arrejiReferent; 
var levelCounter;


//______________________________________________________________________________________________________________________________

function startingPosition(){
    //TEXT MANIPULATION............................s
        if(levelCounter===0){
            document.getElementsByTagName("h1")[0].textContent=("Press A Key to Continue");
        }
    //TEXT MANIPULATION............................e
    arrejiJone=[];
    arrejiReferent=[];
    levelCounter=0;
    document.addEventListener("keydown",funksioniOne);
}

//______________________________________________________________________________________________________________________________

function funksioniOne(){
    document.removeEventListener("keydown",funksioniOne);
    pushReferent();
}

//______________________________________________________________________________________________________________________________

function pushReferent(){
    //helpFunc Funksioni qe egzekutohet ne 2 setTimeouta te ndryshem
        function helpFunc(){
            var ranNum=Math.floor((Math.random()*4)+1);
            arrejiReferent.push(ranNum);
            //TEXT MANIPULATION................................................s
                levelCounter=arrejiReferent.length;
                document.getElementsByTagName("h1")[0].textContent=("Level "+levelCounter);
            //TEXT MANIPULATION................................................e
            //ANIMACIONI.......................................................s
                var boxi=document.getElementsByClassName(""+ranNum+"")[0];
                boxi.classList.add("animeClick");
                setTimeout(function(){
                    boxi.classList.remove("animeClick");
                },100)
            //ANIMACIONI.......................................................e
            //SOUND............................................................s
                if(ranNum===1){
                    audioGreen.play();
                }else if(ranNum===2){
                    audioRed.play();
                }
                else if(ranNum===3){
                    audioYellow.play();
                }
                else if(ranNum===4){
                    audioBlue.play();
                }
            //SOUND............................................................e
        }
    //SETTIMEOUT-TI............................................................s
        if(arrejiReferent.length===0){
            setTimeout(helpFunc,500)
        }else{
            setTimeout(helpFunc,1000)
        }
    //SETTIMEOUT-TI............................................................e
}

//______________________________________________________________________________________________________________________________

function arrejiPush(event){
    var clickNumber=Number(event.target.classList[0]);
    arrejiJone.push(clickNumber);
    //SOUND........................................................................................................s
        if(clickNumber===1){
            audioGreen.play();
        }else if(clickNumber===2){
            audioRed.play();
        }
        else if(clickNumber===3){
            audioYellow.play();
        }
        else if(clickNumber===4){
            audioBlue.play();
        }
    //SOOUND.......................................................................................................e
    //ANIMACIONI...................................................................................................s
        var boxi=event.target;
        boxi.classList.add("animeClick");
        setTimeout(function(){
            boxi.classList.remove("animeClick");
        },100)
    //ANIMACIONI...................................................................................................e

        if(arrejiReferent.length===0){
            //HTML RED BACKGROUND..................................................................................s
                var htmlja1=document.getElementsByTagName("html")[0];
                htmlja1.classList.add("loseRed");
                setTimeout(function(){
                    htmlja1.classList.remove("loseRed");
                },100)
            //HTML RED BACKGROUND..................................................................................e
            //SOUND................................................................................................s
                audioWrong.play();
            //SOUND................................................................................................e
            return startingPosition();
        }else if(arrejiJone.length<arrejiReferent.length){
            for(var i=0;i<arrejiJone.length;i++){
                if(arrejiJone[i]!=arrejiReferent[i]){
                    //HTML RED BACKGROUND..........................................................................s
                        var htmlja2=document.getElementsByTagName("html")[0];
                        htmlja2.classList.add("loseRed");
                        setTimeout(function(){
                            htmlja2.classList.remove("loseRed");
                        },100)
                    //HTML RED BACKGROUND..........................................................................e
                    //TEXT MANIPULATION............................................................................s
                        document.getElementsByTagName("h1")[0].textContent=("Game Over Press A Key to Restart");
                    //TEXT MANIPULATION............................................................................e
                    //SOUND........................................................................................s
                        audioWrong.play();
                    //SOUND........................................................................................e
                    return startingPosition();
                }
            }
        }else if(arrejiJone.length===arrejiReferent.length){
            if(arrejiJone[arrejiJone.length-1]!=arrejiReferent[arrejiReferent.length-1]){
                //HTML RED BACKGROUND..............................................................................s
                    var htmlja3=document.getElementsByTagName("html")[0];
                    htmlja3.classList.add("loseRed");
                    setTimeout(function(){
                        htmlja3.classList.remove("loseRed");
                    },100)
                //HTML RED BACKGROUND..............................................................................e
                //TEXT MANIPULATION................................................................................s
                    document.getElementsByTagName("h1")[0].textContent=("Game Over Press A Key to Restart");
                //TEXT MANIPULATION................................................................................e
                //SOUND............................................................................................s
                    audioWrong.play();
                //SOUND............................................................................................e
                return startingPosition();
            }
            pushReferent();
            arrejiJone=[];
        }
}

//______________________________________________________________________________________________________________________________