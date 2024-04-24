<script lang="ts" setup>
const global = useGlobalDataStore()
</script>

<template>
    <section id="hero" class="hero sticked-header-offset">
        <particle />
        <div id="repulse-circle-div"></div>
        <div class="container position-relative landing-focus">
            <div class="row gy-5 aos-init aos-animate">
                <div class="col-lg-7 offset-lg-5 dark-bg order-lg-1 d-flex flex-column justify-content-start text-left caption">
                    <!-- <h2 data-aos="fade-up">Delivering Superior Services <span>IT Solutions</span><span class="circle" data-aos="fade-right" data-aos-delay="800">.</span></h2> -->
                    <h2 data-aos="fade-up">{{global.longName}}<span> 2024</span></h2>
                    <h3 data-aos="fade-up" data-aos-delay="500" >Theme to be: casted</h3>
                    
                    <!-- <p data-aos="fade-up" data-aos-delay="400">You can easily change any design to your own. It is also highly customizable SEO friendly template.</p> -->
                    <p class="event-dates" data-aos="fade-up" data-aos-delay="400">21<sup>st</sup> - 25<sup>th</sup> October 2024</p>
                    <p class="event-dates" data-aos="fade-up" data-aos-delay="400">Venue to be Announced</p>
                    <div class="d-flex justify-content-start">
                        <!-- <a href="#contact" class="btn-get-started mr-20" data-aos="fade-up" data-aos-delay="800">Get Quotes</a> -->
                        <a href="#registerNow" class="btn-get-started" data-aos="fade-up" data-aos-delay="1000">Register Now</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
<!-- End Hero Section -->
</template>

<style scoped></style>
