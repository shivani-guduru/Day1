var numbers=[];
for( var i=0;i<10;i++){
    numbers.push(prompt("Enter numbers"));
}
var even=[],odd=[],prime=[];
for(number of numbers){
    if(number%2==0)
even.push(number);
else
odd.push(number);
}
alert(even);
alert(odd);
for(number of numbers){
    var count=0;
    for(var i=1;i<=number;i++){
if(number%i==0)
count++;
    }
    if(count==2)
    prime.push(number);
}
alert(prime);