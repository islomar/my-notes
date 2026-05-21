import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>Name: ${name}</div>`;
    }

    el.innerHTML = products;
    //ReactDOM.render(<App />, el); //alternative in React
}

/**
 * Context/Situation #1
 * 
 * We are running this file in development in isolation,
 * We are using our local index.html file
 * which definilitey has an elment with an id of 'dev-products'
 * we want to immediately render our app into that element
 **/
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    //Assuming our container doesn't have an element with id of 'dev-products'
    if (el) {
        // We are probably running in isolation
        mount(el);
    }
}

/**
 * Context/Situation #2
 * 
 * We are running this file in development or production,
 * through the CONTAINER app
 * NO guarantee that an element with an id of 'dev-products'
 * we do not want try to immediately render app
 * 
 **/
export { mount }; //this way, it's up to the CONTAINER app to decide when to render our app, and where to render it.