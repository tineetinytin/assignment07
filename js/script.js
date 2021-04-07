// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById('empCount');
let count = 0;

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
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    let cellBtn = newRow.insertCell(5);
    cellBtn.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteEmployee);
    
    
    // RESET THE FORM
    form.reset(); 
    


    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.innerHTML = `${count}`;

});
    

// DELETE EMPLOYEE
    function deleteEmployee(e) {
        if (e.target.classList.contains('delete')) {
            if (confirm('Are you sure you want to delete this employee?')) {
                table.deleteRow(e.target.parentElement.parentElement.rowIndex);
                count--;
                empCount.innerHTML = count ? `${count}` : '';
            }
        }
    }