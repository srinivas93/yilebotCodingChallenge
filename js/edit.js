var table;
$(document).ready(function () {
    table = $('#DirTable').DataTable();
    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction,
        "inputCss":'my-input-class',
        "columns": [1,2,3,4,5,6,7],
        "allowNulls": {
            "columns": [7],
            "errorClass": 'error'
        },
        "confirmationButton": { 
            "confirmCss": 'my-confirm-class',
            "cancelCss": 'my-cancel-class'
        },
        "inputTypes": [
            {
                "column": 1,
                "type": "text",
                "options": null
            },
            {
                "column":2, 
                "type": "list",
                "options":[
                    { "value": "true", "display": "true" },
                    { "value": "false", "display": "false" },
                    
                ]
            },
            {
                "column": 3,
                "type": "text",
                "options": null
            },
           {
                "column": 4,
                "type": "text",
                "options": null
            },

            {
                "column": 5,
                "type": "text",
                "options": null
            },

             {
                "column": 6,
                "type": "text",
                "options": null
            }, 
  
             {
                "column": 7,
                "type": "text",
                "options": null
            },
            

            
            
        ]
    });

});

function myCallbackFunction (updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The old value for that cell was: " + oldValue);
    console.log("The values for each cell in that row are: " + updatedRow.data());
}
