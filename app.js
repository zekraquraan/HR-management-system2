'use strict'

//employee
const allEmployees=[];
let form = document.getElementById("form");
let container = document.getElementById("container");
function Employee(employeeId,fullName,department,level,imageUrl) {
  this.employeeId=employeeId;
  this.fullName=fullName;
  this.department=department;
  this.level=level;
  this.imageUrl=imageUrl;
  this.salary=0;
  allEmployees.push(this);
  
  console.log(fullName);
  console.log(department);
  console.log(level);
  console.log(imageUrl);
  
}
Employee.prototype.randomSalary=function () {
    console.log(this);
   
    if(this.level=="Junior"){
       
        this.salary=randomNumber(500,1000);
        
    }
    else if(this.level=="Mid-Senior"){
        this.salary=randomNumber(1000,1500);
        
    }
    else if (this.level=="Senior"){
        
        this.salary=randomNumber(1500,2000);

    }
    netSalary(this.salary);
  }

  let employee1 =new Employee(1000,"Ghazi Samer","Administration","Senior","./assets/ghazi.jpg");
  let employee2=new Employee(1001,"Lana Ali","Finance","Senior","./assets/lana.jpg");
  let employee3=new Employee(1002,"Tamara Ayoub","Marketing","Senior","./assets/tamara.jpg");
  let employee4=new Employee(1003,"Safi Walid","Administration","Mid-Senior","./assets/safi.jpg");
  let employee5=new Employee(1004,"Omar Zaid","Development","Senior","./assets/omar.jpg");
  let employee6=new Employee(1005,"Rana Saleh","Development","Junior","./assets/rana.jpg");
  let employee7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","./assets/hadi.jpg");


 
  Employee.prototype.render=function(){
    const div = document.getElementById("card");
    const img  =document.createElement("img");
   const fname =document.createElement("p");
   const department1=document.createElement("p");
   const level1=document.createElement("p");
   const salary1=document.createElement("p");
   const idn=document.createElement("p");
   
console.log(this.imageUrl);
   img.src=this.imageUrl;
   fname.textContent=this.fullName;
   department1.textContent=this.department;
   level1.textContent=this.level;
   salary1.textContent=this.salary;
   idn.textContent=this.employeeId;
   


   div.appendChild(img);
   div.appendChild(fname);
   div.appendChild(department1);
   div.appendChild(level1);
   div.appendChild(salary1);
   div.appendChild(idn);

   container.appendChild(div);
  }



// Employee.prototype.id=function(){
//   this.employeeId=id();
//   console.log(id());
  
// }
Employee.prototype.uniqueId=function(){
  return (Math.floor(Math.random() * 10000));
}

console.log(allEmployees);
methodCaller(allEmployees);
function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min))+min;
}
function netSalary(salary){
 console.log(salary);
}
function methodCaller(allEmployees){
  for(let i=0;i<allEmployees.length;i++){
    allEmployees[i].randomSalary();
    allEmployees[i].render();
    allEmployees[i].uniqueId();
    //allEmployees[i].netSalary();
   
  }}
  form.addEventListener("submit",eventHandler);
  function eventHandler(event){
    event.preventDefault();
    console.log(event.target);
    let fullName=(event.target.fullname.value);
    let Department=(event.target.department.value);
    let Level=(event.target.level.value);
    let imageUrl=(event.target.imageurl.value);
    console.log(fullName,Department,Level,imageUrl)
    let newObject=new Employee(fullName,Department,Level,imageUrl);
    newObject.render();
  }
  localStorage.setItem("employeeid","fullName");
  localStorage.setItem("imageUrl","salary");
  localStorage.setItem("department","level");
  