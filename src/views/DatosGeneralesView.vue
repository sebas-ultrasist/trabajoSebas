<template>
  <div>
    <NavComponent />
    <h1>
      Datos Personales<i
        class="fa-solid fa-circle-question fs-3 mx-1"
        style="color: #1d43f2"
      ></i>
    </h1>
    <div class="bodi">
      <form class="row g-3">
        <div class="col-4">
          <label for="inputEmail4" class="form-label"
            >Nombre<i class="fa-solid fa-pen mx-2" style="color: #1d43f2"></i
          ></label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-4">
          <label for="inputPassword4" class="form-label"
            >Apellido Paterno<i
              class="fa-solid fa-pen mx-2"
              style="color: #1d43f2"
            ></i
          ></label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-4">
          <label for="inputPassword4" class="form-label"
            >Apellido Materno<i
              class="fa-solid fa-pen mx-2"
              style="color: #1d43f2"
            ></i
          ></label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-6 mt-4">
          <label for="inputPassword4" class="form-label"
            >Telefono Personal<i
              class="fa-solid fa-phone mx-2"
              style="color: #1d43f2"
            ></i
          ></label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-6 mt-4">
          <label for="inputPassword4" class="form-label"
            >Correo Personal<i
              class="fa-regular fa-at mx-2"
              style="color: #1d43f2"
            ></i
          ></label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>

        <div class="col-4">
          <label for="inputAddress2" class="form-label"
            >Fecha de nacimiento<i
              class="fa-solid fa-calendar-days mx-2"
              style="color: #1d43f2"
            ></i
          ></label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="12 enero 1987"
          />
        </div>
        <div class="col-4">
          <label for="inputCity" class="form-label"
            >Estado<i
              class="fa-solid fa-map-pin mx-2"
              style="color: #1d43f2"
            ></i
          ></label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-4">
          <label for="inputCity" class="form-label"
            >Municipio<i
              class="fa-solid fa-map-location-dot mx-2"
              style="color: #1d43f2"
            ></i
          ></label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-6">
          <label for="inputState" class="form-label"
            >Colonia<i class="fa-solid fa-location-arrow mx-2" style="color: #1d43f2;"></i></label>
          <select id="inputState" class="form-select">
            <option selected>Elegir colonia</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-6">
          <label for="inputZip" class="form-label">Codigo Postal<i class="fa-solid fa-envelopes-bulk mx-2" style="color: #1d43f2;"></i></label>
          <input type="text" class="form-control" id="inputZip" />
        </div>

        <div class="col-12">
          <a type="submit" class="btn btn-primary mt-4 mb-4"
            >Cambiar contraseña y Usuario <i class="fa-solid fa-lock mx-2" style="color: #ffffff;"></i></a
          >
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Enviar</button>
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
  padding: 200px;
}
.p {
  outline: red solid 2px;
}
</style>
