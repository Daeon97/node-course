// Object property shorthand

const name = 'Engels'
const userAge = 24

const user = {
    name,
    age: userAge,
    location: 'Enugu'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const { label: productLable, stock, rating = 5 } = product
// console.log(productLable)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label = '', stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)