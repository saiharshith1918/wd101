document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const tableBody = document.querySelector('#userTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate date of birth
        const dobInput = document.getElementById('dob');
        const dob = new Date(dobInput.value);
        const age = calculateAge(dob);

        if (age < 18 || age > 55) {
            alert('Age must be between 18 and 55.');
            return;
        }

        // Add user to the table
        addUserToTable();
        form.reset();
    });

    function addUserToTable() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const acceptedTerms = document.getElementById('terms').checked;

        const newRow = tableBody.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = name;
        cell2.textContent = email;
        cell3.textContent = password;
        cell4.textContent = dob;
        cell5.textContent = acceptedTerms ? 'Yes' : 'No';
    }

    function calculateAge(birthDate) {
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        return age;
    }
});
