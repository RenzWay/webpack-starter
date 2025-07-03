import "../css/style.css";
import App from "./app";

document.addEventListener("DOMContentLoaded", async function () {
  const content = document.getElementById("content");
  const app = new App({ content });

  await app.renderPage();
  window.addEventListener("hashchange", async function () {
    await app.renderPage();
  });
});
