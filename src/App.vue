<template>
  <div id="app">
    <div v-if="logIn">
      <div id="kt_header_mobile" class="kt-header-mobile kt-header-mobile--fixed">
        <div class="kt-header-mobile__logo">
          <a href="index.html">
            <img
              alt="Logo"
              src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/logos/logo-light.png"
            />
          </a>
        </div>
        <div class="kt-header-mobile__toolbar">
          <button class="kt-header-mobile__toggler" id="kt_aside_mobile_toggler">
            <span></span>
          </button>

          <button class="kt-header-mobile__toggler" id="kt_header_mobile_toggler">
            <span></span>
          </button>

          <button class="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler">
            <i class="flaticon-more"></i>
          </button>
        </div>
      </div>
      <!-- end:: Header Mobile -->
      <div class="kt-grid kt-grid--hor kt-grid--root">
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
          <!-- begin:: Aside Navbar -->
          <Navbar></Navbar>
          <!-- end:: Aside Navbar -->

          <div
            class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
            id="kt_wrapper"
          >
            <!-- begin:: Header -->
            <Header></Header>
            <!-- end:: Header -->
            <div
              class="kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
              id="kt_content"
            >
              <!-- begin:: Router -->
              <router-link to="/"></router-link>
              <router-view />
              <!-- end:: Router -->
            </div>

            <!-- begin:: Footer -->
            <div
              class="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop"
              id="kt_footer"
            >
              <div class="kt-container kt-container--fluid">
                <div class="kt-footer__copyright">
                  2020&nbsp;&copy;&nbsp;
                  <a
                    href="http://keenthemes.com/metronic"
                    target="_blank"
                    class="kt-link"
                  >Administration</a>
                </div>
                <div class="kt-footer__menu">
                  <a
                    href="http://keenthemes.com/metronic"
                    target="_blank"
                    class="kt-footer__menu-link kt-link"
                  >About</a>
                  <a
                    href="http://keenthemes.com/metronic"
                    target="_blank"
                    class="kt-footer__menu-link kt-link"
                  >Team</a>
                  <a
                    href="http://keenthemes.com/metronic"
                    target="_blank"
                    class="kt-footer__menu-link kt-link"
                  >Contact</a>
                </div>
              </div>
            </div>
            <!-- end:: Footer -->
          </div>
        </div>
        <!-- end:: Page -->
      </div>
    </div>
    <div v-if="!logIn">
      <Login></Login>
      <!-- begin:: Footer -->
      <div
        class="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop"
        id="kt_footer"
      >
        <div class="kt-container kt-container--fluid">
          <div class="kt-footer__copyright">
            2020&nbsp;&copy;&nbsp;
            <a
              href="http://keenthemes.com/metronic"
              target="_blank"
              class="kt-link"
            >Administration</a>
          </div>
          <div class="kt-footer__menu">
            <a
              href="http://keenthemes.com/metronic"
              target="_blank"
              class="kt-footer__menu-link kt-link"
            >About</a>
            <a
              href="http://keenthemes.com/metronic"
              target="_blank"
              class="kt-footer__menu-link kt-link"
            >Team</a>
            <a
              href="http://keenthemes.com/metronic"
              target="_blank"
              class="kt-footer__menu-link kt-link"
            >Contact</a>
          </div>
        </div>
      </div>
      <!-- end:: Footer -->
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./views/Login";

export default {
  name: "app",
  components: {
    Navbar,
    Header,
    Login
  },
  computed: {
    logIn() {
      return this.$store.getters.logIn;
    }
  }
};
</script>>
