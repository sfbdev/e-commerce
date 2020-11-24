<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <app-header />
      </div>
    </div>
    <app-pageTitle />
    <div class="container">
      <div class="row">
        <app-breadcrumb class="col-12" />
        <app-categories class="col-12" />
        <app-productList class="col-12" />
      </div>
    </div>
    <div class="border"></div>
    <div class="container">
      <div class="row">
        <app-thumbnails class="col-12" />
      </div>
    </div>
    <app-footer/>

  </div>
</template>

<script>
import Categories from "../components/Categories.vue";
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
