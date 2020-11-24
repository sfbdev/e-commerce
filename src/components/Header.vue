<template>
  <div class="header w-100 align-items-center justify-content-center">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="" />
    </div>
    <div class="search position-relative">
      <img src="@/assets/images/icon/search.svg" alt="">
      <input class="radius-circle w-100 font-15px" type="text" placeholder="Ürün Ara" />
      <a class="btn bg-secondary text-white position-absolute btn-search" href="">Ara</a>
    </div>

    <div class="basket d-flex justify-content-end">
      <a href="" class="btn btn-primary">
        <img src="@/assets/images/icon/shop.svg" alt="" />
        <span>Sepetim</span>
        <span>2</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
