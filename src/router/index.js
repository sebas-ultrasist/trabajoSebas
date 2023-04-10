import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import axios from "axios";

import PageNotFoundView from "@/views/PageNotFoundView";
import HomeView from "@/views/HomeView";
import EditImagesView from "@/views/EditImagesView";
import SubirIneView from "@/views/SubirIneView";
import FormasDePagoView from "@/views/FormasDePagoView";
import DatosGeneralesView from "@/views/DatosGeneralesView";
import AnuncioView from "@/views/AnuncioView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { allowedRoles: ["admin", "regular"] },
  },
  {
    path: "/ui/ine",
    name: "ine",
    component: SubirIneView,
  },
  {
    path: "/ui/pago",
    name: "pago",
    component: FormasDePagoView,
  },
  {
    path: "/ui/edit",
    name: "edit",
    component: EditImagesView,
  },
  {
    path: "/ui/anuncio",
    name: "Anuncio",
    component:AnuncioView ,
  },
  {
    path: "/ui/datos",
    name: "datos",
    component:DatosGeneralesView,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

function checaJwt() {
  //  var jwt = store.getters.getjwt;
  var jwt = store.state.userData.jwt;
  if (jwt && jwt !== undefined && jwt.length > 0) {
    const jwtPayload = parseJwt(jwt);
    //jwtPayload.exp=1625505833-28*60;
    let now = new Date();
    let limite = new Date(jwtPayload.creation);
    limite.setMinutes(limite.getMinutes() + 30);
    if (now > limite) {
      store.commit("setUserData", {
        userData: {
          idUser: 0,
          nick: "cyz",
          email: "",
          role: "",
          lastSuccesfullAccess: "",
          jwt: "", //  jwt='' => signed: false,
          usuarioDetalle: null,
        },
      });
      store.commit("setDestination", "/");
    } else {
      //const timeToExpire =  jwtPayload.exp - (Date.now()/1000);
      //console.log('Tiempo para que expire:' + timeToExpire);
    }
  }
}

router.beforeEach((to, from, next) => {
  axios.defaults.headers.common = { "X-CSRFToken": store.state.userData.jwt };
  axios.defaults.headers.common = { jwt: store.state.userData.jwt };
  checaJwt();
  //TODO: VALIDAR  EL JWT porque no tiene el valor de expire
  if (to.matched.some((record) => record.meta.allowedRoles)) {
    // *** El recurso SI requiere autenticación ya que pide ciertos roles
    // NO estás autenticado actualmente:
    if (
      store.state.userData.jwt === "" ||
      store.state.userData.jwt == undefined
    ) {
      store.commit("setDestination", to.fullPath);
      router.push("/ui/producto");
      return;
    }
    // SI estoy autenticado actualmente, asi que solo voy a checar si mi rol es el adecuado:
    if (
      to.matched.some(
        (ok) => !ok.meta.allowedRoles.includes(store.state.userData.role)
      )
    ) {
      router.push("/ui/forbidden"); // no tengo el rol asociado a esa interfaz
      return;
    }
  }
  next(); // *** El recurso NO requiere autenticación
});

export default router;
