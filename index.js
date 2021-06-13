const welcomeLoginBtn = document.getElementById("welcomeLoginBtn");
const welcomeSection = document.getElementById("welcomeSection");
const commonSection = document.getElementById("commonSection");
const loginFormContainer = document.getElementById("loginFormContainer");
const welcomeLoginSection = document.getElementById("welcomeLoginSection");
const welcomeImage = document.getElementById("welcomeImage");
const backBtn = document.getElementById("backBtn");
const loginForm = document.getElementById("loginForm");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const usernameErrMsg = document.getElementById("usernameErrMsg");
const passwordErrMsg = document.getElementById("passwordErrMsg");
const usernameLabel = document.getElementById("usernameLabel");
const passwordLabel = document.getElementById("passwordLabel");
const content = document.getElementById("content");
const validUserContent = document.getElementById("validUserContent");
const formErrMSg = document.getElementById("formErrMSg");
const welcomeUserMsg = document.getElementById("welcomeUserMsg");
const logoutBtn = document.getElementById("logoutBtn");
const passwordVisibleToggle = document.getElementById("passwordVisibleToggle");
const welcomeImageEl = document.getElementById("welcomeImageEl");
const welcomeLoginBtnDupe = document.getElementById("welcomeLoginBtnDupe");

const formData = {
  username: "",
  password: "",
};

/*loginFormContainer.classList.add("hide");
welcomeLoginSection.classList.add("hide");
const showHideLogin = () => {
  commonSection.classList.toggle("move-common-section");
  welcomeSection.classList.toggle("hide");
  welcomeLoginSection.classList.toggle("hide");
  welcomeImage.classList.toggle("hide");
  loginFormContainer.classList.toggle("hide");
  if (screen.width < 992) {
    commonSection.classList.add("hide");
  }
};

welcomeLoginBtn.addEventListener("click", showHideLogin);
backBtn.addEventListener("click", showHideLogin);
*/
//malik code
loginFormContainer.classList.toggle("hide");
welcomeLoginSection.classList.add("hide");
const showHideLogin = () => {
  commonSection.classList.toggle("move-forward");
  welcomeImage.classList.toggle("move-backward");
  welcomeImage.classList.toggle("break-move-forward");
  commonSection.style.borderRadius = "0px";
  if (commonSection.classList.contains("move-forward")) {
    commonSection.style.borderTopLeftRadius = "25px";
    commonSection.style.borderBottomLeftRadius = "25px";
  } else {
    commonSection.style.borderTopRightRadius = "25px";
    commonSection.style.borderBottomRightRadius = "25px";
  }

  setTimeout(() => {
    welcomeSection.classList.toggle("hide");
    welcomeLoginSection.classList.toggle("hide");
    loginFormContainer.classList.toggle("hide");
    welcomeImageEl.classList.toggle("hide");
  }, 200);
};
welcomeLoginBtn.addEventListener("click", showHideLogin);
backBtn.addEventListener("click", showHideLogin);
//malik code
welcomeLoginBtnDupe.addEventListener("click", function () {
  commonSection.classList.add("mbl-anim");
});
userName.addEventListener("focus", function (event) {
  usernameLabel.textContent = "Username";
  usernameLabel.style.color = "#c62377";
});

const validateUsername = () => {
  if (userName.value === "") {
    usernameLabel.textContent += " (*required)";
    usernameLabel.style.color = "tomato";
  } else {
    usernameLabel.style.color = "#888";
  }
};

userName.addEventListener("blur", validateUsername);

password.addEventListener("focus", function (event) {
  passwordLabel.textContent = "Password";
  passwordLabel.style.color = "#c62377";
});

const validatePassword = () => {
  if (password.value === "") {
    passwordLabel.textContent += " (*required)";
    passwordLabel.style.color = "tomato";
  } else {
    passwordLabel.style.color = "#888";
  }
};

password.addEventListener("blur", validatePassword);

userName.addEventListener("change", function (event) {
  formData.username = event.target.value;
});

password.addEventListener("change", function (event) {
  formData.password = event.target.value;
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (formData.username && formData.password) {
    welcomeUserMsg.textContent += " " + formData.username;
    content.classList.add("hide");
    validUserContent.classList.remove("hide");
  } else {
    formErrMSg.classList.remove("hide");
  }
});

logoutBtn.addEventListener("click", function () {
  userName.value = "";
  password.value = "";
  content.classList.remove("hide");
  validUserContent.classList.add("hide");
});

passwordVisibleToggle.addEventListener("click", function () {
  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
  if (passwordVisibleToggle.classList.value.split(" ").includes("fa-eye")) {
    passwordVisibleToggle.classList.remove("fa-eye");
    passwordVisibleToggle.classList.add("fa-eye-slash");
  } else {
    passwordVisibleToggle.classList.remove("fa-eye-slash");
    passwordVisibleToggle.classList.add("fa-eye");
  }
});
