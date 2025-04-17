let data = JSON.parse(localStorage.getItem("users")) || [];

function saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(data));
}

function displayData() {
    const container = document.getElementById("dataDisplay");
    container.innerHTML = "";
    data.forEach((user, index) => {
        container.innerHTML += `
      <div class="card">
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <button class="edit-btn" onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </div>
    `;
    });
}

function addData() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name && email) {
        data.push({ name, email });
        saveToLocalStorage();
        displayData();
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Please fill all fields!");
    }
}

function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        data.splice(index, 1);
        saveToLocalStorage();
        displayData();
    }
}

function editUser(index) {
    const newName = prompt("Enter new name:", data[index].name);
    const newEmail = prompt("Enter new email:", data[index].email);

    if (newName && newEmail) {
        data[index].name = newName;
        data[index].email = newEmail;
        saveToLocalStorage();
        displayData();
    }
}

displayData();
