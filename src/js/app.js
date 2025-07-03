export default class App {
  constructor({ content }) {
    this.content = content;
  }

  render() {
    return `
    <header class="hero">
      <div class="container">
        <div class="flex justify-center">
            <img width="10%" src="./public/webpack.svg" alt="" type="image/svg+xml">
            <h1>Webpack Starter</h1>
        </div>
        <p>Template Webpack modern & minimalis untuk mulai ngoding tanpa ribet konfigurasi.</p>
        <a href="https://github.com/RenzWay/webpack-starter" target="_blank" class="btn-primary">
          🔗 Kunjungi GitHub
        </a>
      </div>
    </header>

    <section class="features">
      <div class="container">
        <h2>Apa yang Disediakan?</h2>
        <ul>
          <li>✅ Webpack 5 + Babel</li>
          <li>⚙️ Mode Development & Production</li>
          <li>🔥 Hot Module Replacement (HMR)</li>
          <li>🎨 Dukungan CSS dan asset loader</li>
          <li>🧹 CleanWebpackPlugin</li>
          <li>📄 HTML otomatis via HtmlWebpackPlugin</li>
        </ul>
      </div>
    </section>

    <section class="usage">
      <div class="container">
        <h2>Cara Pakai</h2>
        <div class="steps">
          <div class="step">
            <strong>1.</strong> Clone repo:
            <code>git clone https://github.com/RenzWay/webpack-starter.git</code>
          </div>
          <div class="step">
            <strong>2.</strong> Install:
            <code>npm install</code>
          </div>
          <div class="step">
            <strong>3.</strong> Mulai dev server:
            <code>npm run dev</code>
          </div>
          <div class="step">
            <strong>4.</strong> Edit kode di <code>src/</code> & lihat hasilnya!
          </div>
        </div>
      </div>
    </section>
    `;
  }

  async renderPage() {
    const app = this.render();
    const content = this.content;

    content.innerHTML = app;
  }
}
