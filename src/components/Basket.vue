<template>
  <div class="basket-modal">
    <span class="close position-absolute" @click="basket.open = false"
      >&times;</span
    >
    <div v-if="basket.products.length === 0">Sepetinizde Ürün Yok</div>
    <template v-else>
      <div
        class="product d-flex"
        v-for="(product, index) in basket.products"
        :key="index"
      >
        <div class="left w-25 pr-2">
          <div class="product-image">
            <img
              :src="`/assets/images/products/${product.image}`"
              class="w-100"
              alt=""
            />
          </div>
        </div>
        <div class="right d-flex flex-column justify-content-between pl-2">
          <div class="product-name">
            <span>{{ product.name }}</span>
          </div>
          <div class="product-price d-flex justify-content-between">
            <span>{{ product.price }}</span>
            <span>Adet: {{ product.count }}</span>
          </div>
        </div>
      </div>
      <div class="total d-flex justify-content-between mt-2">
        <div class="left">
          <span class="clear-basket-button" @click="clearBasket()">Sepeti Boşalt</span>
        </div>
        <div class="right d-flex flex-column align-items-end">
          <span>Toplam Ürün: {{ basket.products.length }} Adet</span>
          <span>Toplam: {{ basket.amount }} TL</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'basket',
  data() {
    return {};
  },

  computed: {
    ...mapState({
      basket: (state) => state.basket,
    }),
  },
  methods: {
    ...mapActions({
      deleteBasket: 'deleteBasket',
    }),

    clearBasket() {
      this.deleteBasket();
    },
  },
};
</script>
