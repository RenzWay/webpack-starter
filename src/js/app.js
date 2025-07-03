export default class App {
  constructor({ content }) {
    this.content = content;
  }

  render() {
    return `
    <section class="starter-container">
      <h1>Webpack Starter Project</h1>
      <p>Starter project untuk <b>Webpack</b> yang siap digunakan. Cocok untuk belajar, eksperimen, atau memulai proyek baru dengan setup modern.</p>
      <h3>Cara Pakai</h3>
      <ol>
        <li>Clone repository ini dari GitHub</li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Jalankan development server: <code>npm run start</code></li>
        <li>Edit kode di <code>src/js/</code> dan lihat hasilnya secara live!</li>
      </ol>
      <a class="github-link" href="https://github.com/username/webpack-starter" target="_blank">Lihat di GitHub</a>
      <p style="margin-top:1.5em;color:#888;font-size:0.95em;">Cukup fork atau clone, lalu langsung pakai!</p>
    </section>
    `;
  }

  async renderPage() {
    const app = this.render();
    const content = this.content;

    content.innerHTML = app;
  }
}
