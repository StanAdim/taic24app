<script lang="ts" setup>
const speakerList = ref([
  {fullName: 'Jane Doe', designation: 
  'Director - FireCodes', imgPath: '/team/team-1.jpg'
   ,linkedIn: '', xLink: ''},
  {fullName: 'Joel Doe', designation: 
  'Head - Institute', imgPath: '/team/team-2.jpg'
   ,linkedIn: '', xLink: ''},
  {fullName: 'Jack Doe', designation: 
  'Chief - Mteuzi', imgPath: '/team/team-3.jpg'
   ,linkedIn: '', xLink: ''},
  {fullName: 'Mieki Doe', designation: 
  'Honorable - Funland', imgPath: '/team/team-4.jpg'
   ,linkedIn: '', xLink: ''},
])
</script>

<template>
<!--  Our Team Section  -->
<section id="team" class="team sections-bg">
    <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-header">
            <h2>CONFERENCE SPEAKER</h2>
            <p class="text-center">Speakers and Presenter and Fanicilitors</p>
        </div>

        <div class="row gy-4">
          <template  v-for="item in speakerList" :key="item">
            <div class="col-xl-3 col-md-6 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div class="member">

                    <img :src="item.imgPath" class="img-fluid" :alt="item.fullName">
                    <h4>{{item.fullName}}</h4>
                    <span>{{item.designation}}</span>
                    <div class="social">
                        <a :href="item.linkedIn"><i class="bi bi-twitter"></i></a>
                        <a :href="item.xLink"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
          </template>
            <!-- End Team Member -->
        </div>

    </div>
</section>
<!-- End Our Team Section -->
</template>

<style scoped>
</style>
