console.log("Working");

let currscore = document.querySelector('.current-score');
let highscore = document.querySelector('.high-score');
let life  = document.querySelector('.life');
let holes= document.querySelectorAll('.mole-card');
let img = document.querySelectorAll('.mole-img');
let newgame = document.querySelector('.new-game');
let endgame1 = document.querySelector('.endgame-screen');
let hsd = document.querySelector('.high-score-div');
let hsdheading = document.querySelector('.high-score-heading');
let flag = 0;



let score = 0;
let liferem = 10;
let hscore = localStorage.getItem("highscore");;
highscore.textContent = `High Score- ${hscore}`;


let preva=-1;
let prevb=-1;

generate = () =>{

    let vari = setInterval(changetomole,1000);

}

function changetomole(){


    let a = parseInt(Math.random()*(9-0));
    let b = parseInt(Math.random()*(9-0));

    if(preva != -1){
        img[preva].src = "./assets/dirt.png";
        img[prevb].src = "./assets/dirt.png";
        img[preva].classList.remove("change");
        img[prevb].classList.remove("change");
    }

    preva = a;
    prevb = b;

    img[a].src = "./assets/mole-im.png";
    img[a].classList.add("change");
    img[b].src = "./assets/mole-im.png";
    img[b].classList.add("change");
}



function calculate(index){

    holes[index].classList.add("scale");
    setTimeout(function(){
        holes[index].classList.remove("scale")
    },300)

    if(score>hscore && flag === 0){
        hsd.classList.add("visible");
        hsdheading.textContent = `High Score: ${score}`;
        setTimeout(function(){
            hsd.classList.remove("visible");
        },1500)
        flag=1;
    }

    if(img[index].classList.contains("change")){
        score++;
        currscore.textContent = `Current Score - ${score}`;
        img[index].src = "./assets/dirt.png";
        img[index].classList.remove("change");
    }
    else{
        liferem--;
        if(liferem===0){
            endgame();
        }
        else{
            life.textContent = `Remaning-life-: ${liferem}`;
        }
    }

}

function endgame(){

    endgame1.classList.add("visible");

    setTimeout(function(){
        endgame1.classList.remove("visible");
    },1500)

    flag = 0;

    hscore = Math.max(hscore,score);
    highscore.textContent = `High Score- ${hscore}`;

    score = 0;
    currscore.textContent = `Current Score - ${score}`;

    liferem = 10;
    life.textContent = `Remaning-life-: ${liferem}`;

    localStorage.setItem("highscore", hscore);

    return;
}


for(let i = 0;i<holes.length;i++){
    holes[i].addEventListener('click',function(){
        calculate(i);
    })
}

newgame.addEventListener('click',function(){
    endgame();
})

generate();