import axios from "axios";
import cheerio from "cheerio"

export async function getHTML(url) {
  try{
    const { data: body } = await axios.get(url);
    return body
  } catch (error) {
    console.error(error);
  }
}

export async function findProducts(html){
    const $ = cheerio.load(html)
    const productTile = $(".product-tile")
    console.log(productTile);
    

    let list = []
    productTile.each( (i, elem) => {
      console.log(i, elem);
      
    })
}
