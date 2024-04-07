class Header {
  constructor() {
    // HeaderContainer
    const header = () => {
      const headerContainer = document.createElement("div");
      headerContainer.classList.add("headerCon");

      // Logo Container
      const logoContainer = document.createElement("div");
      logoContainer.classList.add("logoContainer");

      // Logo
      const logo = document.createElement("h1");
      logo.classList.add("logo");
      logo.textContent = "To-Do-List";

      // subHeading Container
      const subHeadingContainer = document.createElement("div");
      subHeadingContainer.classList.add(subHeadingCon);
      // SubHeading
      const a = document.createElement("a");
      a.textContent = "About Us";

      const h = document.createElement("a");
      h.textContent = "help";

      subHeadingContainer.appendChild(a);
      subHeadingContainer.appendChild(h);

      // adding logo to logo contrainer
      logoContainer.appendChild(logo);

      headerContainer.appendChild(logoContainer);
      headerContainer.appendChild(subHeadingContainer);

      return headerContainer;
    };
  }
  getHeaderElement() {
    return this.headerContainer;
  }
}

// create the header obj
const headerObj = new Header();

document.body.appendChild(header());
