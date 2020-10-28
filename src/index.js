import DataRequests from './services/DataRequests';
import RestaurantCard from './modules/CardRestaraunt';
import CardRestaraunt from './modules/CardRestaraunt';

window.addEventListener('DOMContentLoaded', () => {
    const restaurantBody = document.querySelector('.cards-restaurants');
    DataRequests.getData('http://localhost:3000/partners')
    .then(data => {
        data.forEach(({name, time_of_delivery, stars, price, kitchen, image, products}) => {
            restaurantBody.insertAdjacentHTML('beforeend', new CardRestaraunt({name, time_of_delivery, stars, price, kitchen, image, products}).getHTML());
        });
    });
});