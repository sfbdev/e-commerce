<template>
  <div class="header w-100 align-items-center justify-content-center">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>
    <div class="search position-relative d-none d-lg-block">
      <img src="@/assets/images/icon/search.svg" alt="" />
      <input
        class="radius-circle w-100 font-15px"
        type="text"
        placeholder="Ürün Ara"
        v-model="searchQuery"
      />
      <a
        class="btn bg-secondary text-white position-absolute btn-search"
        href=""
        >Ara</a
      >
    </div>

    <div class="basket d-flex justify-content-end position-relative">
      <a
        href="#"
        class="btn d-flex align-items-center bg-primary btn-basket text-white position-relative"
        @click="openBasket()"
      >
        <img src="@/assets/images/icon/shop.svg" alt="Shop" />
        <span class="text ml-1">Sepetim</span>
        <span class="count text-white">{{ basket.count }}</span>
      </a>
      <div class="amount-prize d-flex flex-column">
        <div class="text-white">
          <img
            src="../../src/assets/images/icon/thunder.svg"
            class="mr-2"
            alt="Thunder"
          />
          <span class="font-12px" v-if="basket.amount < 500"
            >{{ basketPrize - basket.amount }} TL değerinde daha ürün ekleyin
            kargo bedava</span
          >
          <span class="font-16px" v-else>Kargonuz Bedava!</span>
        </div>
        <div class="amount-bar w-100">
          <div class="amount-bar-done" :class="amountBarStyle"></div>
        </div>
      </div>
    </div>

    <app-basket v-if="basket.open"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      searchQuery: "",
    };
  },

  computed: {
    ...mapState({
      basket: (state) => state.basket,
      basketPrize: (state) => state.basketPrize,
    }),

    amountBarStyle() {
      return this.basket.amount <= 500
        ? "w-" + Math.floor(this.basket.amount / 5)
        : "w-100";
    },
  },

  methods: {
    ...mapActions({
      setSearchQuery: "setSearchQuery",
      setBasketStatus: "setBasketStatus",
    }),

    openBasket() {
      this.setBasketStatus(!this.basket.open);
    },
  },
};
</script>
