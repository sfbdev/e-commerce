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
        <app-productList/>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "../components/Categories.vue";
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
