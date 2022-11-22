async function fetchProducts() {
    try{
        await fetch('http://localhost:5000/api/products')
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        createProducts(data)
        })
    }
  catch(e){
    console.log(e)
  }
}
fetchProducts()
const createProducts = (arr)=>{
    const section = document.getElementById('section')
    arr.forEach((item, i) => {
        let div = document.createElement('div')
        div.innerText = item.name + ' ' + item.price
        section.appendChild(div)
    });
}