<template>
  <ul class="breadcrumb bg-white mt-10px mb-0 p-0">
    <li class="d-flex align-items-center">
      <span class="text-gray pr-2">Çiçeksepeti Market</span>
      <img
        src="../../src/assets/images/icon/right-arrow.svg"
        class="pl-1 pr-2"
        alt="Breadcrumb Arrow"
      />
    </li>
    <li class="d-flex align-items-center">
      <a class="text-gray" href="#">
        <span class="text-gray pr-1">İstanbul</span>
        <img
          src="../../src/assets/images/icon/right-arrow.svg"
          class="pl-1 pr-2"
          alt="Breadcrumb Arrow"
        />
      </a>
    </li>
    <li>
      <a href="">
        <span class="text-secondary">CiceksepetiBreadCrumb</span>
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'breadcrumb',
  data() {
    return {};
  },
};
</script>
