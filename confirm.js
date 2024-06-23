function displayConfirmation() {
    const urlParams = new URLSearchParams(window.location.search);
    const fullName = urlParams.get("fullName");
    const firstName = fullName.split(" ")[0];
    const email = urlParams.get("email");
    console.log(urlParams.toString());
    document.getElementById(
      "confirmationMessage"
    ).innerHTML = `Dear <strong>${firstName}</strong>,<br> Thank you for your inquiry.<br>
    A 4 digit verification number has been sent to your email: <strong>${email}</strong>,<br> 
    please enter it in the following box and submit for confirmation`;
  }

  //OTP Generation
  const otp = generateOTP();
  console.log('Generated OTP:', otp);

  window.validateOTP = function() {
      const enteredOTP = document.getElementById('otp').value;
      attempts++;
      if (enteredOTP == otp) {
          document.getElementById('otpForm').innerHTML = '<p>Validation Successful!</p>';
         
              window.location.href = 'https://www.pixel6.co/';
          
      } else if (attempts >= 3) {
          document.getElementById('otpForm').innerHTML = '<p>Validation Failed!</p>';
         
              window.location.href = 'https://www.pixel6.co/404';
        
      } else {
          alert('🔴 Incorrect OTP, please try again.'); 
          document.getElementById('otp').value = '';
      }
  };

  function generateOTP() {
      return Math.floor(1000 + Math.random() * 9000);
  }

  let attempts = 0;