document.addEventListener("DOMContentLoaded", () => {
    let nameInput = document.getElementById("name");
    let commentInput = document.getElementById("comment");
    let submitButton = document.getElementById("submit_comment");

    function validateForm() {
        submitButton.disabled = !(nameInput.value.trim() 
        && commentInput.value.trim());
    }

    nameInput.addEventListener("input", validateForm);
    commentInput.addEventListener("input", validateForm);
});
                                                                               