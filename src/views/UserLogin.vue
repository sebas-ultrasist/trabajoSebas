<template>
    <div>
      <NavComponent />
      <div class="container-fluid">
        <div class="row justify-content-center align-items-center vh-100">
          <div class="col-md-6 col-lg-4">
            <div class="card shadow">
              <div class="card-body">
                <h3 class="card-title text-center mb-4">Iniciar sesión</h3>
                <form>
                  <div class="mb-3">
                    <label for="inputEmail" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="correo@ejemplo.com" v-model="email" required>
                  </div>
                  <div class="mb-3">
                    <label for="inputPassword" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Contraseña" v-model="password" required>
                  </div>
                  <button type="submit" class="btn btn-primary w-100 mt-4" :disabled="!validForm" @click.prevent="login">Ingresar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import NavComponent from "@/components/NavComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  import axios from "axios";
  import store from "@/store";
  import router from "@/router";
  
  const apiEndpoint = "https://myapi.com/login";
  
  export default {
    components: {
      NavComponent,
      FooterComponent,
    },
    data() {
      return {
        email: "",
        password: "",
      };
    },
    computed: {
      validForm() {
        return this.email !== "" && this.password !== "";
      },
    },
    methods: {
      login() {
        axios.post(apiEndpoint, {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            const { data } = response;
            store.commit("setUserData", data.userData);
            router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: none;
    border-radius: 1rem;
  }
  .card-title {
    font-weight: bold;
  }
  .btn-primary {
    background-color: #007bff;
    border: none;
  }
  .btn-primary:hover {
    background-color: #0069d9;
    border: none;
  }
  </style>
  