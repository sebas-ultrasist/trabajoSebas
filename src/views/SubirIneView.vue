<template>
  <div>
    <NavComponent />
    <div class="bodi">
      <div class="">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary m-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Subir Imagen
        </button>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Agrega imagenes
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <span>Aqui va el componente de imagenes</span>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- div de imagenes -->
      <div class="d-flex justify-content-center align-items-center  h-100">
        <div class="imagenes">
          <img src="https://picsum.photos/400/200" alt="" class="img-fluid ">
        </div>
        <div class="imagenes">
          <img src="https://picsum.photos/400/200" alt="" class="img-fluid">
        </div>
      </div>
      <FooterComponent/>
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    NavComponent,
    FooterComponent
  },
};
</script>

<style scoped>
.bodi{
  margin-left:56px;
}
.p {
  outline: red solid 2px;
}

div>img{
  border:3px solid black;
  border-radius:10px;
}

.imagenes{
  padding:100px;
  height:80vh;
}
</style>
