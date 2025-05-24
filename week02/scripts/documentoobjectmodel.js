//declare 3 variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');//you need to fell in the blank to reference the HTML element that is a unordered list element.
//add a li element that will hold each entry's chapter tilte and associated delete button.

butttonElemetn.addEventListener('click', function () {
    if (input.value.trim() === "") {//the trim method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
        //can add an aler message here like this: alert("Please enter a chapter title.");
        input.focus();
        return; // this will stop the fuunction if the input is empty.
    }
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    //Populate (rellene) the li element variable's textContent or inner HTML with the input value
    li.textContent = input.value; //textContent is preferred over innetHTML because is more secure.
                                //However, if you include HTML tags, then you would use innerHTML.
                                //textContent will not render HTML tags, it will just show them as text.
                                //WHY IS THE value PROPERTY USED?
                                //Because the input variable references an HTML input text field and that is what is wanted, i.e., the user's entry. 
                                // Here is the HTML that was provided: <input type="text" id="favchap" placeholder="Alma 5">
    //Populate the button textContent with a ❌
    deleteButton.textContent = '❌'; //tecla windows + . = ❌ en ingles es tecla windows + punto y coma ;
    //append the li element variable with the delete button
    li.append(deleteButton);
    //append the li element variable to the unordered list in your HTML
    list.append(li);

    input.value = ''; //clear the input field.
    input.focus();

    deleteButton.addEventListener('click', function () {
        list.removeChild(li); //remove the li element when click
    });
});
