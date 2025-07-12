import { router } from "../router/router";
import getActivePathname from "./url-parser";

export default class App {
  constructor({ content }) {
    this.content = content;
  }

  async renderPage() {
    const url = getActivePathname();
    const rute = router[url];
    const content = this.content;

    const page = new rute();

    content.innerHTML = await page.render();
    await page.afterRender();
  }
}
