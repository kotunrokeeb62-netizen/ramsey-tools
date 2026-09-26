function loadGlobalTheme() {
  const savedTheme = localStorage.getItem("ramseyTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

loadGlobalTheme();
