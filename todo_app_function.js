// Add a "checked" symbol when clicking on a list item
var todoItemList = document.querySelector('ul');
todoItemList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// function for adding new TODO items to the list
function addToDo() {
  // Crate a new list item element
  var li = document.createElement("li");
  // Get the input text for TODO from the input element
  var inputValue = document.getElementById("todoItem").value;
  // Create the text node with the input text
  var toDoText = document.createTextNode(inputValue);
  // Append the TODO text node to the list item
  li.appendChild(toDoText);
  // If input todo text is empty
  if (inputValue === '') {
    // Gives the alert
    alert("TODO item cannot be empty");
  } else {
    // Otherwise add the new list item to the list
    document.getElementById("todoList").appendChild(li);
  }
  // Clear the text field of the input element
  document.getElementById("todoItem").value = "";

  // Add a close button to the newly created list item
  // Create a new SPAN element that will contain the close button
  var span = document.createElement("SPAN");
  // Create a new Text Node that stands for close button
  var text = document.createTextNode("\u00D7");
  // Set the style class of the span element to closeButton
  span.className = "closeButton";
  // Add text node (close mark) to the span element
  span.appendChild(text);
  // Append the close button to the list item element
  li.appendChild(span);

  // Set up the onclick event of the close button
  span.onclick = function() {
        // Get the parentElement of the close button which is the list item element
        var listItem = this.parentElement;
        // Remove the list item element if the close button is clicked
        listItem.parentNode.removeChild(listItem);
      }
}

// function for searching a TODO item by matching text content
function searchItems() {
  // Get the input element
  var input = document.getElementById('searchText');
  // Get the search text from the input element
  var searchText = input.value.toUpperCase();
  // Get the list element
  var ul = document.getElementById("todoList");
  // Get the list of list elements (TODO items)
  var li = ul.getElementsByTagName('li');

  // Loop counter
  var i;
  // Check all list items and hide items that does not contain search text
  for (i = 0; i < li.length; i++) {
    // Get the text content of the list item element
    var textValue = li[i].textContent;
    // Convert all text to upper case so the searching is not case sensitive
    // If text content of the list item contains the search text
    if (textValue.toUpperCase().indexOf(searchText) > -1) {
      // Show that list item
      li[i].style.display = "";
    } else {
      // Otherwise hide that list item
      li[i].style.display = "none";
    }
  }
}
