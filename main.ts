#! /usr/bin/env node

// start code step :1
import{ differenceInSeconds, DifferenceInSecondsOptions} from "date-fns";

//function for countdown second:
function* countdownTimer(second:number){
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}

//step # 2 : counter initialization
let timerIterator =  countdownTimer(10);

//function to create a countdown timer
function displayCountdown() {
    // value beow 10
    let result  = timerIterator.next();

    //if else condition apply:
    if(!result.done){

    //current date and time:
    const now = new Date();

    //calculate minutes in time:
    const countdownTime = new Date(now.getTime() + (result.value * 1000))

//calculate remaining seconds in time
const remainingSeconds = differenceInSeconds(countdownTime , now)
console.log(`Remaining Seconds: ${remainingSeconds}`)

setTimeout(displayCountdown, 1000) // 1 second is equal to 1000 micro sec
     }else {
        //display result countdown complete:
        console.log("countdown Complete!")
     }

}

//invoke
displayCountdown()