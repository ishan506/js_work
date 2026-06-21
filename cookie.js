document.cookie = "username=Ishan";
console.log(document.cookie);
document.cookie = "user=Ishan; expires=Sun, 21 Jun 2026 12:00:00 UTC";
sessionStorage.setItem("name", "Ishan");

console.log(sessionStorage.getItem("name")); // Ishan

sessionStorage.removeItem("name");

sessionStorage.clear();
localStorage.setItem("user", JSON.stringify(user));