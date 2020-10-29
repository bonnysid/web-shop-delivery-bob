export default class CardRestaraunt {
    constructor ({
        name = "Тануки",
        time_of_delivery = 60,
        stars = 4.3,
        price = 1200,
        kitchen = "Суши, роллы",
        image = "img/tanuki/preview.jpg",
        products = "tanuki.json"
      }) {
        this.name = name;
        this.time_of_delivery = time_of_delivery;
        this.stars = stars;
        this.price = price;
        this.kitchen = kitchen;
        this.image = image;
        this.products = products;
        this.html = 0;
    }

    getHTML()  {
        this.html = !this.html ? this.html = `
        <div href="restaurant.html" class="card card-restaurant">
            <img src=${this.image} data-products=${this.products} alt="image" class="card-image"/>
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${this.name}</h3>
                    <span class="card-tag tag">${this.time_of_delivery}</span>
                </div>
                <div class="card-info">
                    <div class="rating">
                        ${this.stars}
                    </div>
                    <div class="price">От ${this.price.toLocaleString()} ₽</div>
                    <div class="category">${this.kitchen}</div>
                </div>
            </div>
        </div>
        ` : this.html

        return this.html;
    }

    getBlock() {
        const block = document.createElement('a');
        block.classList.add('card');
        block.classList.add('card-restaurant');
        block.href = 'restaurant.html';
        block.innerHTML = this.getHTML();
        return block;
    }
}
