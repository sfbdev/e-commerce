<template>
  <div class="product-list">
    <app-cart :product="filteredProducts" v-for="(product, index) in filteredProducts" :key="index"/>
    
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

    filteredProducts(){
      const filterProducts = this.allProducts.filter(product => {
        return product.categoryId.some(category => {
          return category == this.activeCategory.id
        })
      })

      return filterProducts
    }
  },
};
</script>
