// user methods


function drawTable(tbody) {
    var tr, td;
    tbody = document.getElementById(tbody);
    // loop through data in users.js
    for (var i = 0; i < users.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = users[i].id;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = users[i].name;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = users[i].is_active;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = users[i].company;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = users[i].phone;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = users[i].email;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = users[i].office_location;
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = '<input type ="button"value = "X" onClick="deleteUser(this)">';

    }
}





function deleteUser (users) {
console.log(users);
var row = $(users).closest('tr');
var nRow = row[0];
$('#DirTable').dataTable().fnDeleteRow(nRow);



};
var counter = 1;
function addUser () {
var tables = $('#DirTable').DataTable();
tables.row.add([
counter + '.1',
counter + '.2',
counter + '.3',
counter + '.4',
counter + '.5',
counter + '.6',
counter + '.7',
counter + '<input type ="button"value = "X" onClick="deleteUser(this)">'
]).draw ( false );
counter ++;

};

﻿
