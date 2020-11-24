import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart.vue';
import Categories from './components/Categories.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Basket from './components/Basket.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import ProductList from './components/ProductList.vue';
import MobileApps from './components/MobileApps.vue';
import PageTitle from './components/PageTitle.vue';
import Thumbnails from './components/Thumbnails.vue';

Vue.component('app-cart', Cart);
Vue.component('app-categories', Categories);
Vue.component('app-footer', Footer);
Vue.component('app-header', Header);
Vue.component('app-breadcrumb', Breadcrumb);
Vue.component('app-basket', Basket);
Vue.component('app-mobileApps', MobileApps);
Vue.component('app-productList', ProductList);
Vue.component('app-pageTitle', PageTitle);
Vue.component('app-thumbnails', Thumbnails);

Vue.config.productionTip = false;

require('./assets/scss/main.scss');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
