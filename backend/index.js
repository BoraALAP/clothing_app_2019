import { getHTML, findProducts } from "./lib/scraper";

async function go() {
  findProducts(await getHTML("https://ca.icebreaker.com/en/mens"));
}

go();
