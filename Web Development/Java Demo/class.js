class Product{
    constructor(itemName, price, discount, productCode){
        this.itemName= itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
};

let Laptop = new Product('Xiaomi Laptop', 63200, 5000, 'AE11');
console.log(Laptop);

const Product1 = class{
    constructor(itemName, price, discount, productCode){
        this.itemName= itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    // getter function
    get discountValue(){
        return this.discount;
    }
    set setdiscountVal(value)
    {
        this.discount = value;
    }
    discountValue(){
        return this.discount*this.price/100;
    }
}

let chair = new Product1('chair', 499, 15,'C10');
console.log(chair);

console.log(chair.discountValue());