<template>
    <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
    >
        <ol class="carousel-indicators">
            <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    :src="require('../assets/images/carousel1.png')"
                    class="d-block w-100"
                    alt=""
                />
            </div>
            <div class="carousel-item">
                <img
                    :src="require('../assets/images/carousel2.png')"
                    class="d-block w-100"
                    alt=""
                />
            </div>
            <div class="carousel-item">
                <img
                    :src="require('../assets/images/carousel3.png')"
                    class="d-block w-100"
                    alt=""
                />
            </div>
            <div class="carousel-item">
                <img
                    :src="require('../assets/images/carousel4.png')"
                    class="d-block w-100"
                    alt=""
                />
            </div>
            <div class="carousel-item">
                <img
                    :src="require('../assets/images/carousel5.png')"
                    class="d-block w-100"
                    alt=""
                />
            </div>
            <div class="carousel-item">
                <img
                    :src="require('../assets/images/carousel6.png')"
                    class="d-block w-100"
                    alt=""
                />
            </div>
        </div>
        <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "TheCarousel"
};
</script>

<style scoped>
.carousel {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .carousel-item img {
        height: 210px;
        width: 100%;
    }
}

@media only screen and (min-width: 600px) {
    .carousel-item img {
        height: 350px;
        width: 100%;
    }
}
</style>
