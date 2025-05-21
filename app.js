const max= prompt("enter the max number");
const random= Math.floor(Math.random() *max)+1;
let guess= prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congrats!!",random);
        break;
    }else if(guess<random){
        guess=promt("your guess was small.please try again");
    }else{
        guess=promt("your guess was too large.please try again")
    }

}
