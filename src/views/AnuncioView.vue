<template>
  <div class="container">
    <header class="header">
      <nav class="navbar">
        <div class="logo">
          <img src="./assets/logo.png" alt="Logo" />
        </div>
        <ul class="menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <button class="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div class="hero">
        <h1 class="title">La mejor experiencia de usuario</h1>
        <p class="subtitle">Desarrollo de aplicaciones web y móviles</p>
        <button class="btn btn-primary">Saber más</button>
      </div>
    </header>
    <section class="services">
      <div class="row">
        <div class="col-md-4">
          <div class="service">
            <i class="fas fa-laptop-code"></i>
            <h2 class="title">Desarrollo Web</h2>
            <p class="description">
              Creamos sitios web a medida, optimizados para buscadores y
              compatibles con todos los dispositivos.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service">
            <i class="fas fa-mobile-alt"></i>
            <h2 class="title">Desarrollo Móvil</h2>
            <p class="description">
              Desarrollamos aplicaciones móviles nativas para iOS y Android,
              con un enfoque en la experiencia de usuario.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service">
            <i class="fas fa-cloud"></i>
            <h2 class="title">Cloud Computing</h2>
            <p class="description">
              Implementamos soluciones de cloud computing para optimizar la
              escalabilidad, el rendimiento y la seguridad de tus aplicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="cta">
      <div class="row">
        <div class="col-md-6">
          <h2 class="title">¿Necesitas ayuda?</h2>
          <p class="description">
            Estamos aquí para ayudarte en cualquier proyecto que tengas en mente.
            Ponte en contacto con nosotros para obtener una cotización.
          </p>
        </div>
        <div class="col-md-6">
          <form class="form">
            <h2 class="title">Contáctanos</h2>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <textarea placeholder="Mensaje"></textarea>
            <button class="btn btn-primary">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="row">
        <div class="col-md-6">
          <p class="description">
            © 2023 - Todos los derechos reservados - Mi Empresa
            </p>
          <ul class="social-media">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
