//   // Function to handle password reset and store in localStorage
//   function resetPassword(event) {
//     event.preventDefault();

//     const newPassword = document.getElementById("newPassword").value;
//     const confirmPassword =
//       document.getElementById("confirmPassword").value;
//     const errorMessage = document.getElementById("error-message");

//     // Validate if passwords match
//     if (newPassword !== confirmPassword) {
//       errorMessage.style.display = "block";
//     } else {
//       errorMessage.style.display = "none";
//       // Store new password in localStorage
//       localStorage.setItem("userPassword", newPassword);
//       alert("Password reset successfully!");

//       // Optionally, redirect to login or another page
//       // window.location.href = 'login.html';
//     }
//   }
