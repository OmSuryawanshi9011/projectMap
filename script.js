/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  
  let dev = arr.map((ele,idx)=>{
    if(ele.profession==="developer") return ele;
  });
  console.log(dev);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
     arr.forEach((ele,idx)=>{
    if(ele.profession==="developer"){
        console.log(ele);
    };
  });
}

function addData() {
  //Write your code here, just console.log
   arr.push({id:4,name:"susan",age:"20",profession:"intern"});
   console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((ele,idx)=>{
    if(ele.profession==="admin"){
        arr.splice(idx,1);
    };
  });
  console.log(arr);
}

let arr2 = [
  { id: 5, name: "nick", age: "28", profession: "manager" },
  { id: 6, name: "will", age: "25", profession: "manager" },
  { id: 7, name: "kat", age: "22", profession: "trainee" },
];

function concatenateArray() {
  //Write your code here, just console.log
  console.log(arr.concat(arr2));
}
