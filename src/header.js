class Header {
  constructor() {
    // HeaderContainer
    this.headerContainer = document.createElement("div");
    this.headerContainer.classList.add("headerCon");

    // Logo Container
    this.logoContainer = document.createElement("div");
    this.logoContainer.classList.add("logoContainer");

    // Logo
    this.logo = document.createElement("h1");
    this.logo.classList.add("logo");
    this.logo.textContent = "To-Do-List";

    // SubHeading Container
    this.subHeadingContainer = document.createElement("div");
    this.subHeadingContainer.classList.add("subHeadingCon");

    // SubHeading Links
    const a = document.createElement("a");
    a.textContent = "About Us";

    const h = document.createElement("a");
    h.textContent = "Help";

    this.subHeadingContainer.appendChild(a);
    this.subHeadingContainer.appendChild(h);

    // Adding logo to logo container
    this.logoContainer.appendChild(this.logo);

    this.headerContainer.appendChild(this.logoContainer);
    this.headerContainer.appendChild(this.subHeadingContainer);
  }

  getHeaderElement() {
    return this.headerContainer;
  }
}

// Create the header object
const headerObj = new Header();

// Append the header to the document body
document.body.appendChild(headerObj.getHeaderElement());
