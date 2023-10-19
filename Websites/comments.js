// Function to handle comment submission
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the comment from the input field
    var commentText = document.getElementById("comment").value;

    // Create a new comment element
    var commentElement = document.createElement("div");
    commentElement.innerHTML = commentText;

    // Append the new comment to the bottom of the comments section
    document.getElementById("comments").appendChild(commentElement);

    // Clear the input field
    document.getElementById("comment").value = "";
});

