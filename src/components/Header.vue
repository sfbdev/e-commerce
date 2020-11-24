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
      />
      <a
        class="btn bg-secondary text-white position-absolute btn-search"
        href=""
        >Ara</a
      >
    </div>

    <div class="basket d-flex justify-content-end">
      <a
        href="#"
        class="btn d-flex align-items-center bg-primary btn-basket text-white position-relative"
      >
        <img src="@/assets/images/icon/shop.svg" alt="Shop" />
        <span class="text ml-1">Sepetim</span>
        <span class="count text-white">{{ basket.count }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      basket: (state) => state.basket,
    }),
  },
};
</script>
