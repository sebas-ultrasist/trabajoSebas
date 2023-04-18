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
  --sidebar-bg-color: #2a2c39;
  --sidebar-item-hover: rgba(255, 255, 255, 0.2);
  --sidebar-item-active: rgba(255, 255, 255, 0.3);
}

.sidebar{
  color: #fff;
  background-color: var(--sidebar-bg-color);
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 200px;
  transition: width 0.3s ease-in-out;
  overflow-y: auto;
}

.sidebar2{
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.sidebar-link{
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #fff;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  font-size: 0.9rem;
}

.sidebar-link:hover{
  background-color: var(--sidebar-item-hover);
}

.sidebar-link.active{
  background-color: var(--sidebar-item-active);
}

.sidebar-icon{
  font-size: 1.2rem;
  margin-right: 1rem;
}

.sidebar-label{
  margin: 0;
  font-size: 1rem;
}

@media(max-width: 991.98px) {
  .sidebar {
    width: 60px;
  }
  .sidebar-label{
    display: none;
  }
  .sidebar-icon{
    margin-right: 0;
  }
}
</style>