// URL of your deployed API
const apiUrl = "https://simple-user-api-8dub.onrender.com/users"; // Replace with your actual API URL

// Get the link and user list container
const fetchUsersLink = document.getElementById("fetchUsers");
const userList = document.getElementById("userList");

// Add a click event listener to fetch users
fetchUsersLink.addEventListener("click", async (e) => {
  e.preventDefault(); // Prevent default link behavior
  userList.innerHTML = "<p>Loading users...</p>";

  try {
    const response = await fetch(apiUrl); // Fetch data from API
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
    li.textContent = `ID: ${user.id}, Name: ${user.name}`; // Customize this based on your API response structure
    ul.appendChild(li);
  });

  userList.innerHTML = ""; // Clear previous content
  userList.appendChild(ul); // Append new user list
}
