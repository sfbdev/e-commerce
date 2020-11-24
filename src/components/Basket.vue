<template>
  <div class="basket-modal">
    <span class="close" @click="basket.open = false">&times;</span>
    test
  </div>
</template>

<script>
import { mapState } from "vuex";
("basket");

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
