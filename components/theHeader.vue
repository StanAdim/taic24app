<script lang="ts" setup>
const config = useRuntimeConfig()
</script>

<template>
    <header id="header" class="header d-flex align-items-center sticked stikcy-menu">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
              <span>{{ config.public.appName }}</span>
        <!-- <img src="assets/images/logo.png" alt="logo"> -->
      </a>
            <nav id="navbar" class="navbar">
                <ul>
                    <li><nuxt-link to="/" class="">Home</nuxt-link></li>
                    <li><nuxt-link to="/about-us" class="">About</nuxt-link></li>
                    <li class="dropdown"><a href="#"><span>Sponsorship</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                            <li><nuxt-link to="/">Local Sponsorships</nuxt-link></li>
                            <li><nuxt-link to="/">International Sponsorship</nuxt-link></li>
                        </ul>
                    </li>
                    <li><nuxt-link to="/" class="">Exhibitors</nuxt-link></li>
                    <li><nuxt-link to="/" class="">Hospitality</nuxt-link></li>
                    <li><nuxt-link to="/" class="">Tours</nuxt-link></li>
                    <li><nuxt-link to="/" class="">Gallery</nuxt-link></li>

                </ul>
            </nav>
            <!-- .navbar -->
            <a href="contact.html" class="btn-get-started hide-on-mobile">Register Now</a>
            <button id="darkmode-button"><i class="bi bi-moon-fill"></i></button>
            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
    </header>
</template>

<style scoped></style>
