<template>
  <div>
    <NavComponent />
    <div class="bodi">
      <div class="container text-center">
        <div class="row">
          <div class="col-8 p-1">
            <h3 class="mt-4">¿Como quieres pagar?</h3>
            <h5 class="mt-5">Elige una forma de Pago</h5>
            <div>
              <!-- tarjetas -->
              <div
                class="d-flex justify-content-start align-items-center p-4 b mb-1 border rounded mb-2"
              >
                <input type="radio" name="seleccion" class="fs-3" />
                <div class="div-img mx-3">
                  <img src="../assets/ico5.svg" alt="" class="icono" />
                </div>
                <div class="text-start mx-3 align-middle">
                  <div class="d-flex">
                    <p>Nueva tarjeta de crédito</p>
                    <p>****0000</p>
                  </div>
                  <p class="verde">Hasta 6 meses sin intereses</p>
                </div>
              </div>

              <div
                class="d-flex justify-content-start align-items-center p-4 b mb-1 border rounded mb-2"
              >
                <input type="radio" name="seleccion" class="fs-3" />
                <div class="div-img mx-3">
                  <img src="../assets/ico6.svg" alt="" class="icono" />
                </div>
                <div class="text-start mx-3 align-middle">
                  <div class="d-flex">
                    <p>Nueva tarjeta de Debito</p>
                    <p>****0000</p>
                  </div>
                  <p class="verde"></p>
                </div>
              </div>
              <!-- tarjetas -->
            </div>
            <h4 class="mt-4 mb-4">Otras Formas de Pago</h4>
            <!-- otras formas de pago -->
            <div
              class="d-flex justify-content-start align-items-center p-4 b mb-1 border rounded mb-2"
            >
              <input type="radio" name="seleccion" class="fs-3" />
              <div class="div-img mx-3">
                <img src="../assets/ico7.svg" alt="" class="icono" />
              </div>
              <div class="text-start mx-3 align-middle">
                <div class="d-flex">
                  <p>Transferencia electronica</p>
                  <p></p>
                </div>
                <p class="verde"></p>
              </div>
            </div>

            <div
                class="d-flex justify-content-start align-items-center p-4 b mb-1 border rounded  mb-2"
              >
                <input type="radio" name="seleccion" class="fs-3" />
                <div class="div-img mx-3">
                  <img src="../assets/ico8.svg" alt="" class="icono" />
                </div>
                <div class="text-start mx-3 align-middle">
                  <div class="d-flex">
                    <p>Efectivo en puntos de pago</p>
                    <p></p>
                  </div>
                  <p class="verde">Santander, HSBC, 7-Eleven, Soriana, Circle K y otros</p>
                </div>
              </div>
            <!-- otras formas de pago -->
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
                  <button
                    class="btn btn-white dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="fa-solid fa-ticket"></i>
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
};
</script>

<style scoped>
.bodi {
  margin-left: 56px;
}
.p {
  outline: red solid 2px;
}
</style>
