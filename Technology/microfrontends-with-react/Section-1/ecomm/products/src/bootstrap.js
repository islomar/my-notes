import faker from 'faker';

let products = '';

for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>Name: ${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;