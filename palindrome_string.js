let str="MALAYALAM";

let bag="";

for(let i=str.length-1; i>=0; i--){
   bag=bag+str[i];
}


if(bag===str){
console.log("It is a Palindrome");
}else{
  console.log("It is not a Palindrome");
}
