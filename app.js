'use strict'

//employee
const allEmployees=[];
function Employee(employeeId,fullName,department,level,imageUrl,salary) {
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=0;
   allEmployees.push(this);
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
    this.salary=netSalary(this.salary);
  }
 
  Employee.prototype.render=function(){
document.write(`<h3>employeeName is ${this.fullName},${this.salary}</h3>`);

  }


let employee1 =new Employee(1000,"Ghazi Samer","Administration","Senior");
let employee2=new Employee(1001,"Lana Ali","Finance","Senior");
let employee3=new Employee(1002,"Tamara Ayoub","Marketing","Senior");
let employee4=new Employee(1003,"Safi Walid","Administration","Mid-Senior");
let employee5=new Employee(1004,"Omar Zaid","Development","Senior");
let employee6=new Employee(1005,"Rana Saleh","Development","Junior");
let employee7=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");

console.log(allEmployees);
methodCaller(allEmployees);
function randomNumber(min,max) {
  return Math.floor(Math.random()*(max-min))+min;
}
function netSalary(salary){
return salary-(salary * 0.075);
}
function methodCaller(allEmployees){
  for(let i=0;i<allEmployees.length;i++){
    allEmployees[i].randomSalary();
    allEmployees[i].render();
   
  }}