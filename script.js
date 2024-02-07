function generatePassword() {
    // Define characters to include in the password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

    // Set the length of the password
    const passwordLength = 12;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    // Display the generated password
    document.getElementById('password').value = newPassword;
  }


  // Display the generated password
  document.getElementById('password').value = newPassword;


  function copyToClipboard() {
    const passwordField = document.getElementById('password');

    // Select the text in the password field
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Alert the user that the password has been copied
    alert('Password copied to clipboard: ' + passwordField.value);
  }
