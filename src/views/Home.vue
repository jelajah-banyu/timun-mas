<template>
  <v-container id="home">
    <v-layout row wrap>
      <v-flex
        lg12 md12 sm12 xs12
        id="home__header"
        class="view_header"
      >
        <h2>SELAMAT DATANG DI</h2>
        <h1>BANYUWANGI</h1>
        <div />
      </v-flex>
      <v-flex
        lg12 md12 sm12 xs12
        id="home__content"
        class="view_content"
      >
        <div id="kemana">
          <div class="section_header">
            <h1 class="section_title">Mau kemana hari ini?</h1>
            <router-link
              class="section_more"
              to="home"
            >
              <h2>Lihat semua</h2>
            </router-link>
          </div>
          <div class="section_content home__buttons">
            <button class="btn_box">Wisata Kuliner</button>
            <button class="btn_box">Pantai</button>
            <router-link to="/souvenir">
              <button class="btn_box">Beli Oleh-Oleh</button>
            </router-link>
            <button class="btn_box">Tempat Rekreasi</button>
          </div>
        </div>
        <div id="destinasi">
          <div class="section_header">
            <h1 class="section_title">Destinasi populer</h1>
            <router-link
              class="section_more"
              to="home"
            >
              <h2>Lihat semua</h2>
            </router-link>
          </div>
          <place-list />
        </div>
        <div id="kuliner">

        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import PlaceList from '@/components/PlaceList.vue'

export default {
  name: 'home',
  components: {
    PlaceList
  }
}
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
}

#home__header {
  height: 42vh;
  background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('https://1.bp.blogspot.com/-EcRrSqJ8_zY/V0hk7xwKpTI/AAAAAAAAQT0/KfL55jpP8bM9-Cr9edVCluiwWVuoXrnBgCLcB/s1600/Teluk%2Bhijau%2B7.jpg') no-repeat right top;

  div {
    background-color: white;
    width: 15vw;
    height: 0.5vh;
    margin-top: 3vh;
  }
  h2 {
    margin-top: 22vh;
    font-size: 2.3vh;
    word-spacing: 0.5rem;
  }
  h1 {
    font-size: 4.8vh;
  }
}

#home__content {
  >div {
    margin-top: 1vh;
    margin-bottom: 4vh;
  }

  .home__buttons {
    button {
      width: calc(50% - 2vw);
      margin: 1vw;
      color: black;
    }
  }
}
</style>

