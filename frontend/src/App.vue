<template>
    <div id="app">
        <TheNavbar />
        <router-view />
    </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";

export default {
    name: "the-navbar",
    components: {
        TheNavbar
    }
};
</script>

<style>
body {
    background-image: url("assets/images/loginBg.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
}

:root {
    --teblue: #2cb2ea;
    --tegreen: #8fc74a;
    --tegray: #3e4246;
    --tewhite: #fff;
    --tegold: #ffca47;
    --tered: #c00a32;
}

* {
    letter-spacing: 0.04rem;
}

.te-btn {
    font-size: 1rem;
    background-color: var(--teblue);
    color: var(--tewhite);
    border: var(--tewhite) 1.5px solid;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 300px;
    letter-spacing: 0.1rem;
}

.te-btn:hover {
    background-color: var(--tegreen);
    color: var(--tewhite) !important;
    border: 1.5px solid var(--tegreen);
    font-weight: 700;
}

.te-btn:active,
.te-btn:focus {
    border: none;
    outline: none;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--tegray);
    margin: 1em 0;
    padding: 0;
}
</style>
