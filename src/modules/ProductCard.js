export default class ProductCard {
    constructor({
        id,
        name,
        description,
        price,
        image
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.html = '';
    }

    getHTML() {
        this.html = !this.html ? 
            `<div class="card" data-id=${this.id}>
            <img src=${this.image} alt="image" class="card-image"/>
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${this.name}</h3>
                </div>
                <!-- /.card-heading -->
                <div class="card-info">
                    <div class="ingredients">
                        ${this.description}
                    </div>
                </div>
                <!-- /.card-info -->
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart" data-id=${this.id}>
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${this.price} ₽</strong>
                </div>
            </div>
        </div>` 
        : this.html;
        return this.html;
    }
}