const chk = document.getElementById("mode")
const imglogo = document.getElementById("imglogo")

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})

const darkModeEnabled = getCookie("darkModeEnabled"); // Obtém o valor do cookie

// Verifica se o dark mode está ativado no cookie e aplica o estilo correspondente
if (darkModeEnabled === "true") {
  document.body.classList.add("dark");
  chk.checked = true;
}

// Variáveis de caminho da imagem
const logoLight = "../imgs/afoloulogoazul.png";
const logoDark = "../imgs/afoloulogorosa.png";

// Define a logo conforme o estado do switch
function updateLogo(isDark) {
  imglogo.src = isDark ? logoDark : logoLight;
}

// Aplica estado salvo no cookie ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const darkMode = document.cookie.includes("darkModeEnabled=true");
  document.body.classList.toggle("dark", darkMode);
  chk.checked = darkMode;
  updateLogo(darkMode);
});

// Escuta mudanças no toggle
chk.addEventListener("change", () => {
  const isDark = chk.checked;
  document.body.classList.toggle("dark", isDark);
  updateLogo(isDark);
  setCookie("darkModeEnabled", isDark, 30);
});

// Função para obter o valor de um cookie
function getCookie(name) {
  const cookies = document.cookie.split(";").map(cookie => cookie.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

// Função para definir um cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}
