`use strict`
let allEmployee=[]
let secEl=document.getElementById("sec1");
let form=document.getElementById("form");

function Employee (employeeId,fullName,department,level,imageUrl,salary) {
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=0;
    allEmployee.push(this);
}





let firstEmployee=new Employee("1000","Ghazi Samer","Administration","Senior","assets/ghazi.jpg");
let secondEmployee=new Employee("1001","Lana Ali","Finance","Senior","assets/lana.jpg");
let thirdEmployee=new Employee("1002","Tamara Ayoub","Marketing","Senior","assets/tamara.jpg");
let forthEmployee=new Employee("1003","Safi Walid","Administration","Mid-Senior","assets/safi.jpg");
let fifthEmployee=new Employee("1004","Omar Zaid","Development","Senior","assets/omar.jpg");
let sixthEmployee=new Employee("1005","Rana Saleh","Development","Junior","assets/rana.jpg");
let seventhEmployee=new Employee("1006","Hadi Ahmad","Finance","Mid-Senior","assets/hadi.jpg");

Employee.prototype.calculateSalary= function (){
    if(this.level=="Senior"){
        return Math.floor(Math.random() * (2000 - 1500) ) + 1500;
    }else if(this.level=="Mid-Senior"){
        return Math.floor(Math.random() * (1500 - 1000) ) + 1000;
    }else if (this.level=="Junior"){
        return Math.floor(Math.random() * (1000 - 500) ) + 500;   
    }
}

Employee.prototype.netSalary= function (){
   let tax =this.calculateSalary()*0.075;
   let netSal=this.calculateSalary()-tax;
   this.salary=netSal;
}

Employee.prototype.render=function(){
    this.netSalary();
    let divEl=document.createElement("div");
    secEl.appendChild(divEl);
    let imgEmp=document.createElement("img");
    imgEmp.src=this.imageUrl;
    divEl.appendChild(imgEmp);
    let h4El=document.createElement("h4");
    h4El.textContent=`Name: ${this.fullName} - ID: ${this.employeeId}`;
    divEl.appendChild(h4El);
    let h4El2=document.createElement("h4");
    h4El2.textContent=`Department: ${this.department} - Level: ${this.level}.`;
    divEl.appendChild(h4El2);
    let h4El3=document.createElement("h4");
    h4El3.textContent=this.salary;
    divEl.appendChild(h4El3);
    
}



function uniqueId(){

    return (Math.floor(Math.random() * 10000));
}

Employee.prototype.getEmpId=function(){
       
    this.employeeId=uniqueId();
    
}


form.addEventListener("submit", submitHandler);
function submitHandler(event) {
    event.preventDefault();
    let flName=(event.target.fname.value);
    let dept=(event.target.department.value);
    let levelVar=(event.target.level.value);
    let imgVar=(event.target.image.value);
    let showNewEmployee=new Employee(0,flName,dept,levelVar,imgVar);
    showNewEmployee.getEmpId();
    showNewEmployee.render();
    console.log(showNewEmployee);
    saveData(allEmployee);
       
}
function allEmployeeCaller(){

    for(let i=0 ;i<allEmployee.length;i++){
        allEmployee[i].getEmpId();
        allEmployee[i].render();   
    }
    
}



function saveData(data){
    let stringArr=JSON.stringify(data);
    localStorage.setItem('Employee',stringArr);
    
}

console.log("before saving in LS",allEmployee);


function getData(){
    let retriveArr=localStorage.getItem('Employee');
    let objArr=JSON.parse(retriveArr);
    console.log("after gitting from LS",objArr);
    if( objArr !==null ){
        allEmployee=[];
        for(let i=0;i<objArr.length;i++){
            new Employee(objArr[i].employeeId ,objArr[i].fullName,
             objArr[i].department ,objArr[i].level, objArr[i].imageUrl ,objArr[i].salary)
         }
    }
    
}
getData();  
allEmployeeCaller(allEmployee);
