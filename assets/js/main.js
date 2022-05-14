var employeename=document.getElementById('employeeName');
var age =document.getElementById('employeeAge');
var department =document.getElementById('employeeDepartment');
var salary =document.getElementById('employeeSalary');
var btn=document.getElementById('click');
var data=document.getElementById('data');
var inputs=document.getElementsByClassName('inputs');

if(localStorage.getItem("employeesList")==null){
     var employees=[];
}
else{
    var employees=JSON.parse(localStorage.getItem("employeesList"));
     displayData();
}


var employees=[];
btn.onclick=function(){
    readData();
    displayData();
    clearForm();
}

function readData(){
    var employee={
        name:employeename.value,
        age:age.value,
        department:department.value,
        salary:salary.value
    }

    employees.push(employee);
    localStorage.setItem("employeesList",JSON.stringify(employees))

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
          <td> <button class="update"> <i class="fa-solid fa-pen"></i></button></td> 
          <td> <button class="delete" onclick=deleteData(${i})><i class="fa-solid fa-trash-can"></i></button></td> 
       </tr>`
    }
    data.innerHTML=result;

}
function clearForm(){
    for(var i =0 ; i<inputs.length ; i++){
        inputs[i].value="";
    }
}
function deleteData(index){
    employees.splice(index,1);
    localStorage.setItem("employeesList",JSON.stringify(employees));
    displayData();
}

