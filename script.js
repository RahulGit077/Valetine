const questions=[
    {
        id:1,
        qn:"Do you think I'm someone worth keeping around?",
        op1: "Yes",
        op2: "No",
    },
    {
        id:2,
        qn:"Have you ever thought about a future with me in it?",
        op1: "Yes",
        op2: "No",
    },
    {
        id:3,
        qn: "Do you ever catch yourself smiling when you think of me?",
        op1: "Yes",
        op2: "No",
    },
    {
        id:4,
        qn:"Would you like to spend the rest of your life with me?",
        op1: "Yes",
        op2: "No",
    },
    // {
    //     id:5,
    //     qn:"So, what do you say... will you marry me?",
    //     op1: "Yes",
    //     op2: "No",
    // },
]
let swapped=false;
let canHover=true;
let cur=0;
const box1 = document.getElementById('noswap');
const box2 = document.getElementById('swap');
const qn = document.querySelector('#question');
const op1 = document.getElementById('opt1');
const op2 = document.getElementById('opt12');
window.onload = ()=>{
    if(!qn){
        console.log("error")
        return
    }
    qn.textContent=questions[cur].qn;
    cur++;
}

function move(){
    if(canHover){
        canHover = false;

        let width1= box1.offsetWidth;
        let width2= box2.offsetWidth;

        if(!swapped){
            box1.style.transform = `translateX(${width2}px)`; // Move box1 to the position of box2
            box2.style.transform = `translateX(-${width1}px)`; // Move box2 to the position of box1
        } else {
            box1.style.transform = "translateX(0)"; // Reset box1
            box2.style.transform = "translateX(0)"; // Reset box2
        }
        swapped=!swapped;
        setTimeout(() =>{
            canHover=true;
        },100);
    }
}
const final=document.getElementById('final-qn');
const ini=document.getElementById('init-qn');
const body=document.querySelector('body');
const main=document.querySelector('.main-box');

function nextQuestion(){
    qn.style.transition = "opacity 0.3s ease-out";
    qn.style.opacity = "0";
    if(cur>=questions.length) {
        body.style.transition="all 0.5s ease-in";
        ini.style.display="none";
        final.style.display="flex";
        document.querySelector('.fq').style.transition="opacity 0.5s ease-in";
        document.querySelector('.fq').style.opacity="1";
        main.style.backgroundColor="rgb(255, 255, 255)";
        main.style.color="rgb(0, 0, 0)";
        body.style.backgroundColor="rgb(38, 37, 37)";
        return;
    }

    setTimeout(() => {
        // Change text after fade-out
        qn.textContent = questions[cur].qn;
        cur++;

        // Fade in effect
        qn.style.transition = "opacity 0.3s ease-in";
        qn.style.opacity = "1";
    }, 100);
}

function end(){
    main.style.display="none";
    body.style.transition="all 0.5s ease-in";
    body.style.backgroundColor="rgb(0, 0, 0)";
    body.style.color="rgb(255, 255, 255)";
    document.getElementById('no').style.display="flex";
}

function yes(){
    main.style.display="none";
    body.style.transition="all 0.5s ease-in";
    body.style.backgroundColor="rgb(220, 153, 213)";
    body.style.color="rgb(197, 21, 21)";
    document.getElementById('yes').style.display="flex";
}