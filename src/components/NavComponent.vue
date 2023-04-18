<template>
  <div style="position: relative;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/chambeaya.png" alt="" class="logo">
          ChambeaYa!
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Empleos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <SideBarComponent />
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
            <button class="btn btn-danger" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SideBarComponent from "@/components/sidebar/SideBarComponent.vue";

export default {
  name: "NavbarComponent",
  components: {
    SideBarComponent,
  },
};
</script>

<style scoped>
.logo {
  width: 60px;
}

.navbar {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #495057;
}

.navbar-brand {
  font-weight: bold;
  color: #495057;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.form-control:focus {
  box-shadow: none;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    margin-bottom: 10px;
  }
}
</style>
