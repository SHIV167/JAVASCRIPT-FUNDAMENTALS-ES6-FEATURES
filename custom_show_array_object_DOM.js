// console.log("hi !!!!!");
//alert("Testing !!");
// Async Programming
//Callbacks, Promises,Async & Await
const datas=[
{name:"shiv kumar jha one",profession:"Web developer one"},
{name:"shiv kumar jha two",profession:"Web developer two"},
{name:"shiv kumar jha three",profession:"Web developer three"},
{name:"shiv kumar jha four",profession:"Web developer four"}

];


function getDatas(){
setTimeout(() => {
      let output="";
      datas.forEach((data,index)=>{
      output+= `<li>${data.name}</li>`;


      })
      document.body.innerHTML=output
}, 1000);


}

getDatas();
