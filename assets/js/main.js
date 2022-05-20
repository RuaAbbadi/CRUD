var employeename=document.getElementById('employeeName');
var age =document.getElementById('employeeAge');
var department =document.getElementById('employeeDepartment');
var salary =document.getElementById('employeeSalary');
var btn=document.getElementById('click');
var data=document.getElementById('data');
var inputs=document.getElementsByClassName('inputs');
var deleteBtn=document.getElementById('deleteBtn');
var  currentIndex=0;

if(localStorage.getItem("employeesList")==null){
     var employees=[];
}
else{
    var employees=JSON.parse(localStorage.getItem("employeesList"));
     displayData();
}
btn.onclick=function(){
    if(btn.innerHTML=="Add"){
        readData();
    }
    else{
        updateCourse();
    }
    displayData();
    clearForm();
}
deleteBtn.onclick=function(){
    deleteAll();
}
function readData(){
    var employee={
        name:employeename.value,
        age:age.value,
        department:department.value,
        salary:salary.value
    }

    employees.push(employee);
    localStorage.setItem("employeesList",JSON.stringify(employees));

}
function displayData(){
    var result="";
    for(var i=0 ; i<employees.length ; i++){
        result+=
       `<tr>
         <td>${i}</td>
          <td>${employees[i].name}</td>
         <td>${employees[i].age}</td>
         <td>${employees[i].department}</td>
          <td>${employees[i].salary}</td>
          <td> <button class="update" onclick=getEmployeeData(${i})> <i class="fa-solid fa-pen"></i></button></td> 
          <td> <button class="delete" onclick=deleteEmployee(${i})><i class="fa-solid fa-trash-can"></i></button></td> 
       </tr>`
    }
    data.innerHTML=result;

}
function clearForm(){
    for(var i =0 ; i<inputs.length ; i++){
        inputs[i].value="";
    }
}
function deleteEmployee(index){
    employees.splice(index,1);
    localStorage.setItem("employeesList",JSON.stringify(employees));
    displayData();
}
function deleteAll(){
    localStorage.removeItem("employeesList");
    employees=[];
    data.innerHTML="";
}

function search(searchText){

    var result="";
    for(var i=0 ; i<employees.length ; i++){
        if(employees[i].name.toLowerCase().includes(searchText.toLowerCase())){
            result+=
            `<tr>
              <td>${i}</td>
              <td>${employees[i].name}</td>
              <td>${employees[i].age}</td>
              <td>${employees[i].department}</td>
              <td>${employees[i].salary}</td>
              <td> <button class="update"> <i class="fa-solid fa-pen"></i></button></td> 
              <td> <button class="delete" onclick=deleteEmployee(${i})><i class="fa-solid fa-trash-can"></i></button></td> 
            </tr>`
         }
        }
         data.innerHTML=result;
}
function getEmployeeData(index){
    var employee = employees[index];
    employeename.value=employee.name;
    age.value=employee.age;
    department.value=employee.department;
    salary.value=employee.salary;
    btn.innerHTML="Update Course";
    currentIndex=index;
    
}
function updateCourse(){
    var employee={
        name:employeename.value,
        age:age.value,
        department:department.value,
        salary:salary.value,
    }
    employees[currentIndex].name=employee.name;
    employees[currentIndex].age=employee.age;
    employees[currentIndex].department=employee.department;
    employees[currentIndex].salary=employee.salary;
    localStorage.setItem("employeesList",JSON.stringify(employees));
}