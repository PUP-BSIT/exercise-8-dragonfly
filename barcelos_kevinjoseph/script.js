let commentButton = document.getElementById("comment_button");
let nameInput = document.getElementById("name_input");
let messageInput = document.getElementById("message_input");

commentButton.disabled = true;

function toggleButtonState() {
  let isNameFilled = nameInput.value.trim() !== "";
  let isMessageFilled = messageInput.value.trim() !== "";
  commentButton.disabled = !(isNameFilled && isMessageFilled);
}

nameInput.addEventListener("input", toggleButtonState);
messageInput.addEventListener("input", toggleButtonState);
