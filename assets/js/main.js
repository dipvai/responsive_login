//*show hidden password
const showHiddenPassword = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    //!change password to text
    if (input.type === "password") {
      //*switch to text
      input.type = "text";
      //*change icon
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      //*change to password
      input.type = "password";

      //*change icon
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

showHiddenPassword("login-pass", "login-eye");
