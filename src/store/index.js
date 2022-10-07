import { createStore } from "vuex";

function updateLocalStorage(carts) {
  localStorage.setItem('carts', JSON.stringify(carts))
}

export default createStore({
  state: {
    carts: []
  },
  getters: {
    productQty: (state) => (product) => {
      const item = state.carts.find(i => i.id === product.id)
      return (item) ? item.qty : null;
    },
  },
  mutations: {
    addToCart(state, product) {
      //Tim xem da ton tai san pham trong gio hang hay chua
      let item = state.carts.find(i => i.id == product.id)
      if (item) {//Ton tai thi them vao
        item.qty++;
      } else {//Chua thi tao moi
        state.carts.push({...product, qty: 1});
      }
      updateLocalStorage(state.carts)//Hoan thanh xong thi dua vao localStore tren may nguoi dung
    }
  },
  actions: {},
  modules: {}
});
