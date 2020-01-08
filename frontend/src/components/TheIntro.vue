<template>
    <div class="matchmaking-details-wrapper top-margin top-padding bottom-padding">
        <div class="row justify-content-center">
            <div class="col-11 col-lg-6">
                <img
                    :src="require('../assets/images/matchmaking.png')"
                    alt="matchmaking"
                />
            </div>
        </div>
        <div
            class="top-margin matchmaking-details row justify-content-around align-items-center"
        >
            <div
                class="row justify-content-around align-items-center col-12 col-lg-7"
            >
                <div class="col-6 col-md-3">
                    <img
                        :src="require('../assets/images/coding.png')"
                        alt="coding"
                    />
                    <p class="text-center">
                        800+ Hours of Learning and Practicing
                    </p>
                </div>
                <div class="col-6 col-md-3">
                    <img
                        :src="require('../assets/images/java.png')"
                        alt="java"
                    />
                    <p class="text-center">
                        Full Stack Test Driven Java Web Development
                    </p>
                </div>
                <div class="col-6 col-md-3">
                    <img
                        :src="require('../assets/images/hand-shake.png')"
                        alt="hand shake"
                    />
                    <p class="text-center">
                        6 - 8 Hours of Personal Career Training
                    </p>
                </div>
                <div class="col-6 col-md-3">
                    <img
                        :src="require('../assets/images/profile.png')"
                        alt="profile"
                    />
                    <p class="text-center">
                        30+ Pathway Program Career Sessions
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-5 align-items-center">
                <p class="employer-attraction text-justify">
                    With growing need to fill your talent pipeline with
                    qualified tech talent, we host Company Matchmaking events to
                    introduce partner companies to graduating Java and .NET
                    cohorts. Matchmaking gives your hiring managers an
                    opportunity to meet and assess the fit of potential
                    candidates in short, timed sessions over the course of two
                    days.
                </p>
            </div>
        </div>
        <div class="text-center top-margin">
            <a
                class="te-btn learn-more-btn"
                href="https://www.techelevator.com/matchmaking" target="_blank"
                >Learn More about Matchmaking</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "TheIntro"
};
</script>

<style scoped>
img {
    width: 100%;
}

.matchmaking-details-wrapper {
    background: #f8f9fa;
}

.matchmaking-details p {
    font-size: 0.9rem;
}

.employer-attraction {
    margin: 0;
    font-size: 0.95rem !important;
}

.learn-more-btn {
    text-decoration: none;
}

@media only screen and (max-width: 600px) {
    .row {
        padding: 0 5px;
        margin-left: auto;
        margin-right: auto;
    }

    .top-margin {
        margin-top: 30px;
    }

    .top-padding {
        padding-top: 30px;
    }

    .bottom-padding {
        padding-bottom: 40px;
    }
}

@media only screen and (min-width: 600px) {
    .row {
        padding: 0 50px;
        margin-left: auto;
        margin-right: auto;
    }

    .top-margin {
        margin-top: 60px;
    }

    .top-padding {
        padding-top: 60px;
    }

    .bottom-padding {
        padding-bottom: 60px;
    }
}
</style>
