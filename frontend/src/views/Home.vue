<template>
    <div class="home bg-white">
        <div class="row justify-content-around align-items-center">
            <div class="col-12 col-lg-4 text-center">
                <h1>Matchmaking</h1>
                <p class="matchmaking-intro">
                    Tech Elevator's Matchmaking event helps employers to find
                    qualified tech talent and gives students opportunities to
                    interview at their dream companies
                </p>
                <p class="button">
                    <a
                        href="/signup"
                        class="te-btn"
                        v-on:click="storeIdentity('student')"
                        >I'm a Student</a
                    >
                </p>
                <p class="button">
                    <a
                        href="/signup"
                        class="te-btn"
                        v-on:click="storeIdentity('employer')"
                        >I'm an Employer</a
                    >
                </p>
            </div>
            <div class="col-12 col-lg-7">
                <TheCarousel />
            </div>
        </div>
        <TheIntro />
        <TheFooter />
    </div>
</template>

<script>
import TheCarousel from "../components/TheCarousel";
import TheFooter from "../components/TheFooter";
import TheIntro from "../components/TheIntro";
export default {
    name: "home",
    components: {
        TheCarousel,
        TheIntro,
        TheFooter
    },
    methods: {
        storeIdentity(identity) {
            sessionStorage.setItem("identityPreference", identity);
        }
    }
};
</script>

<style scoped>
.bg-white {
    background: white;
}

.button {
    padding-top: 15px;
    margin: 0 0 20px 0;
}

.button:nth-of-type(2) {
    margin-bottom: 20px;
}

.button a:hover {
    text-decoration: none;
}

.matchmaking-intro {
    font-size: 1.2rem;
}

img {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .row {
        padding: 0 5px;
        margin-left: auto;
        margin-right: auto;
    }

    .home {
        padding-top: 5rem;
    }
}

@media only screen and (min-width: 600px) {
    .row {
        padding: 0 50px;
        margin-left: auto;
        margin-right: auto;
    }

    .home {
        padding-top: 9.5rem;
    }
}
</style>
