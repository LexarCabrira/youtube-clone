document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[includes]").forEach(element => {
        fetch(element.getAttribute("includes"))
        .then(res => res.text())
        .then(data => element.innerHTML = data)
    });
});