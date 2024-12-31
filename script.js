document.getElementById('generateCard').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const userName = document.getElementById('userName');
    const card = document.getElementById('card');

    if (nameInput.trim() !== "") {
        userName.textContent = nameInput;
        card.classList.remove('hidden');
    } else {
        alert("Please enter your name!");
    }
});

document.getElementById('card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});