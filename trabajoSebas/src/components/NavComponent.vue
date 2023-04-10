<template>
  <div style="position: relative;">
    <div class="nav p-2">
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img
              src="../assets/chambeaya.png"
              alt=""
              class="logo">ChambeaYa!</a>
          <SideBarComponent />
          <form class="d-flex" role="search">
            <input
              class="form-control me-3 px-5"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-warning bg-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import SideBarComponent from "@/components/sidebar/SideBarComponent.vue";

export default {
  components: {
    SideBarComponent,
  },
};
</script>

<style scoped>
.nav {
  background-color: #ffa31a;
  z-index: 10;
  position: relative;
}
.logo {
  width: 60px;
}

</style>
