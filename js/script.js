// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let extension = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell(0);
    let cellName = newRow.insertCell(1);
    let cellExt = newRow.insertCell(2);
    let cellEmail = newRow.insertCell(3);
    let cellDept = newRow.insertCell(4);


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));
    
    // CREATE THE DELETE BUTTON
      
    let deleteBtn = document.createElement('BUTTON');
    // deleteBtn = newRow.insertCell(5);
    deleteBtn.appendChild(document.createTextNode('X'));
    newRow.appendChild(deleteBtn);
    
    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    


    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    let empCount = document.querySelector('#empCount');
    count = table.rows.length; 
    console.log(count-1);
    empCount.appendChild(count);
    

    // let count = document.querySelector('#empCount');
    // for(var i = 0; i < newRow; ++i);
    // let totalRowCount = document.querySelector('#empCount');
    // totalRowCount = table.rows.length; 
    // totalRowCount.appendChild(totalRowCount-1);
    // var tbodyRowCount = table.tBodies[0].rows.length; // 3


    // count = () => {
    //     var employeeCount = $('empCount');
    //     employeeCount.innerHTML = 'Showing ' + employees.length + ' employees';
    // };
});

// DELETE EMPLOYEE
// newRow.addEventListener('click', (e) => {
//     // CHECK TO SEE IF THE .delete CLASS EXISTS ON LI
//     if (e.target.contains('delete')) {
//         // CONFIRM THE DELETE
//         if (confirm('Are you sure you want to delete this task?')) {
//             // SELECT THE PARENT LI ELEMENT AND THEN DELETE IT
//             newRow.removeChild(e.target.parentElement);
//         }
//     }
// });