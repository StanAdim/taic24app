<script lang="ts" setup>
const hasPrice = ref(false)

</script>

<template>
<!-- Start Pricing Section -->
<div class="pricing section">
    <div class="container-fluid">
        <div class="container">
            <div class="section-header">
                <h2>CONFERENCE FEES</h2>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card text-center">
                        <div class="title">
                          <div class="site-icon"><i class="fa-solid fa-user-tie"></i></div>
                            <h2>Registered ICT Professional</h2>
                        </div>
                        <div class="price">
                            <UsablesSpinLoader />

                            <h4 v-if="hasPrice"><span>TZS</span> 250,000</h4>
                        </div>
                        <div class="option">
                            <ul>
                                <!-- <li><i class="bi bi-check-circle" aria-hidden="true"></i> Unlimited GB Space</li> -->
                                <!-- <li><i class="bi bi-check-circle" aria-hidden="true"></i> 30 Domain Names</li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card text-center">
                        <div class="title">
                          <div class="site-icon"><i class="fa-solid fa-user-tag"></i></div>
                            <h2>Non registered ICT Professionals and other participants</h2>
                        </div>
                        <div class="price">
                            <UsablesSpinLoader />
                            <h4 v-if="hasPrice"><span>TZS</span> 250,000</h4>
                        </div>
                        <div class="option">
                            <ul>
                                <!-- <li><i class="bi bi-check-circle" aria-hidden="true"></i> Unlimited GB Space</li> -->
                                <!-- <li><i class="bi bi-check-circle" aria-hidden="true"></i> 30 Domain Names</li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card text-center">
                        <div class="title">
                            <div class="site-icon"><i class="fa-solid fa-earth-americas"></i></div>
                            <h2>Foreigner Participants </h2>
                        </div>
                        <div class="price">
                            <UsablesSpinLoader />

                            <h4 v-if="hasPrice"><span>TZS</span> 250,000</h4>
                        </div>
                        <div class="option">
                            <ul>
                                <!-- <li><i class="bi bi-check-circle" aria-hidden="true"></i> Unlimited GB Space</li> -->
                                <!-- <li><i class="bi bi-check-circle" aria-hidden="true"></i> 30 Domain Names</li> -->
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<!-- End Pricing Section -->
</template>

<style scoped></style>
