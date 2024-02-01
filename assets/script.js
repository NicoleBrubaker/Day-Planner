var currentDate = document.querySelector("#currentDay");


$(document).ready(function () {
  var currentDate = dayjs().format("dddd, MMMM DD");
  $("#currentDay").text(currentDate);
});

 $(document).ready(function() {
    var currentTime = dayjs().hour();
     $('.time-block').each(function() {
        var blockHour = parseInt(this.id.split('-')[1]);

        if (blockHour === currentTime) {
            $(this).removeClass('future').addClass('present');
        } else if (blockHour < currentTime) {
            $(this).removeClass('future').addClass('past');
        }
        // Future is default in HTML
    });
 });

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



