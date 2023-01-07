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

 function createData(newdata,callback){

return new Promise((resolve, reject) => {


setTimeout(() => {
    datas.push(newdata);

    //let error=false;  data will show
    let error=true; //  error will show
     if(!error){
      resolve();

     }

     else{

        reject("kuch bhi shi nhi hi.....");
     }

}, 2000);

})

 }







    createData({name:"testing name",profession:"testing profession"}).then(getDatas).catch(err => console.log(err));
