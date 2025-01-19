/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if(employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if(employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "Tony", age: 30, profession: "tester" };
  arr.push(newEmployee);
  console.log(arr)
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  cons newArr = [
    { id: 5, name: "Jasmin", age: 24, profession: "designer" },
    { id: 6, name: "Thor", age: 35, profession: "hacker" },
    { id: 7, name: "Venom", age: 21, profession: "manager" }
    ];
  const concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();

