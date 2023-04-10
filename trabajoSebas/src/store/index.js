import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    toggleFooter: true,
    toggleHeader: true,
    toggleSidebar: true,
    destination: "/",
    nombreCompleto: "",
    userData: {
      idUser: 49,
      nick: "cyz",
      email: "",
      role: "",
      lastSuccesfullAccess: "",
      jwt: "", //  jwt='' => signed: false,
      usuarioDetalle: null,
    },
    errorMsg: "",
  },
  getters: {
    getjwt(state) {
      return state.userData.jwt;
    },
    getIdUser(state) {
      return state.userData.idUser;
    },
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data;
      state.userData.role =
        data.role != undefined ? data.role.toLowerCase() : "";
      state.userData.jwt = data.jwt;
      state.userData.idUser = data.idUser;
      /*state.userData.idUser = data.idUser;
        state.userData.nick = data.nick;
        state.userData.email = data.email;
        state.userData.role = data.role;
        state.userData.lastSuccesfullAccess = data.lastSuccesfullAccess;
        state.userData.jwt = data.jwt;
        state.userData.usuarioDetalle = data.usuarioDetalle;*/
    },
    setDestination(state, destination) {
      state.destination = destination;
    },
    setNombreCompleto(state, nombreCompleto) {
      state.nombreCompleto = nombreCompleto;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});

export default store;
