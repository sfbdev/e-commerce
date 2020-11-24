<template>
  <div class="cart">
    <div class="product">
      <div class="product-image">
        <img src="@/assets/images/products/product-1.png" alt="">
      </div>
      <div class="product-info">
        <span class="name text-gray d-block font-15px mt-1"></span>
        <span class="shipping text-secondary font-15px">Ücretsiz Teslimat</span>
        <div class="price text-black font-16px">adas TL</div>
      </div>
      <div class="product-action mt-2">
        <a href="" class="btn w-100 btn-primary-outline text-primary">Sepete Ekle</a>
      </div>
    </div>
  </div>
</template>

<script>
props: ['product']
name: 'cart';
export default {
  data() {
    return {};
  },
};
</script>
