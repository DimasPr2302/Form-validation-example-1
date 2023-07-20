function validation() {
  let errorMessage = "";

  if (document.myForm.Username.value == "") {
    errorMessage = "Please fill Username!";
  } else if (document.myForm.Email.value == "") {
    errorMessage = "Please fill Email!";
  } else if (document.myForm.Password.value == "") {
    errorMessage = "Fill Password";
  } else if (document.myForm.cPassword.value !== document.myForm.Password.value) {
    errorMessage = "Password don't match";
  }

  if (errorMessage !== ""){
    document.getElementById("popup").innerHTML = errorMessage;
    return false;
  }

  return true;
}

