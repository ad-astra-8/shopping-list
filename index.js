// function to add items in the shopping list
function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");
    
    //get value of input box
    let itemValue = $('#shopping-list-entry').val();

    //check if the logic makes sense -> make sure you get the value you are adding in the html
   //alert(itemValue);

    //validate input
    if (itemValue.length === 0){
        alert('You have to add something!!!');
    }
    //if the input is valid ...
    else {
        
        // create one row inside the shopping list
        let row = '';
        row += '<li>';
        row += '<span class="shopping-item">' + itemValue + '</span>';
        row += '<div class="shopping-item-controls">';
        row += '<button class="shopping-item-toggle">';
        row += '<span class="button-label">check</span>';
        row += '</button> ';
        row += '<button class="shopping-item-delete">';
        row += '<span class="button-label">delete</span>';
        row += '</button>';
        row += '</div>';
        row += '</li>';

        //add each row to the previous ones
        $('.shopping-list').append(row);
        // empty input box after submitting item 
        $('#shopping-list-entry').val('');
    }
}

 //function to check items in the shopping list
function checkItem() {
     //alert('I ve just activated the checkItem() function');
     
     // add/ remove 'shopping-item_checked class to parent of parent of button we just clicked on'
     $(this).parent().parent().toggleClass('shopping-item__checked');

     //$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
     //$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
     // });
}

// function to delete items in the shopping list
function deleteItem() {
    //check if targeting is working
    //alert('ive just activated the deleteItem() function');

    //$(this) on whatever you just clicked (the delete one item button), go to the closest Li and remove it along with everythg inside it
    $(this).closest('li').remove();
}


/**Step 2 functions and objects **/

$(document).ready(function () {

    //on click on the #js-shopping-list-form button button activate function called addItem().
    $('#js-shopping-list-form').submit(function (event){
        event.preventDefault();

        addItem();
    });
    
});

$(document).on('click', '.shopping-item-toggle', checkItem);

$(document).on('click', '.shopping-item-delete', deleteItem);