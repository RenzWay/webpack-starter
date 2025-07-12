export default class HomePage {
  constructor() {
    this.lang = sessionStorage.getItem("lang") || "en";
  }

  getTexts() {
    const TEXTS = {
      id: {
        title: "Webpack Starter",
        subtitle:
          "Template Webpack modern & minimalis dengan dukungan routing SPA dan SASS.",
        visitGitHub: "🔗 Kunjungi GitHub",
        provided: "Apa yang sudah Disediakan?",
        features: [
          "✅ Webpack 5 + Babel",
          "⚙️ Mode Development & Production",
          "🔥 Hot Module Replacement (HMR)",
          "🎨 Dukungan CSS & SASS asset loader",
          "🧭 Routing SPA (Single Page Application)",
          "🧹 CleanWebpackPlugin",
          "📄 HTML otomatis via HtmlWebpackPlugin",
        ],
        routerTitle: "Cara Menggunakan Router SPA",
        toUse: [
          "1. Buat beberapa halaman di folder `pages`.",
          "2. Import halaman tersebut ke dalam `router.js`.",
          "3. Gunakan URL hash (contoh: #/) untuk navigasi antar halaman.",
          "4. Coba pindah-pindah halaman tanpa reload penuh!",
          "5. Tenang saja — menggunakan ( #/ ) tidak akan menyebabkan error.",
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
          "A modern & minimal Webpack template with SPA routing and SASS support.",
        visitGitHub: "🔗 Visit GitHub",
        provided: "What's Included?",
        features: [
          "✅ Webpack 5 + Babel",
          "⚙️ Development & Production Modes",
          "🔥 Hot Module Replacement (HMR)",
          "🎨 CSS & SASS asset loader support",
          "🧭 SPA (Single Page Application) Routing",
          "🧹 CleanWebpackPlugin",
          "📄 Auto HTML via HtmlWebpackPlugin",
        ],
        routerTitle: "How to Use the SPA Router",
        toUse: [
          "1. Create pages inside the `pages` folder.",
          "2. Import those pages into `router.js`.",
          "3. Use URL hash (e.g., #/) to navigate between pages.",
          "4. Try switching pages without full reload!",
          "5. Don't worry — using ( #/ ) won't cause any errors.",
        ],

        usageTitle: "How to Use",
        steps: [
          "1. Clone the repo: git clone https://github.com/RenzWay/webpack-starter.git",
          "2. Remove Remote: git remote remove origin",
          "3. Install: npm install",
          "4. Start dev server: npm run dev",
          "5. Edit code in src/ & see it live!",
        ],
        disclaimer:
          "This is not an official Webpack project. Made by community for learning purposes.",
      },
    };

    return TEXTS[this.lang];
  }

  async render() {
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

        <section class="main-home" role="main">
            <section class="features">
                <div class="container">
                    <h2>${t.provided}</h2>
                    <ul>
                    ${t.features.map((item) => `\n<li>${item}</li>`).join("")}
                    </ul>
                </div>
            </section>

            <section class="usage">
                <div class="container">
                    <h2>${t.usageTitle}</h2>
                        <div class="steps">
                        ${t.steps
                          .map(
                            (step) =>
                              `\n            <div class="step"><code>${step}</code></div>`
                          )
                          .join("")}
                        </div>
                    </div>
                </section>
            </section>

            <section class="routing-section">
                <section class="container">
                    <header>
                        <h1>${t.routerTitle}</h1>
                    </header>
                    <ul>
                        ${t.toUse
                          .map((route) => `\n<li><code>${route}</code></li>`)
                          .join("")}
                    </ul>
                </section>
            </section>

      <footer>
        <p>© 2025 Webpack Starter by: <a href="https://github.com/RenzWay" target="_blank">RenzWay</a></p>
        <p class="disclaimer">${t.disclaimer}</p>
      </footer>
    `;
  }

  afterRender() {
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        const selectedLang = e.target.value;
        if (this.lang !== selectedLang) {
          this.lang = selectedLang;
          sessionStorage.setItem("lang", selectedLang);
          this.render(); // render ulang halaman
          this.afterRender(); // re-attach event listener
          location.reload();
        }
      });
    }
  }
}
