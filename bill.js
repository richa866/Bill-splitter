
let enterMoney=document.querySelector(".money");
let enterPeople=document.querySelector(".noPeople");
let split=document.querySelector(".split");
let displayShare=document.querySelector(".displayShare");
let peopleBtn= document.querySelectorAll(".people");
let numOfPeople;
let splittedMoney;
let enteredMoney;
let btnClicked=false;
 
peopleBtn.forEach((element) => {
    element.addEventListener("click", () => {
        btnClicked = true;
        enterPeople.value = element.textContent;
    });
});

split.addEventListener("click",()=>{
    if(enterMoney.value>0){
    enteredMoney=(enterMoney.value) ;
    if(btnClicked){
        numOfPeople=Number(enterPeople.value);
        btnClicked=false;
    }
    else{
        numOfPeople=(enterPeople.value) ;
    }
    if(numOfPeople>0){
        splitMoney(enteredMoney,numOfPeople);
    }
    else{
        alert("Enter number of people");
    }
}
else{
    alert("Invalid money entered");
}
})

let splitMoney=(enteredMoney,numOfPeople)=>{
    splittedMoney= (enteredMoney/numOfPeople).toFixed(2);
    displayShare.textContent=splittedMoney;
}



