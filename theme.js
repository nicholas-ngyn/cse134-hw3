const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLightTheme = document.body.classList.contains("light-theme");
    themeToggle.textContent = isLightTheme ? "🌞" : "🌙";

    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "🌞";
}