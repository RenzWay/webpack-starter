export default class App {
  constructor({ content }) {
    this.content = content;
    this.lang = sessionStorage.getItem("lang") || "en";
  }

  render() {
    const t = this.getTexts();
    return `
    <header class="hero">
      <div class="container">
        <div class="lang-switcher">
          <select id="lang-select">
            <option value="id"${
              this.lang === "id" ? " selected" : ""
            }>🇮🇩 ID</option>
            <option value="en"${
              this.lang === "en" ? " selected" : ""
            }>🇬🇧 EN</option>
          </select>
        </div>
        <div class="flex justify-center">
            <img width="10%" src="webpack.svg" alt="Webpack logo">
            <h1>${t.title}</h1>
        </div>
        <p>${t.subtitle}</p>
        <a href="https://github.com/RenzWay/webpack-starter" target="_blank" class="btn-primary">
          ${t.visitGitHub}
        </a>
      </div>
    </header>

    <section class="features">
      <div class="container">
        <h2>${t.provided}</h2>
        <ul>
          ${t.features.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </section>

    <section class="usage">
      <div class="container">
        <h2>${t.usageTitle}</h2>
        <div class="steps">
          ${t.steps
            .map((step) => `<div class="step"><code>${step}</code></div>`)
            .join("")}
        </div>
      </div>
    </section>

    <footer>
      <p>© 2025 Webpack Starter by: <a href="https://github.com/RenzWay" target="_blank">RenzWay</a></p>
      <p class="disclaimer">${t.disclaimer}</p>
    </footer>
  `;
  }

  getTexts() {
    const TEXTS = {
      id: {
        title: "Webpack Starter",
        subtitle:
          "Template Webpack modern & minimalis untuk mulai ngoding tanpa ribet konfigurasi.",
        visitGitHub: "🔗 Kunjungi GitHub",
        provided: "Apa yang sudah Disediakan?",
        features: [
          "✅ Webpack 5 + Babel",
          "⚙️ Mode Development & Production",
          "🔥 Hot Module Replacement (HMR)",
          "🎨 Dukungan CSS dan asset loader",
          "🧹 CleanWebpackPlugin",
          "📄 HTML otomatis via HtmlWebpackPlugin",
        ],
        usageTitle: "Cara Pakai",
        steps: [
          "1. Clone repo: git clone https://github.com/RenzWay/webpack-starter.git",
          "2. Install: npm install",
          "3. Mulai dev server: npm run dev",
          "4. Edit kode di src/ & lihat hasilnya!",
        ],
        disclaimer:
          "Ini bukan proyek resmi Webpack. Dibuat oleh komunitas untuk tujuan pembelajaran.",
      },
      en: {
        title: "Webpack Starter",
        subtitle:
          "A modern & minimal Webpack template to start coding without configuration hassle.",
        visitGitHub: "🔗 Visit GitHub",
        provided: "What's Included?",
        features: [
          "✅ Webpack 5 + Babel",
          "⚙️ Development & Production Modes",
          "🔥 Hot Module Replacement (HMR)",
          "🎨 CSS & asset loader support",
          "🧹 CleanWebpackPlugin",
          "📄 Auto HTML via HtmlWebpackPlugin",
        ],
        usageTitle: "How to Use",
        steps: [
          "1. Clone the repo: git clone https://github.com/RenzWay/webpack-starter.git",
          "2. Install: npm install",
          "3. Start dev server: npm run dev",
          "4. Edit code in src/ & see it live!",
        ],
        disclaimer:
          "This is not an official Webpack project. Made by community for learning purposes.",
      },
    };

    return TEXTS[this.lang];
  }

  async renderPage() {
    const app = this.render();
    const content = this.content;
    content.innerHTML = app;

    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        const selectedLang = e.target.value;
        if (this.lang !== selectedLang) {
          this.lang = selectedLang;
          sessionStorage.setItem("lang", selectedLang);
          this.renderPage();
        }
      });
    }
  }
}
