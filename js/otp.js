const otpRequestForm = document.getElementById("otpRequestForm");
const otpSection = document.getElementById("otp-section");
const newPasswordSection = document.getElementById("new-password-section");
const phoneEmailSection = document.getElementById("phone-email-section");
const submitBtn = document.getElementById("submitBtn");
const otpInputs = document.querySelectorAll(".otp-input");

// Simulate sending OTP (in real-world, this would be a backend API call)
let generatedOtp = "1234";

// Automatically move between inputs and handle backspace navigation
otpInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

otpRequestForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // If we are at the OTP step
  if (
    !otpSection.classList.contains("d-none") &&
    newPasswordSection.classList.contains("d-none")
  ) {
    let enteredOtp = "";
    otpInputs.forEach((input) => (enteredOtp += input.value));

    // Validate OTP
    if (enteredOtp === generatedOtp) { 
      alert("OTP verified! Now, set your new password.");
      otpSection.classList.add("d-none");
      newPasswordSection.classList.remove("d-none");
      submitBtn.textContent = "Reset Password";
    } else {
      alert("Invalid OTP. Please try again.");
    }
  }
  // If we are at the password reset step
  else if (!newPasswordSection.classList.contains("d-none")) {
    const newPassword = document.getElementById("newPassword").value;

    // Perform password reset logic here (backend API)
    if (newPassword.length >= 8) {
      alert("Password reset successful!");
      // Redirect to sign-in page
      window.location.href = "index.html";
    } else {
      alert("Please enter a valid password.");
    }
  }
  // If we are at the phone/email step
  else {
    const phoneEmail = document.getElementById("phoneEmail").value;

    // Validate phone/email (you would send the OTP here in real-world)
    if (phoneEmail) {
      alert("OTP sent to your phone/email!");
      phoneEmailSection.classList.add("d-none");
      otpSection.classList.remove("d-none");
      submitBtn.textContent = "Verify OTP";
    } else {
      alert("Please enter a valid phone number or email.");
    }
  }
});