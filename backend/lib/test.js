let list = [];
let finalList = []
let array = document.querySelectorAll(".product-tile")

array.forEach(item => {
    list.push(item)
})

list.map((item, i) => {
    finalList[i] = {
        id: item.getAttribute('id'),
        name: item.querySelector('.name a').textContent,
        img:item.querySelector('img').getAttribute('src'),
        price: parseInt(item.querySelector('.bfx-price').textContent.replace(/\D/g,'')),
        category: item.querySelector('.name a').getAttribute('onclick'),
        protection: parseInt(item.querySelector('.fabric-badge').textContent.replace(/\D/g,''))
    }
})

console.log(finalList);

