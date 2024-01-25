var nineOClock = document.querySelector("#hour-9");
var tenOClock = document.querySelector("#hour-10");
var elevenOClock = document.querySelector("#hour-11");

 var currentTime = dayjs();

// Event listener for clicks on the page
document.addEventListener('click', function(event) {
    // Checks if the clicked element is a save button
    if (event.target.classList.contains('saveBtn') || event.target.parentNode.classList.contains('saveBtn')) {
        // Finds the task "description" within the respective time block
        var timeBlock = event.target.closest('.time-block');
        var task = timeBlock.querySelector('.description').value;

        // Uses the time-block's ID to create a key for local storage
        var timeBlockId = timeBlock.id;
        localStorage.setItem(timeBlockId, task);
    }
});

// Loads saved tasks
function loadTasks() {
    var timeBlocks = document.querySelectorAll('.time-block');
    timeBlocks.forEach(function(block) {
        var savedTask = localStorage.getItem(block.id);
        if (savedTask) {
            block.querySelector('.description').value = savedTask;
        }
    });
}

// Loads tasks when the page is loaded
window.onload = loadTasks;



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
