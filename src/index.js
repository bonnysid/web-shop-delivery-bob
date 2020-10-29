import DataRequests from './services/DataRequests';
import RestaurantCard from './modules/RestaurantCard';
import openCard from './modules/openCard';
import openMain from './modules/openMain';

window.addEventListener('DOMContentLoaded', () => {
    const restaurants = document.querySelector('.restaurants'),
          restaurantBody = restaurants.querySelector('.cards-restaurants');

    const menu = document.querySelector('.menu'),
          menuHeader = menu.querySelector('.section-heading'),
          menuBody = menu.querySelector('.cards-menu');

    const promo = document.querySelector('.container-promo');
    const logo = document.querySelector('.logo');
    const cards = [];

    logo.addEventListener('click', () => openMain({
        mainSection: restaurants, 
        showSections: [promo], 
        hiddenSections: [menu]
    }));

    openMain({
        mainSection: restaurants, 
        showSections: [promo], 
        hiddenSections: [menu],
    });

    if (!restaurants.hasAttribute('updated') || !restaurants.getAttribute('updated')) {
        DataRequests.getData('./db/partners.json')
        .then(data => {
            data.forEach(({name, time_of_delivery, stars, price, kitchen, image, products}, i) => {
                cards.push(new RestaurantCard({name, time_of_delivery, stars, price, kitchen, image, products}));
                restaurantBody.insertAdjacentHTML('beforeend', cards[i].getHTML());
            });
        })
        .then(data => {
            restaurantBody.querySelectorAll('.card-restaurant').forEach(cardRestaraunt => {
                cardRestaraunt.addEventListener('click', (e) => openCard({
                    target: e.target,
                    mainSection: menu, 
                    sectionHeading: menuHeader,
                    sectionBody: menuBody,
                    card: cards.find(item => item.products === e.target.getAttribute('data-products')),
                }, restaurants, promo))
            });
        })
        restaurants.setAttribute('updated', true);
    }

});