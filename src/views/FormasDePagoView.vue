<template>
  <div>
    <NavComponent />
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h3 class="text-center mb-4">¿Cómo quieres pagar?</h3>
          <h5 class="text-center mb-5">Elige una forma de pago</h5>
          <!-- Tarjetas -->
          <div class="card mb-3">
            <div class="card-body d-flex align-items-center">
              <div class="form-check me-3">
                <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod1" value="option1">
                <label class="form-check-label" for="paymentMethod1">
                  Nueva tarjeta de crédito
                </label>
              </div>
              <div class="flex-shrink-0">
                <img src="../assets/ico5.svg" alt="Tarjeta de crédito" class="icono" />
              </div>
              <div class="ms-3">
                <div class="d-flex align-items-center">
                  <p class="me-3 mb-0">****0000</p>
                  <p class="mb-0 verde">Hasta 6 meses sin intereses</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body d-flex align-items-center">
              <div class="form-check me-3">
                <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod2" value="option2">
                <label class="form-check-label" for="paymentMethod2">
                  Nueva tarjeta de débito
                </label>
              </div>
              <div class="flex-shrink-0">
                <img src="../assets/ico6.svg" alt="Tarjeta de débito" class="icono" />
              </div>
              <div class="ms-3">
                <div class="d-flex align-items-center">
                  <p class="me-3 mb-0">****0000</p>
                  <p class="mb-0 verde"></p>
                </div>
              </div>
            </div>
          </div>
          <!-- Otras formas de pago -->
          <h4 class="text-center mt-5 mb-4">Otras formas de pago</h4>
          <div class="card mb-3">
            <div class="card-body d-flex align-items-center">
              <div class="form-check me-3">
                <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod3" value="option3">
                <label class="form-check-label" for="paymentMethod3">
                  Transferencia electrónica
                </label>
              </div>
              <div class="flex-shrink-0">
                <img src="../assets/ico7.svg" alt="Transferencia electrónica" class="icono" />
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body d-flex align-items-center">
              <div class="form-check me-3">
                <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMethod4" value="option4">
                <label class="form-check -label" for="paymentMethod4">
<div class="d-flex justify-content-between align-items-center">
<div>
<img src="../assets/ico8.svg" alt="" class="icono" />
<span class="ms-2">Efectivo en puntos de pago</span>
</div>
<div>
<p class="verde">Santander, HSBC, 7-Eleven, Soriana, Circle K y otros</p>
</div>
</div>
</label>
</div>
</div>
</div>
<div class="col-4 p-1 bordery">
<!-- pago -->
<div class="px-1 b main">
<h6 class="pt-5 mx-3 text-start bordeAbajo">Resumen de compra</h6>
<div class="py-3">
<div class="mx-3 d-flex justify-content-between">
<span>productos({{ cantidadProducto }})</span>
<span>$ {{ totalProductos }}</span>
</div>
<div
               class="mx-3 d-flex justify-content-between bordeAbajo pb-3"
             >
<span>Envio</span>
<span>$ {{ costoEnvio }}</span>
</div>
</div>
<div class="mx-3 d-flex justify-content-between">
<span>Pagas</span>
<span>$ {{ totalPago }}</span>
</div>
<!------------------------------------------------->
<section class="drop">
<div class="dropdown-center mt-5">
<button class="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
<i class="fas fa-ticket-alt"></i>
Ingresar un cupon de descuento
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">10%</a></li>
<li><a class="dropdown-item" href="#">30%</a></li>
<li><a class="dropdown-item" href="#">50%</a></li>
</ul>
</div>
</section>
</div>
<!-- pago -->


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

export default {
  components: {
    NavComponent,
    FooterComponent,
  },
  data() {
    return {
      cantidadProducto: 3,
      totalProductos: 500,
      costoEnvio: 100,
      totalPago: 600,
    };
  },
};
</script>
<style scoped>
.bodi {
  margin-left: 56px;
}

.radio-btn {
  margin-right: 10px;
}

.icono {
  height: 50px;
  width: 50px;
}

.verde {
  color: #5ca536;
}

.b {
  background-color: white;
}

.bordery {
  border-style: solid;
  border-color: #d4d4d4;
  border-width: 1px;
}

.main {
  margin-top: 120px;
  margin-bottom: 40px;
}

.bordeAbajo {
  border-style: solid;
  border-color: #d4d4d4;
  border-width: 1px;
}

.dropdown-menu {
  max-height: 200px;
  overflow-y: auto;
}
</style>
