<template>
  <div class="d-flex">
    <SideBarKixComponent />
    <div class="container-fluid p-4 mx-3">
      <div class="card card-body">
        <h2><i class="fa-solid fa-rectangle-ad" style="color: #1d4cf2;"></i>Crea tu Anuncio!</h2>
        <form>
          <div class="row">
            <div class="col-sm-12 col-lg-6 mb-4">
              <label for="formGroupExampleInput" class="form-label">Descripcion pequeña:</label>
              <input
                type="text"
                class="form-control mb-4"
                id="formGroupExampleInput"
                placeholder="Hacemos los mejores trabajos y cobramos barato"
              />
              <div class="form-floating">
                <textarea
                  class="form-control mt-4"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Descripcion completa:</label>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6 mb-4">
              <label for="inputEmail4" class="form-label">Codigo Postal <i class="fa-solid fa-map-pin" style="color: #1d43f2;"></i></label>
              <input type="email" class="form-control mb-3" id="inputEmail4" />
              <label for="inputText" class="form-label">Oficio <i class="fa-solid fa-hammer" style="color: #1d43f2;"></i></label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12 col-lg-4 mb-4">
              <label for="inputEmail4" class="form-label">Telefono del Negocio <i class="fa-solid fa-map-pin" style="color: #1d43f2;"></i></label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-sm-12 col-lg-4 mb-4">
              <label for="inputCity" class="form-label">Correo Electronico del negocio</label>
              <input type="text" class="form-control" id="inputCity" placeholder="mi_negocio@example.com" />
            </div>
            <div class="col-sm-12 col-lg-4 mb-4">
              <label for="inputCity" class="form-label">Nickname o apodo</label>
              <input type="text" class="form-control" id="inputCity" placeholder="Don chuy" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12 col-lg-6 mb-4">
              <label for="fileUpload" class="btn btn-primary">
                <span><i class="fa-solid fa-file-image mx-2" style="color: #ffffff;"></i></span> Insertar Imagen
              </label>
              <input id="fileUpload" type="file" ref="fileUpload" style="display:none" @change="uploadImage" />
            </div>
            <div class="col-sm-12 col-lg-6 mb-4">
          <button class="btn btn-primary">
            Insertar Video <i class="fa-regular fa-file-video" style="color: #ffffff;"></i>
          </button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-primary my-4">
            Enviar Datos y Crear Anuncio
          </button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row mt-4">
      <div class="col-12">
        <h2>Imagenes</h2>
      </div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
        <div v-for="imagen in imagenes" v-bind:key="imagen.id" id="contenedor">
          <div class="elemento position-relative">
            <img :src="une(imagen.fullHttpUploadUrl)" alt="" class="rounded img" />
            <i
              class="fa-solid fa-circle-xmark fa-bounce fa-2xl position-absolute top-0 end-0 border border-light"
              style="color: #ec091f"
              @click="elimina(imagen)"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-4">
      <div class="col-12">
        <h2>Videos</h2>
      </div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
        <div class="card col-sm-12 col-md-6 col-lg-4 mb-4">
          <img src="https://picsum.photos/300/200" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Video 1</h5>
          </div>
        </div>
        <div class="card col-sm-12 col-md-6 col-lg-4 mb-4">
          <img src="https://picsum.photos/300/200" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Video 2</h5>
          </div>
        </div>
        <div class="card col-sm-12 col-md-6 col-lg-4 mb-4">
          <img src="https://picsum.photos/300/200" alt="" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Video 3</h5>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-4">
      <div class="col-12">
        <h4>Datos del negocio <i class="fa-solid fa-house" style="color: #1d43f2;"></i></h4>
      </div>
      <div class="col-sm-12 col-lg-6 mb-4">
        <label for="inputEmail4" class="form-label">Telefono del Negocio <i class="fa-solid fa-map-pin" style="color: #1d43f2;"></i></label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-sm-12 col-lg-6 mb-4">
        <label for="inputCity" class="form-label">Correo Electronico del negocio</label>
<input type="text" class="form-control" id="inputCity" placeholder="mi_negocio@example.com" />
</div>
<div class="col-sm-12 col-lg-6 mb-4">
<label for="inputCity" class="form-label">Nickname o apodo</label>
<input type="text" class="form-control" id="inputCity" placeholder="Don chuy" />
</div>
<div class="col-sm-12 d-flex justify-content-around mt-4">
<div class="col-sm-12 col-md-6 col-lg-4 mb-4">
<a href="http://localhost:8080/ui/ine" class="btn btn-primary">
<i class="fa-solid fa-address-card" style="color: #ffffff;"></i> Credencial INE
</a>
</div>
<div class="col-sm-12 col-md-6 col-lg-4 mb-4">
<a href="http://localhost:8080/ui/pago" class="btn btn-primary">
<i class="fa-solid fa-credit-card" style="color: #ffffff;"></i> Agregar forma de pago
</a>
</div>
</div>
</div>
</div>
</div>

  </div>
</template>


<script>

import SideBarKixComponent from '@/components/sidebar/SideBarComponent.vue';
import axios from "axios";
import store from "@/store";

export default {
  components: {
    SideBarKixComponent,
  },
  data() {
    return {
      imagenes: [],
      idUser: store.state.userData.idUser,
      maxImagesAllowed: 1,
      loadedImages: 0,
    };
  },
  mounted() {
    this.carga();
  },
  methods: {
    carga() {
      axios
        .get(
          "https://upload.qbits.mx/api/up/get-user-all-images/" +
            this.idUser
        )
        .then((response) => {
          this.imagenes = response.data;
          this.loadedImages = this.imagenes.length;
          console.log(this.imagenes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    elimina: function (imagen) {
      this.loader = "loader";
      let tarjeta = document.querySelectorAll(".elemento");
      console.log("La imagen se ha eliminado correctamente");
      // Eliminar la imagen de la matriz de imágenes
      const index = this.imagenes.indexOf(imagen);
      //this.imagenes.splice(index,1);
      console.log(index);
      tarjeta[index].textContent = "";
      console.log(imagen.id);
      console.log("estoy llegando");
      const options = {
        method: "DELETE",
        url: `https://upload.qbits.mx/api/up/delete-media/${imagen.id}`,
        headers: {
          idMedia: imagen.id,
          IdUser: store.state.userData.idUser,
          jwt: store.state.userData.jwt,
        },
      };
      console.log("estoy llegando");
      axios
        .request(options)
        .then(function (response) {
          this.loader = "none";
          console.log(response.data);
          this.delete = response.data;
          location.reload();
        })
        .catch(function (error) {
          this.loader = "none";
          console.error(error);
        });
    },
    une(Nombreimg) {
      return `https://media.visitanos.net/image${Nombreimg}`;
    },
  },
};
</script>

<style>
img{
  width: 125px;
  height: 125px;
}
</style>
