<template>
  <div class="product-list d-flex flex-column">
    <div class="product-list-title d-flex align-items-center">
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
import { mapState } from "vuex";
name: "product-list";
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
      const filterProducts = this.allProducts.filter((product) => {
        return product.categoryId.some((category) => {
          return category == this.activeCategory.id;
        });
      });

      return filterProducts;
    },
  },
};
</script>
