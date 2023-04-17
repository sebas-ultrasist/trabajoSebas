<template>
  <div>
    <NavComponent />
    <h1>
      Datos Personales
      <i class="fas fa-question-circle" style="color: #1d43f2"></i>
    </h1>
    <div class="body">
      <form class="row g-3">
        <div class="col-md-4">
          <label for="inputName" class="form-label">
            Nombre
            <i class="fas fa-pen" style="color: #1d43f2"></i>
          </label>
          <input type="text" class="form-control" id="inputName" required />
        </div>
        <div class="col-md-4">
          <label for="inputLastName1" class="form-label">
            Apellido Paterno
            <i class="fas fa-pen" style="color: #1d43f2"></i>
          </label>
          <input type="text" class="form-control" id="inputLastName1" required />
        </div>
        <div class="col-md-4">
          <label for="inputLastName2" class="form-label">
            Apellido Materno
            <i class="fas fa-pen" style="color: #1d43f2"></i>
          </label>
          <input type="text" class="form-control" id="inputLastName2" required />
        </div>
        <div class="col-md-6">
          <label for="inputPhone" class="form-label">
            Teléfono Personal
            <i class="fas fa-phone" style="color: #1d43f2"></i>
          </label>
          <input type="tel" class="form-control" id="inputPhone" required />
        </div>
        <div class="col-md-6">
          <label for="inputEmail" class="form-label">
            Correo Personal
            <i class="fas fa-at" style="color: #1d43f2"></i>
          </label>
          <input type="email" class="form-control" id="inputEmail" required />
        </div>
        <div class="col-md-4">
          <label for="inputBirthdate" class="form-label">
            Fecha de Nacimiento
            <i class="fas fa-calendar-day" style="color: #1d43f2"></i>
          </label>
          <input type="date" class="form-control" id="inputBirthdate" required />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Estado
            <i class="fas fa-map-pin" style="color: #1d43f2"></i>
          </label>
          <input type="text" class="form-control" id="inputState" required />
        </div>
        <div class="col-md-4">
          <label for="inputCity" class="form-label">
            Municipio
            <i class="fas fa-map-marker-alt" style="color: #1d43f2"></i>
          </label>
          <input type="text" class="form-control" id="inputCity" required />
        </div>
        <div class="col-md-6">
          <label for="inputSuburb" class="form-label">
            Colonia
            <i class="fas fa-location-arrow" style="color: #1d43f2"></i>
            </label>
                  <input type="text" class="form-control" id="inputSuburb" required />
                      </div>
    <div class="col-md-6">
      <label for="inputAddress" class="form-label">
        Dirección
        <i class="fas fa-map-marked-alt" style="color: #1d43f2"></i>
      </label>
      <input type="text" class="form-control" id="inputAddress" required />
    </div>
    <div class="col-md-12">
      <button type="submit" class="btn btn-primary">
        Guardar
      </button>
    </div>
  </form>
</div>
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
