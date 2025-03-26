const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');
const commentButton = document.getElementById('comment_button');

// Function to toggle the button state
function toggleButtonState() {
    if (nameInput.value.trim() !== '' && commentInput.value.trim() !== '') {
        commentButton.disabled = false;
    } 
    else {
        commentButton.disabled = true;
    }
}

// Add event listeners to input fields
nameInput.addEventListener('input', toggleButtonState);
commentInput.addEventListener('input', toggleButtonState);

// Prevent form submission
document.getElementById('comment_form').addEventListener('submit', 
    function(event) { 
        event.preventDefault(); 
        alert("Comment submitted! (No action yet)");
});