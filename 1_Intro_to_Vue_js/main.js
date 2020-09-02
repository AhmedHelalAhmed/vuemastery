Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `
  <div class="product">
  <div class="product-image">
    <img v-bind:src="image" :alt="altText" />
  </div>
  <div class="product-info">
    <h1>{{ title }}</h1>
    <!-- this called expression -->
    <p>{{description}}</p>
    <a :href="link" target="_blank">More products like this</a>

    <p v-if="inventory>10">In Stock</p>
    <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
    <p :class="{ outOfStock: !inStock }" v-else>Out of Stock</p>
    <span v-show="onSale">On Sale!</span>
    <p v-if="inStock">In Stock</p>
    <p :class="{ outOfStock: !inStock }" v-else>Out of Stock</p>
    <p>{{ sale }}</p>

    <p>User is premium: {{ premium }} </p>
    <p>Shipping: {{ shipping }} </p>

    <!--
              V-show only toggles visibility, it does not insert or remove the element from the DOM.
               display = none
          -->
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>

    <div v-for="(variant,index) in variants" :key="variant.variantColor">
      <p @mouseover="updateProduct(index)">
        {{variant.variantColor}}
      </p>
    </div>

    <ul>
      <li v-for="size in sizes">{{ size }}</li>
    </ul>

    <button
      v-on:click="addToCart"
      :class="{ disabledButton: !inStock}"
      :disabled="!inStock"
    >
      Add to Cart
    </button>



    <button @click="removeFromCart">Remove from Cart</button>

    <div
      v-for="(variant,index) in variants"
      :key="variant.index"
      class="color-box"
      :style="{ backgroundColor: variant.variantColor }"
      @mouseover="updateProduct(index)"
    ></div>
  </div>
</div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Sockets",
      onSale: true,
      description: "A pair of warm, fuzzy socks",
      selectedVariant: 0,
      altText: "A pair of socks",
      link:
        "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
      inventory: 100,
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
    };
  },
  methods: {
    addToCart: function () {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
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
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " are on sale!";
      }
      return this.brand + " " + this.product + " are not on sale";
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
