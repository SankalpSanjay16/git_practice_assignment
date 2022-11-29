let str="MALAYALAM";

let bag="";

for(let i=0; i<=str.length; i--){
   bag=str[i]+" "+bag;
}


if(bag===str){
console.log("It is a Palindrome");
}else{
  console.log("It is not a Palindrome");
}
