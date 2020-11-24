<template>
  <div class="cart">
    <div class="product">
      <div class="product-image">
        <img
          class="w-100"
          :src="`/assets/images/products/${product.image}`"
          alt=""
        />
      </div>
      <div class="product-info">
        <span class="name text-gray d-block font-15px mt-1">
          {{ product.name }}</span
        >
        <span
          class="shipping text-secondary font-15px d-block"
          style="min-height: 27px"
        >
          {{ product.shippingMethod == 1 ? "Ücretsiz Teslimat" : " " }}
        </span>
        <div class="price text-black font-16px">{{ product.price }} TL</div>
      </div>
      <div class="product-action mt-2">
        <span
          href=""
          class="btn w-100 btn-primary-outline text-primary"
          @click="pushToBasket(product)"
          >Sepete Ekle</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'cart',
  props: {
    product: {
      type: Object,
      default: Object,
    },
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions({
      setProductBasket: 'setProductBasket',
    }),
    pushToBasket(product) {
      this.setProductBasket(product);
    },
  },
};
</script>
