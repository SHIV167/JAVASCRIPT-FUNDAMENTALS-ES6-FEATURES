//REST AND SPREAD OPERATOR

//Example Rest
function addNumbers(a,b,c,d,...other){
console.log(other);//(arguments) ES5 Feature
return a+b+c+d;

}
const res=addNumbers(2,3,4,5,6,7,8,9)
console.log(res)

//Example Spread
var names=["Ajay","Anuj","Ram","Shyam"];
function getName(name1,name2,name3,name4){
console.log(name1,name2,name3,name4)


}
getName(names[0],names[1],names[2],names[3],);
getName(...names); //Best
getName(names);


//Object with Rest

var students={

name:"Ajay",
age:"26",
hobbies:["cricket","social"]

}

//const age=students.age;
const {...rest}=students;
console.log(rest);

//Object with Spread


var newStudent={
...students,
age:"29"


}
console.log(newStudent)






