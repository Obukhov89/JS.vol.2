class ProductsList{
    constructor (container = '.products'){
        this.container= container;
        this.goods= []; //массив товаров 
        this._fetchProducts();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
}



const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (product,img='https://placehold.it/200x150')=>{
return `<div class = "product-item>"
            <img src="${img}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button class="by-btn">Купить</button>
            </div>`
};

const renderPage = list => {
 document.querySelector('.products').innerHTML=list.map(item=> renderProduct(item)).join('');
};

renderPage .products;

let list = new ProductsList();
list.render();
list.getSum();

class Basket{
    addgoods(){
        
    }
    removegoods(){
        
    }
    render(){
        
    }
}

class ElemBasket {render(){}}
