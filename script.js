function showAlert() {
    let text = document.getElementById("textbox").value;
    if (text.trim() !== "") {
        window.location.href = "newpage.html?message=" + encodeURIComponent(text);
    } else {
        alert("Please enter something first!");
    }
}
