var app = new Vue({
    el: '#app',
    data: {
        product: 'Sockets',
        description: 'A pair of warm, fuzzy socks',
        image: './assets/vmSocks-green.jpg',
        altText: 'A pair of socks',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inventory: 0,
        inStock: true,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green.jpg'

            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.jpg'
            },
        ],
        sizes: ["small", "medium", "large"],
        cart: 0,


    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        }
    }

});