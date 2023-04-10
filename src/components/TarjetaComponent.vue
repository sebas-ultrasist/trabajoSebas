<template>
  <div v-for="pago in data" v-bind:key="pago.id">
    <div class="d-flex justify-content-start align-items-center p-4 b mb-1">
      <input type="radio" name="seleccion" class="fs-3" />
      <div class="div-img mx-3">
        <img :src="pago.icono" alt="" class="icono" />
      </div>
      <div class="text-start mx-3 align-middle">
        <div class="d-flex">
          <p>{{ pago.nombreBanco }} {{ pago.tipoPago }}</p>
          <p>{{ pago.numeroTarjeta }}</p>
        </div>
        <p class="verde">{{ pago.leyenda }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../json/MetodosPago.json";
const inicio = "../assets/";

export default {
  data: function () {
    return {
      //images
      libre: inicio + "m-logo.jpg",
      pago: inicio + "pago.png",
      sivale: inicio + "sivale.webp",
      master: inicio + "master.png",
      visa: inicio + "visa.png",

      //---------------------------------//
      nombreBanco: info.nombreBanco,
      tipoTarjeta: info.tipoTarjeta,
      meses: info.meses,
      numeroTarjeta: info.numeroTarjeta,
      nuevaTarjeta: info.nuevaTarjeta,
      intereses: info.intereses,
      formaPago: info.formaPago,
      tiendasParticipantes: info.tiendasParticipantes,
      cantidadProducto: info.cantidadProducto,
      totalProductos: info.totalProductos,
      costoEnvio: info.costoEnvio,
      totalPago: info.totalPago,
      cupon: info.cupon,
      data: info.renglones,
      otras: info.otrasFormas,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}

.nav {
  background-color: #fee600;
  height: 50px;
}

.logo {
  width: 100px;
  margin-left: -450px;
}

.ayuda {
  margin-right: -350px;
}

.fondo {
  height: 100%;
  width: 100%;
  background-color: #eeeeee;
}

.mp {
  width: 50px;
}

.main {
  height: 100%;
  width: 100%;
}

.w {
  outline: red solid 1px;
}

.w2 {
  outline: green solid 1px;
}

.w3 {
  outline: blue solid 1px;
}

.b {
  background-color: #fff;
}

.bordeAbajo {
  border-bottom: 2px solid #eeeeee;
}

.drop {
  border-radius: 2px solid #eeeeee;
}

.verde {
  color: darkgreen;
}

.icono {
  width: 100%;
}

.div-img {
  background-color: #eeeeee;
  border-radius: 50%;
  width: 50px;
  box-sizing: border-box;
}
</style>
