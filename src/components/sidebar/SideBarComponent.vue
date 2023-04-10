<template>
  <div class="sidebar d-flex flex-column flex-shrink-0" @mouseenter="abre" @mouseleave="cierra" :style="{ width: sidebarWidth }">
    <div class="m-auto sidebar2">
      <SidebarLinks to="/ui/login" icon="bi bi-list" class="mb-5" >Login</SidebarLinks>
      <SidebarLinks to="/ui/pago" icon="bi bi-handbag">Compras</SidebarLinks>
      <SidebarLinks to="/ui/datos" icon="bi bi-ticket-perforated">Ofertas</SidebarLinks>
      <SidebarLinks to="/ui/ine" icon="bi bi-shop-window">Mi tienda</SidebarLinks>
      <SidebarLinks to="/ui/anuncio" icon="bi bi-coin">Mercado pago</SidebarLinks>
      <SidebarLinks to="#" icon="bi bi-music-note-list">Música</SidebarLinks>
      <SidebarLinks to="#" icon="bi bi-card-list">Cuentas</SidebarLinks>
      <SidebarLinks to="#" icon="bi bi-person-circle">Perfil</SidebarLinks>
      <SidebarLinks to="#" icon="bi bi-gear">Configuración</SidebarLinks>
    </div>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth, abre, cierra } from './state';
import SidebarLinks from './SidebarLinks.vue';

export default{
  props: {},
  components: { SidebarLinks },
  setup(){
    return { collapsed, toggleSidebar, sidebarWidth, abre, cierra }
  },
  data() {
    return {
      sidebarWidth2: "200px"
    }
  },
  methods: {
    collapsed2: function() {
      return collapsed.value?this.sidebarWidth2="55px":this.sidebarWidth2
    }
  },
}
</script>

<style>
:root {
  --sidebar-bg-color: rgba(29, 76, 242,1.0);
  --sidebar-item-hover: rgba(30, 144, 255,0.400
  );
  --sidebar-item-active: rgba(30, 144, 255,0.400);
}
</style>

<style scoped>

.sidebar{
  color: rgb(13, 25, 189);
  background-color: var(--sidebar-bg-color);

  float: left;
  z-index: 0;
  top: 0;
  left: 0;
  overflow-y: auto;
  height: 100%;
  min-height: 600px;
  position: fixed;
  top: 6.3em;
  left:0;

  transition: 0.3s;

  /*display: flex;
  flex-direction: column;*/
  align-items: center;
  margin: auto;
}

.sidebar2{
  position: fixed;
  top: 16em;
}

.collapse-icon{
  position: absolute;
  bottom: 0;
  left: .5em;
  padding: 0.75em;

  color: rgb(43, 17, 189);

  transition: 0.2s linear;
}

.rotate-180{
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
