import { mount as productsMount } from 'products/ProductsIndex';
import {mount as cartsMount} from 'cart/CartShow';

console.log('Container is running!');

productsMount(document.querySelector('#my-products'));
cartsMount(document.querySelector('#my-cart'));