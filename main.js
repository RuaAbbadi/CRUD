var employeename=document.getElementById('employeeName');
var age =document.getElementById('employeeAge');
var department =document.getElementById('employeeDepartment');
var salary =document.getElementById('employeeSalary');
var btn=document.getElementById('click');
var data=document.getElementById('data');

var employees=[];
btn.onclick=function(){
    readData();
    displayData();
}

function readData(){
    var employee={
        name:employeename.value,
        age:age.value,
        department:department.value,
        salary:salary.value
    }

    employees.push(employee);

}

function displayData(){
    var result="";
    for(var i=0 ; i<employees.length ; i++){
        result+="<tr> <td>"+i+"</td> <td>"+employees[i].name+"</td> <td>"+employees[i].age+"</td><td>"+employees[i].department+"</td> <td>"+employees[i].salary+"</td>  </tr> "
    }
    data.innerHTML=result;

}


