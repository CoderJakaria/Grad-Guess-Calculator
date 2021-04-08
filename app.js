// for referent all tag and id and class //
const value1 = document.querySelector("#v1");
const value2 = document.querySelector("#v2");
const answer = document.querySelector("#answer").value;
const myButton = document.querySelector("#myButton");



// for collecting random numbers /
let randNum1 =Math.floor(Math.random()*9+1);
let randNum2 =Math.floor(Math.random()*9+1);
// end //

// for innerHTML the num
document.querySelector("#v1").value=randNum1;
document.querySelector("#v2").value=randNum2;
// end //





myButton.addEventListener('click',()=>{
     let sumAns = randNum1+randNum2;
     const answer = document.querySelector("#answer").value;
  if (answer==sumAns) {
       alert("Your Are Won!");
       location.reload();
  }else{
       alert(`Correct Number Is ${sumAns} Try Again`);
       location.reload();
  }

})

