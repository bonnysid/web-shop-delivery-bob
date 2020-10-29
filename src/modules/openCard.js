import DataRequests from '../services/DataRequests';
import ProductCard from './ProductCard';

const openCard = ({target, mainSection, sectionHeading, sectionBody, card, dbPath = './db/', hideClass = 'hide', data = 'data-products'}, ...hiddenItems) => {
    hiddenItems.forEach(item => item.classList.add(hideClass));
    mainSection.classList.remove(hideClass);

    DataRequests.getData(dbPath + target.getAttribute(data))
    .then(data => {
        if(sectionHeading.querySelector('.restaurant-title').innerText !== card.name) {
            sectionHeading.innerHTML = `
            <h2 class="section-title restaurant-title">${card.name}</h2>
            <div class="card-info">
                <div class="rating">
                    ${card.stars}
                </div>
                <div class="price">От ${card.price} ₽</div>
                <div class="category">${card.kitchen}</div>
            </div>
            `;
    
            
            sectionBody.innerHTML = '';
            data.forEach(product => {
                sectionBody.insertAdjacentHTML('beforeend', new ProductCard({...product}).getHTML())
            });
        }
    })
    
}  

export default openCard;