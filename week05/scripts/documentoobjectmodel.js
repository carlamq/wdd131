//declare 3 variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');//you need to fell in the blank to reference the HTML element that is a unordered list element.
//add a li element that will hold each entry's chapter tilte and associated delete button.

function getChapterList() {
    return JSON.parse(localStorage.getItem("chapters")) || [];
}
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {//the trim method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
        displayList(input.value);//can add an aler message here like this: alert("Please enter a chapter title.");
        chaptersArray.push(input.value);// Add the new chapter to the array
        setChapterList();// Save the updated array to localStorage
        input.value = '';//clear the input field.
        input.focus();// Set focus back to the input field
    }
    function displayList(item) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = item; // note the use of the displayList parameter 'item'
        deletebutton.textContent = '❌';
        deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
        li.append(deletebutton);// append the delete button to the li element
        list.append(li);// append the li element to the unordered list in your HTML
        deletebutton.addEventListener('click', function () {// when the delete button is clicked, remove the li element from the list
            list.removeChild(li);// remove the li element from the list
            deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
            input.focus(); // set the focus back to the input
        });
        console.log('I like to copy code instead of typing it out myself and trying to understand it.');
    }
    function setChapterList() {
        localStorage.setItem('chaptersList', JSON.stringify(chaptersArray));
    }
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1); // remove the ❌ from the end of the chapter title
        chaptersArray = chaptersArray.filter(item => item !== chapter); // filter out the chapter from the array
        setChapterList(); // update the localStorage with the new array
    
    
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
    }
});
