import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeCategory: {
      id: 1,
      name: 'Tüm Kategoriler',
    },
    basket: [{
      count: 0,
      products: [],
    }],
    categories: [{
        id: 1,
        name: "Tüm Kategoriler",
      },
      {
        id: 2,
        name: "Elektronik",
      },
      {
        id: 3,
        name: "Ev ve Yaşam",
      },
      {
        id: 4,
        name: "Evcil Hayvan",
      },
      {
        id: 5,
        name: "Kitap",
      },
      {
        id: 6,
        name: "Oyuncak",
      },
      {
        id: 7,
        name: "Spor",
      },
      {
        id: 8,
        name: "Çiçek (120)",
      },
      {
        id: 9,
        name: "Hediye",
      },
      {
        id: 10,
        name: "Moda,Aksesuar",
      },
      {
        id: 11,
        name: "Ofis,Kırtasiye",
      },
      {
        id: 12,
        name: "Parfüm",
      },
      {
        id: 13,
        name: "Kişisel Bakım",
      },
      {
        id: 14,
        name: "Petshop",
      },
    ],
    products: [{
        id: 1,
        categoryId: [1, 2, 4, 6],
        name: 'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
        image: 'product-1.png',
        shippingMethod: 1,
        price: '399,90'
      },
      {
        id: 2,
        categoryId: [1, 3, 5, 7],
        name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
        image: 'product-2.png',
        shippingMethod: 0,
        price: '145'
      },
      {
        id: 3,
        categoryId: [1, 14, 12],
        name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
        image: 'product-3.png',
        shippingMethod: 1,
        price: '249,90'
      },
      {
        id: 4,
        categoryId: [1, 11],
        name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
        image: 'product-4.png',
        shippingMethod: 0,
        price: '329,90'
      },
      {
        id: 5,
        categoryId: [1, 9],
        name: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
        image: 'product-5.png',
        shippingMethod: 1,
        price: '499,90'
      },
      {
        id: 6,
        categoryId: [1, 14],
        name: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...',
        image: 'product-6.png',
        shippingMethod: 1,
        price: '19,90'
      },
      {
        id: 7,
        categoryId: [1, 10, 7, 6],
        name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
        image: 'product-7.png',
        shippingMethod: 1,
        price: '89,90'
      },
      {
        id: 8,
        categoryId: [1, 5, 7],
        name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
        image: 'product-8.png',
        shippingMethod: 1,
        price: '29,90'
      },
      {
        id: 9,
        categoryId: [1, 8, 9],
        name: 'Özel Tatlar Çikolata Kutusu 300 gr',
        image: 'product-9.png',
        shippingMethod: 1,
        price: '59,90'
      },
      {
        id: 10,
        categoryId: [1, 2, 3],
        name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
        image: 'product-10.png',
        shippingMethod: 0,
        price: '199,90'
      },
      {
        id: 11,
        categoryId: [1, 5, 6, 11],
        name: 'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
        image: 'product-11.png',
        shippingMethod: 0,
        price: '145'
      },
      {
        id: 12,
        categoryId: [1, 12, 13],
        name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
        image: 'product-5.png',
        shippingMethod: 0,
        price: '145'
      },
      {
        id: 13,
        categoryId: [1, 14],
        name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
        image: 'product-3.png',
        shippingMethod: 1,
        price: '249,90'
      },
      {
        id: 14,
        categoryId: [1, 7, 6, 4, 2],
        name: 'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
        image: 'product-1.png',
        shippingMethod: 1,
        price: '399,90'
      },
      {
        id: 15,
        categoryId: [1, 13],
        name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
        image: 'product-2.png',
        shippingMethod: 0,
        price: '145'
      },

      {
        id: 16,
        categoryId: [1, 11],
        name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
        image: 'product-7.png',
        shippingMethod: 1,
        price: '89,90'
      },
      {
        id: 17,
        categoryId: [1, 8, 9],
        name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
        image: 'product-4.png',
        shippingMethod: 0,
        price: '329,90'
      },
      {
        id: 18,
        categoryId: [1, 6, 7],
        name: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
        image: 'product-5.png',
        shippingMethod: 1,
        price: '499,90'
      },
      {
        id: 19,
        categoryId: [1, 5, 6],
        name: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...',
        image: 'product-6.png',
        shippingMethod: 1,
        price: '19,90'
      },

      {
        id: 20,
        categoryId: [1, 10],
        name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
        image: 'product-10.png',
        shippingMethod: 0,
        price: '199,90'
      },
      {
        id: 21,
        categoryId: [1, 12, 6, 7],
        name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
        image: 'product-8.png',
        shippingMethod: 1,
        price: '29,90'
      },
      {
        id: 22,
        categoryId: [1, 10],
        name: 'Özel Tatlar Çikolata Kutusu 300 gr',
        image: 'product-9.png',
        shippingMethod: 1,
        price: '59,90'
      },
    ]
  },
  mutations: {
    SET_ACTIVE_CATEGORY(state, category) {
      state.activeCategory = category;
    }
  },
  actions: {
    setActiveCategory({
      commit
    }, category) {
      commit('SET_ACTIVE_CATEGORY', category)
    }
  },
  modules: {},
});
