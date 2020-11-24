<template>
  <div class="categories p-0">
    <div class="categories-title d-flex align-items-center mt-20px">
      <img src="@/assets/images/icon/categories.svg" alt="" />
      <span class="title font-24px text-primary pl-1">Kategoriler</span>
    </div>
    <div class="categories-content">
      <template v-for="(category, index) in categories">
        <div class="category" :class="[{'active': category.id == activeCategory.id}]" :key="index"
        @click="pushActiveCategory(category)">
          <div
            class="category-item d-flex align-items-center justify-content-center"
          >
            <span class="font-18px text-light">{{ category.name }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      categories: (state) => state.categories,
      activeCategory: (state) => state.activeCategory,

    }),
  },

  methods: {
    ...mapActions({
      setActiveCategory: "setActiveCategory"
    }),

    pushActiveCategory(category){
      this.setActiveCategory(category);
    }
  },
};
</script>
