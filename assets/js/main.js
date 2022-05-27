var employeename=document.getElementById('employeeName');
var age =document.getElementById('employeeAge');
var department =document.getElementById('employeeDepartment');
var salary =document.getElementById('employeeSalary');
var btn=document.getElementById('click');
var data=document.getElementById('data');
var inputs=document.getElementsByClassName('inputs');
var deleteBtn=document.getElementById('deleteBtn');
var nameAlert=document.getElementById('nameAlert');
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
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

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
    btn.innerHTML="Add";
}
function deleteEmployee(index){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            employees.splice(index,1);
            localStorage.setItem("employeesList",JSON.stringify(employees));
            displayData();
          Swal.fire(
            'Deleted!',
            'The Employee has been deleted.',
            'success'
          )
        }
      })
   
}
function deleteAll(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("employeesList");
            employees=[];
            data.innerHTML="";
          Swal.fire(
            'Deleted!',
            'Employees have been deleted.',
            'success'
          )
        }
      })
  
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

employeeName.onkeyup=function(){
    var patternName = /^[A-Z][a-z]{2,8}$/;
    if(patternName.test(employeeName.value)){
        btn.removeAttribute("disabled");
        employeeName.classList.add('is-valid');
        employeeName.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    }
    else{
        btn.setAttribute("disabled","true");
        employeeName.classList.add('is-invalid');
        employeeName.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
    }
}
