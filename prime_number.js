
let num=23;

let count=0;

for(let i=1; i<=num; i++){
  if(i%num===0){
       count=count+" "+i;
}

if(count<=2){
console.log("It is a Prime Number");
}else{
console.log("It is not a Prime Number");
}
    