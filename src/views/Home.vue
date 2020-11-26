<template>
  <div class="home">
    <div class="header-wrapper sticky">
      <div class="container">
        <div class="row">
          <app-header />
        </div>
      </div>
    </div>
    <div class="content-wrapper">
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
      <app-footer />
      <app-notification v-if="openNotification" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapState({
      openNotification: (state) => state.openNotification,
    }),
  },
};
</script>
