class Product{
    constructor(id,mark,model,color,price,stock){
        this.id = id;
        this.mark = mark;
        this.model = model;
        this.color = color;
        this.price = price;
        this.stock = stock;
    }
}

class Inventory{
    constructor(){
        if(localStorage.getItem('inventory') == null){
            localStorage.setItem('inventory', JSON.stringify([]));
            this.inventory = [];
        }else{
            this.inventory = JSON.parse(localStorage.getItem('inventory'));
        }
    }
    addProduct(mark,model,color,price,stock){
        let id = this.inventory.length+1;
        this.inventory.push(new Product(id,mark,model,color,price,stock));
        localStorage.setItem('inventory', JSON.stringify(this.inventory));
    }
    update(product,mark,model,color,price,stock){
        product.mark = mark;
        product.model = model;
        product.color = color;
        product.price = price;
        product.stock = stock;
        localStorage.setItem('inventory', JSON.stringify(this.inventory));
    }
    delete(){

    }
    sell(id,count){
        let product = this.inventory.find(product => product.id == id);
        if(product == undefined || product.stock < count){
            return false;
        }else{
            product.stock -= count;
            localStorage.setItem('inventory', JSON.stringify(this.inventory));
            return true;
        }
    }
}


const inventory = new Inventory();