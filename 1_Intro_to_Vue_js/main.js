var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Sockets",
    description: "A pair of warm, fuzzy socks",
    selectedVariant: 0,
    altText: "A pair of socks",
    link:
      "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
    inventory: 100,
    inStock: true,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg",
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg",
        variantQuantity: 0,
      },
    ],
    sizes: ["small", "medium", "large"],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
  },
});
