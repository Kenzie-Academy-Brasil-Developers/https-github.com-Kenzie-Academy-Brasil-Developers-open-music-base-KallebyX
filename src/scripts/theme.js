function handleDarkMode() {
    const body = document.body;
    const cards = document.querySelectorAll(".box");
    const buttons = document.querySelectorAll(".buttons");
    const mainButton = document.querySelector(".buttonMode");
  
mainButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    cards.forEach((card) => {
        card.classList.toggle("dark-mode");
    });
    buttons.forEach((button) => {
        button.classList.toggle("dark-mode");
    });
  
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("@openMusic:darkMode", "true");
        mainButton.innerHTML = '<img src="./src/assets/img/sol.png" alt="Sol">';
        const head = document.head;
        let link = head.querySelector('link[href="./src/styles/darkmode.css"]');
        if (!link) {
          link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "./src/styles/darkmode.css";
          link.setAttribute("data-style", "darkmode");
          head.appendChild(link);
        }
    } else {
        localStorage.setItem("@openMusic:darkMode", "false");
        mainButton.innerHTML = '<img src="./src/assets/img/lua.png" alt="Lua">';
        const head = document.head;
        const link = head.querySelector('link[data-style="darkmode"]');
        if (link) {
          head.removeChild(link);
        }
      }
    });
  
const isDarkMode = localStorage.getItem("@openMusic:darkMode") === "true";
  
if (isDarkMode) {
      body.classList.add("dark-mode");
      cards.forEach((card) => {
        card.classList.add("dark-mode");
      });
      buttons.forEach((button) => {
        button.classList.add("dark-mode");
      });
      mainButton.innerHTML = '<img src="./src/assets/img/sol.png" alt="Sol">';
      const head = document.head;
      let link = head.querySelector('link[href="./src/styles/darkmode.css"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./src/styles/darkmode.css";
        link.setAttribute("data-style", "darkmode");
        head.appendChild(link);
      }
    } else {
      body.classList.remove("dark-mode");
      cards.forEach((card) => {
        card.classList.remove("dark-mode");
      });
      buttons.forEach((button) => {
        button.classList.remove("dark-mode");
      });
      mainButton.innerHTML = '<img src="./src/assets/img/lua.png" alt="Lua">';
      const head = document.head;
      const link = head.querySelector('link[data-style="darkmode"]');
      if (link) {
        head.removeChild(link);
      }
    }
}

handleDarkMode()