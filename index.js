const startEl = document.getElementById("yes")
const closeEl = document.getElementById("no")
const statEl = document.getElementById("stat")
const returnEl = document.getElementById("return123")
/*---------------------------*/
const box1EL = document.getElementById("box-1")
const box2EL = document.getElementById("box-2")
const box3EL = document.getElementById("box-3")
const box4EL = document.getElementById("box-4")
const box5EL = document.getElementById("box-5")
const box6EL = document.getElementById("box-6")
const box7EL = document.getElementById("box-7")
const box8EL = document.getElementById("box-8")
const box9EL = document.getElementById("box-9")
/*-----------------------------*/
const your1 = document.getElementById("your-1")
const your2 = document.getElementById("your-2")
const resultEl = document.getElementById("result")
/*-------------------------*/ 
let isStart =  false;
let isGameOn = false;
let a , ch ,g; 
let user1 = [];
let user2 = [];
const statNO = [1,2]
const xo = ["X","O"]
const user = [user_1 = true, user_2 = false]
const result = ["x" ,"y"]
let u = false;
let number = [1,2,3,4,5,6,7,8,9,0]
const number1 = ["1","2","3","4","5","6","7","8","9"]
let n2 = " ";
let result1 = [(123),(456),(789),(147),(258),(369),(158),(357), (159)]
let z;

let  isGameAlive =  true;
/*
1   2   3
4   5   6  (123)(456)(789)(147)(258)(369)(158)(357)
7   8   9
*//*
for (let  i = 0 ; i < number.length ; i++){
    for(let j = 0 ; j < number.length ; j++){
        for(let z = 0 ; z < number.length ; z++){
            if ( number[i] == number[z] ){}
            else if ( number[j] == number[z] ){}
            else if ( number[i] == number[j]){}
            else {
                let n3 = number1[i] + number1[j] + number1[z] + "";
                //console.log( number[i] , number[j], number[z])
                let n6 = parseInt(n3)
                console.log(n3 , typeof n3 ,  typeof n6 )
            }
        }
    }
}*/
let q=1 ; 
let w =2 ;
let e , i;
let user9 =[9,8,7,6] 
/*
for (let i = 0 ; i < user9.length ; i++){
    for(let j =0 ; j < user9.length ; j++){
        for (let z = 0 ; z < user9.length ; z++){
            if ( user9[i] == user9[z] ){}
            else if ( user9[j] == user9[z] ){}
            else if ( user9[i] == user9[j]){}
            else {console.log(user9[i],user9[j],user9[z])}
        }
    }
}
/**/
//let result1 = [(123),(456),(789),(147),(258),(369),(158),(357)]
let l1 = 0 , p9 = 0,p5= 0  , p6= 0 , p7=0 ;
let l2 = [9,0,8,7]
let op = 0 ;
function list(y , r ){
    l1 = " " ;
    //console.log(l1)
        //console.log(r)
        for ( let i = 0; i< y.length ; i++){
        passList(y[i] , r)
    }
    
}

function passList(i , r1 ){
    //console.log(r1)
    l1 += i + "";
    //console.log(l1 , typeof l1)
    balaji909(l1 , r1) 
}

function balaji909 (i, r2){
    //console.log(r2)
    let o5=0
    u = String(i)
    //console.log(typeof u , u)
    for (let i =0 ; i < u.length ; i++){
        for (let j =0 ; j < u.length ; j++){
            for (let z =0 ; z < u.length ; z++){
                if ( u[i] == u[z] ){}
                else if ( u[j] == u[z] ){}
                else if ( u[i] == u[j]){}
                else {
                    let b5 = u[i] + u[j] + u[z] + ""
                    //console.log( b5 , typeof b5 )
                    resultUser(b5, r2) 
                }
            }
        }
    } 
}

function resultUser(z , r3){
    for (let i = 0 ; i < result1.length ; i++){
        if ( z == result1[i]){
            //console.log( z,"matched" , r3)
            showResult(r3)
            op=1
        }
        else{
            li = 0; 
        }

    }
}
function showResult(d){
    isGameAlive = false;
    if (op == 1 ){}
    else{
    //console.log("dfyjddry" , d)
    let t = "User" + " "+  d + " won , <TRY AGAIN>"
    //console.log(t)
    resultEl.innerHTML = t;
    your2.innerHTML =""
    your1.innerHTML ="";
    }
}
/*------------------------------------*/
/*------------------------*/
/*
----------------------------*/ 
function statChage(a){
    statEl.innerHTML = `<div id="stat-${a}"></div>`
}
let e7 =0;/*
function retry123(){
    for ( let i = 0 ; i < number.length ; i++){
        changerXo( i , "")
    }
}
*/ 
/*
function addChanger(boolean){
    let b = boolean;
    if (b === true){
    }  
    if ( b === false){
        
    }
}*/

/*-----------------------------------------*/ 
function retry123(){
    for ( let i= 0 ; i < 10 ; i++){
        changerXo( i , "")
    }
    op = 0 ;
    ch = 0; 
    resultEl.innerHTML = "RETRY , again.";
    user1 =[]
    user2=[]
    console.log(user1)
    console.log(user2)
    isGameAlive = true;
    your1.innerHTML = `
    <img src="image/yourchoice.png" alt="" id="your">`
    your2.innerHTML ="";
    number = [1,2,3,4,5,6,7,8,9,0]
}
/*--------------------------------*/
function changeNumber(g){
    console.log("number[","g-1","]" ,number[g-1])
    if (isGameOn ===false ){
        alert("START THE GAME ")
    }
    else if(isGameAlive === false){
        alert("The result was arrived .Press retry")
    }
    else{
        let h = g ;
    /*    if (number[g-1] != 0 ){
            changeAdd(h)
        }
       else{
    
        }
        number[g-1] = 0;
        */
        if ( number[g-1] != 0){
            changeAdd(h)
        }
    }
}
function changeAdd(i){
    let o = i;
    //console.log("o" ,o);
    ch += 1
    //console.log(ch)
    if (ch % 2 == 1){
        your2.innerHTML = `
        <img src="image/yourchoice.png" alt="" id="your">`
        your1.innerHTML ="";
        user1.push(o)
        //console.log("user1" , user1)
        changerXo(o, "X" )
    }  
    if ( ch % 2 == 0){
        your1.innerHTML = `
        <img src="image/yourchoice.png" alt="" id="your">`
        your2.innerHTML ="";
        user2.push(o)
        changerXo( o ," O ")
        
        //console.log("user2" , user2)
    }
}
function changerXo(a , m ){
    /*switch(expression) {
        case x:
          // code block
          break;
        case y:
          // code block
          break;
        default:
          // code block*/
          
            switch(a){
                case 1:
                    box1EL.innerHTML = m 
                break;
                case 2:
                    box2EL.innerHTML = m 
                break;
                case 3:
                    box3EL.innerHTML = m 
                break;
                case 4:
                    box4EL.innerHTML = m 
                break;
                case 5:
                    box5EL.innerHTML = m 
                break;
                case 6:
                    box6EL.innerHTML = m 
                break;
                case 7:
                    box7EL.innerHTML = m 
                break;
                case 8:
                    box8EL.innerHTML = m 
                break;
                case 9:
                    box9EL.innerHTML = m 
                break;

                default:      
            }
            resultCame()
            }
          
          
        function resultCame(){
            for (let i = 0 ; i < number.length ; i++){
                if (number[i] != 0){
                    console.log("normal")
                    isGameAlive = true;
                    resultGame()
                    console.log( isGameAlive)
                }
                else{
                    console.log("the game draw")

                }
            }

        }
        function resultGame(){
            if (user1.length >=3){
                //console.log(user1 ,user2)
                list(user1 , 1 )
                list(user2 , 2 )
            }
        
        }
/**-----------------------------*/
startEl.addEventListener("click", function(){   
    isStart = true
    console.log(isStart)
    statChage(1)    
    isGameOn = true;
    ch=0;
})
closeEl.addEventListener("click" , function(){
    isStart = false
    console.log(isStart)
    statChage(2)
    isGameOn == false
    
})
/** ----------------------------*/
box1EL.addEventListener("click" , function(){
    console.log(9)
    changeNumber(1)
    number[0] = 0;
})
box2EL.addEventListener("click" , function(){
    console.log(2)
    changeNumber(2)
    number[1] = 0
})
box3EL.addEventListener("click" , function(){
    console.log(3)
    changeNumber(3)
    number[2] = 0
})
box4EL.addEventListener("click" , function(){
    console.log(4)
    changeNumber(4)
    number[3] = 0
})
box5EL.addEventListener("click" , function(){
    console.log(5);
    changeNumber(5)
    number[4] = 0
})
box6EL.addEventListener("click" , function(){
    console.log(6)
    changeNumber(6)
    number[5] = 0
})
box7EL.addEventListener("click" , function(){
    console.log(7)
    changeNumber(7)
    number[6] = 0
})
box8EL.addEventListener("click" , function(){
    console.log(8)
    changeNumber(8)
    number[7] = 0
})
box9EL.addEventListener("click" , function(){
    console.log(9)
    changeNumber(9)
    number[8] = 0
})
/*---------------------------------------*/