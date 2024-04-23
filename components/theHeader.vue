<script lang="ts" setup></script>

<template>
    <header id="header" class="header d-flex align-items-center sticked stikcy-menu">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/images/logo.png" alt="logo">
      </a>
            <nav id="navbar" class="navbar">
                <ul>
                    <li><a href="index.html" class="">Home</a></li>
                    <li><a href="services.html" class="">Services</a></li>
                    <li><a href="portfolio.html" class="">Portfolio</a></li>
                    <li><a href="testimonials.html" class="">Testimonials</a></li>
                    <li><a href="team.html" class="">Team</a></li>
                    <li class="dropdown"><a href="#"><span>Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                            <li><a href="about.html">About</a></li>
                            <li><a href="packages.html">Pricing</a></li>
                            <li><a href="faqs.html">FAQs</a></li>
                            <li><a href="privacy-policy.html">Terms &amp; Conditions</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="blogs.html">Blogs</a></li>
                            <li><a href="blog-details.html">Blog Detail Page</a></li>
                        </ul>
                    </li>
                    <li><a href="blogs.html">News</a></li>
                </ul>
            </nav>
            <!-- .navbar -->
            <a href="contact.html" class="btn-get-started hide-on-mobile">Get Quotes</a>
            <button id="darkmode-button"><i class="bi bi-moon-fill"></i></button>
            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
    </header>
</template>

<style scoped></style>
