const taskForm = document.getElementBtId("task-form");
const taskDesc = document.getElementById("task-desc");
const tableBody = document.getElementById("table-body");

let counter = 0;
function submitHandler(event){
    event.preventDefault();
    counter++;
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    tr.appendChild(td1);
    tableBody.appendChild(td2);
    td1.innerText = counter;
    td2.innerText = taskDesc.value;

}

taskForm.addEventListener("submit", submitHandler);