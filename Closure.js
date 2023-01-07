//Closure
var sum=function(a){
console.log("The result is"+a);
var c=4;
return function(b){
return a+b+c;


}


}

var store=sum(200); //calling
console.log(store(5))


//


var sum=function(a,b,c){

return {
getSumTwo:function(){
return a+b;

},
getSumThree:function(){
    return a+b+c;

    }




}




}
var store=sum(3,4,5);//calling
console.log(store.getSumTwo())
console.log(store.getSumThree())


var store1=sum(7,8,9);//calling
console.log(store.getSumTwo())
console.log(store.getSumThree())
