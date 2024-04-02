// HeaderContainer
const headerContainer = document.createElement("div");
headerContainer.classList.add("headerCont");

// Logo Container
const logoContainer = document.createElement("div");
logoContainer.classList.add("logoContainer");

// Logo
const logo = document.createElement("h1");
logo.classList.add("logo");
logo.textContent = "To-Do-List";

// subHeading Container
const subHeadingContainer = document.createElement("div");

// SubHeading
const a = document.createElement("a");
a.textContent = "About Us";

const h = document.createElement("a");
h.textContent = "help";

// adding logo to logo contrainer
logoContainer.appendChild(logo);

document.body.appendChild(logoContainer);
