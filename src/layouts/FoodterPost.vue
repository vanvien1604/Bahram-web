<script setup>
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-item">
        <div class="logo-foodter">
          <a href="/"><img src="/src/assets/images/Group13.png" alt="" /></a>
        </div>
      </div>
      <div class="footer-item">
        <section class="icon-footer">
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-twitter"></i
          ></a>
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a
            data-mdb-ripple-init
            class="btn btn-link btn-floating btn-lg text-body m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-youtube"></i
          ></a>
        </section>
      </div>
      <div class="footer-item">All Rights Reserved 2018 3layers</div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
  position: relative;
  bottom: 0;
}

.footer-item {
  flex: 1;
  text-align: center;
}

.text-body {
  color: #000;
  text-decoration: none;
}

.text-body:hover {
  text-decoration: underline;
}
.icon-footer > a {
  padding: 5px;
}

@media screen and (max-width: 768px) {
  .footer-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .logo-foodter {
    margin: 10px;
  }
  .footer-item {
    margin-bottom: 5px;
  }
}
</style>
