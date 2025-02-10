// URL of your deployed API
const apiUrl = "https://simple-user-api-8dub.onrender.com"; // Replace with your actual API URL
//const apiUrl = "http://localhost:5000"

// Get the link and user list container
const fetchUsersLink = document.getElementById("fetchUsers");
const userList = document.getElementById("userList");

// Add a click event listener to fetch users
fetchUsersLink.addEventListener("click", async (e) => {
  e.preventDefault(); // Prevent default link behavior
  userList.innerHTML = "<p>Loading users...</p>";

  try {
    const response = await fetch(`${apiUrl}/get-users`); // Fetch data from API
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json(); // Parse JSON response
    displayUsers(users); // Call function to display users
  } catch (error) {
    userList.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
});

// Function to display users
function displayUsers(users) {
  if (users.length === 0) {
    userList.innerHTML = "<p>No users found.</p>";
    return;
  }

  const ul = document.createElement("ul"); // Create a list
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`; // Customize this based on your API response structure
    ul.appendChild(li);
  });

  userList.innerHTML = ""; // Clear previous content
  userList.appendChild(ul); // Append new user list
}

document.getElementById('addUserForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  const response = await fetch(`${apiUrl}/add-user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, age }),
  });

  if (response.ok) {
    alert('User added successfully!');
  } else {
    alert('Failed to add user.');
  }
});
