// script.js
document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const itemName = document.getElementById('itemName').value;
  const itemDescription = document.getElementById('itemDescription').value;
  const location = document.getElementById('location').value;

  // Create a new donation card
  const donationList = document.getElementById('donationList');
  const donationCard = document.createElement('div');
  donationCard.innerHTML = `<strong>${itemName}</strong> - ${itemDescription} <br><em>Location: ${location}</em>`;
  donationList.appendChild(donationCard);

  // Clear form fields after submission
  document.getElementById('donationForm').reset();

  // Add confirmation message
  alert('Thank you for your donation!');
});
