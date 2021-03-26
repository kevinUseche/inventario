const table = document.querySelector('#table');

/* new product */
const mark = document.querySelector('#marca');
const model = document.querySelector('#modelo');
const color = document.querySelector('#color');
const price = document.querySelector('#precio');
const stock = document.querySelector('#cantidad');

/* update product */
const markUpdate = document.querySelector('#marca-mod');
const modelUpdate = document.querySelector('#model-mod');
const colorUpdate = document.querySelector('#color-mod');
const priceUpdate = document.querySelector('#price-mod');
const stockUpdate = document.querySelector('#stock-mod');

/* sell */
const idSell = document.querySelector('#id-sell');
const countSell = document.querySelector('#count-sell');

/* Events */
document.querySelector('#new').addEventListener('click', (e)=> {
    e.preventDefault();
    inventory.addProduct(
        mark.value,
        model.value,
        color.value,
        price.value,
        stock.value
    );
    updateStock();
});

/* Event data load */
let product;
document.querySelector('#id-mod').addEventListener('change', (e)=> {
    product = inventory.inventory.find(product => product.id == e.target.value);
    markUpdate.value = product.mark;
    modelUpdate.value = product.model;
    colorUpdate.value = product.color;
    priceUpdate.value = product.price;
    stockUpdate.value = product.stock;
});

/* Event update */
document.querySelector('#update').addEventListener('click', ()=> {
    inventory.update(
        product,
        markUpdate.value,
        modelUpdate.value,
        colorUpdate.value,
        priceUpdate.value,
        stockUpdate.value,
    );
    updateStock();
});

/* Event sell */
document.querySelector('#sell').addEventListener('click', ()=> {
    if(inventory.sell(idSell.value,countSell.value)){
        alert('vendido');
        updateStock();
    }else{
        alert('producto no encontrado o la demanda es mayor al stock');
    }
});


function updateStock(){
    let record;
    table.innerHTML = ` <tr>
                            <th>Id</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Color</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>`;
    inventory.inventory.forEach((product) => {
        record = document.createElement('tr');
        record.innerHTML = `<th>${product.id}</th>
                            <th>${product.mark}</th>
                            <th>${product.model}</th>
                            <th>${product.color}</th>
                            <th>${product.price}</th>
                            <th>${product.stock}</th>`;
        table.appendChild(record);
    });
}

updateStock(); 

