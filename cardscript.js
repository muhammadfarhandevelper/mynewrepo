let obj={};
let cardarray = [];
var array =[
    {id:1 ,title:"sofa 1",imgsrc: "./images/sofa1.png",price:200},
    {id:2 ,title:"sofa 2",imgsrc: "./images/sofa2.png",price:200},
    {id:3 ,title:"sofa 3",imgsrc: "./images/sofa3.png",price:600},
]

cardshow();



function cardshow(){
  
    let data = JSON.parse(localStorage.getItem("mycard"))
    console.log(data)
    
    document.getElementById("carddata").innerHTML = "";
    for(var i =0;i<data.length;i++){
        document.getElementById("carddata").innerHTML += `
       <div class="col-md-12">
        <img src="${data[i].imgsrc}" width="100px"/>
        <span>${data[i].title}</span>
        <span>${data[i].price}</span>
        </div>
        `
    }
    
  }
 

function cardfullshow(){

    
    for(var i=0;i<array.length;i++){
        
        document.getElementById("mycard").innerHTML +=  `
        <div class="col-md-4">
        <div class="card p-3">
          <img src="${array[i].imgsrc}" width="100%"/>
          <h3>${array[i].title}</h3>
          <p>${array[i].price}</p>
          <button class="btn btn-primary w-50" onclick="getdata(${array[i].id})">Add </button>
          </div>

      </div>
  `

}
}




function getdata(id){

  for(var i=0;i<array.length;i++){
      if(id==array[i].id){
         obj = {imgsrc : array[i].imgsrc,title : array[i].title, price : array[i].price} 
       
              cardarray.push(obj);
          }
  }
  cardinsetinstorage();
}
function cardinsetinstorage(){

    let newcardarray = JSON.stringify(cardarray);
    localStorage.setItem("mycard",newcardarray);
}





