const home = document.getElementById('home');
const contacts = document.getElementById('contacts');
const products = document.getElementById('products');
const services = document.getElementById('services');
const about = document.getElementById('about');

home.addEventListener('click',function(){
    home.classList.add('active');
    contacts.classList.remove('active');
    products.classList.remove('active');
    services.classList.remove('active');
    about.classList.remove('active');
});
contacts.addEventListener('click',function(){
    contacts.classList.add('active');   
    
    home.classList.remove('active');
    products.classList.remove('active');
    services.classList.remove('active');
    about.classList.remove('active');
});
products.addEventListener('click',function(){
    products.classList.add('active');
    
    contacts.classList.remove('active');
    home.classList.remove('active');
    services.classList.remove('active');    
    about.classList.remove('active');
});
services.addEventListener('click',function(){
    services.classList.add('active');
    
    contacts.classList.remove('active');
    products.classList.remove('active');
    home.classList.remove('active');
    about.classList.remove('active');
});
about.addEventListener('click',function(){
    about.classList.add('active');
    
    contacts.classList.remove('active');
    products.classList.remove('active');
    services.classList.remove('active');
    home.classList.remove('active');
});