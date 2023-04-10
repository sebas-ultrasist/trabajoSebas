<template>
  <div>
    <NavComponent />
    <div class="bodi">
      <h1><i class="fa-solid fa-rectangle-ad" style="color: #1d4cf2;"></i> Crea Tu Anuncio!</h1>
      <form action="">
        <div class="mb-4">
          <label for="formGroupExampleInput" class="form-label"
            >Descripcion pequeña:</label
          >
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
        <!-- 1er -->
        <div class="col-6 mb-4">
          <label for="inputEmail4" class="form-label">Codigo Postal <i class="fa-solid fa-map-pin" style="color: #1d43f2;"></i></label>
          <input type="email" class="form-control mb-3" id="inputEmail4" />
          <label for="inputState" class="form-label">Colonia <i class="fa-solid fa-location-dot" style="color: #1d43f2;"></i></label>
          <select id="inputState" class="form-select mt-3">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>

        <div class="col-3">
          <label for="inputText" class="form-label">Oficio <i class="fa-solid fa-hammer" style="color: #1d43f2;"></i></label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12 d-flex justify-content-around mt-4 mb-4">
          <button class="btn btn-primary">Insertar Imagen <i class="fa-solid fa-file-image" style="color: #ffffff;"></i></button>
          <button class="btn btn-primary">Insertar Video <i class="fa-regular fa-file-video" style="color: #ffffff;"></i></button>
        </div>
        <h2>imagenes</h2>
        <div>
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
        </div>
        <h2>Videos</h2>
        <div>
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
          <img src="https://picsum.photos/125/125" alt="" class="m-4" />
        </div>
        <div class="col-9">
          <label for="inputAddress2" class="form-label mt-4 fw-bold"
            >Datos del negocio <i class="fa-solid fa-house" style="color: #1d43f2;"></i></label
          ><br>
          <label for="inputCity" class="form-label mt-4 mb-4"
            >Telefono del Negocio</label
          >
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="99 4457 1254  "
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label mt-4 mb-4"
            >Correo Electronico del negocio</label
          >
          <input type="text" class="form-control" id="inputCity" placeholder="mi_negocio@example.com" />
        </div>
        <div class="col-md-6 mb-4">
          <label for="inputCity" class="form-label mt-4 mb-4"
            >Nickname o apodo</label
          >
          <input type="text" class="form-control" id="inputCity" placeholder="Don chuy" />
        </div>
        <div class="col-12 d-flex justify-content-around mt-4 mb-4">
          <a href="http://localhost:8080/ui/ine" class="btn btn-primary"><span><i class="fa-solid fa-address-card mx-2" style="color: #ffffff;"></i></span> Credencial INE</a>
          <a href="http://localhost:8080/ui/pago" class="btn btn-primary"><span><i class="fa-solid fa-credit-card mx-2" style="color: #ffffff;"></i></span> Agregar forma de pago</a>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary mt-4">
            Enviar Datos y Crear Anuncio
          </button>
        </div>
      </form>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.bodi {
  margin-left: 56px;
  padding: 100px;
}
.p {
  outline: red solid 2px;
}
</style>
