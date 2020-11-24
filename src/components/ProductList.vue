<template>
  <div class="product-list d-flex flex-column p-0">
    <div class="product-list-title d-flex align-items-center col-12">
      <img src="@/assets/images/icon/category.svg" alt="Category" />
      <span class="ml-2 font-20px text-light">{{ activeCategory.name }}</span>
    </div>
    <div class="product-list-content">
      <template v-for="(product, index) in filteredProducts">
        <app-cart :product="product" :key="index" />
      </template>
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
      activeCategory: (state) => state.activeCategory,
      allProducts: (state) => state.products,
    }),

    filteredProducts() {
      const filterProducts = this.allProducts.filter((product) => product.categoryId.some(
        (category) => category === this.activeCategory.id,
      ));

      return filterProducts;
    },
  },
};
</script>
