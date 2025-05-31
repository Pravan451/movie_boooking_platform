// Book Movie and Redirect
function bookMovie(id) {
  localStorage.setItem("selectedMovieId", id);
  window.location.href = "movie.html";
}

// Show bookings when loading the bookings page
window.onload = function () {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const container = document.getElementById("booking-list");

  if (!container) return; // Exit if not on bookings page

  if (bookings.length === 0) {
    container.innerHTML = "<p>No bookings yet. Book your seat and come back here to view your tickets!</p>";
  } else {
    container.innerHTML = "";
    bookings.forEach((b, index) => {
      const card = document.createElement("div");
      card.className = "booking-card";
      card.innerHTML = `
        <h3>🎬 ${b.movie}</h3>
        <p><strong>Time:</strong> ${b.time}</p>
        <p><strong>Date:</strong> ${b.date}</p>
        <p><strong>Booking ID:</strong> VEGUS-${index + 1}</p>
      `;
      container.appendChild(card);
    });
  }
};

// Validate Login Function
function validateLogin(event) {
  event.preventDefault();  // Prevent form submission and page refresh

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Get user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found! Please sign up first.");
    return false;
  }

  // Check if entered credentials match the stored ones
  if (username === storedUser.username && password === storedUser.password) {
    alert("Login Successful!");

    // Redirect to home page (index.html)
    window.location.href = "home.html";  // Make sure this path is correct!
    return false;
  } else {
    alert("Invalid username or password.");
    return false;
  }
}
