document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const tableBody = document.querySelector('#userTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const acceptedTerms = document.getElementById('acceptedTerms').checked;
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptedTerms}</td>`;
        form.reset();
    });
});
