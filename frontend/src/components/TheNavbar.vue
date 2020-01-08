<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link
            class="navbar-brand"
            :to="home"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            ><div>
                <img :src="require('../assets/images/logo.png')" alt="logo" />
            </div>
            <div>
                <img
                    :src="require('../assets/images/techelevator.png')"
                    alt="techelevator"
                /></div
        ></router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li
                    class="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-if="!isLoggedIn"
                >
                    <router-link class="nav-link" to="/login"
                        >Log In</router-link
                    >
                </li>
                <li
                    class="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-if="!isLoggedIn"
                >
                    <router-link class="nav-link" to="/signup"
                        >Sign Up</router-link
                    >
                </li>
                <li
                    class="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-if="isLoggedIn && !isAdmin"
                >
                    <router-link
                        class="nav-link d-flex align-items-center"
                        :to="profile"
                        ><img
                            :src="userProfileImg.userProfileImgLink"
                            alt="profile img"
                            class="profile-img"
                        />
                        <span>Profile</span></router-link
                    >
                </li>
                <li
                    class="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-if="isLoggedIn && isAdmin"
                >
                    <router-link class="nav-link" :to="profile"
                        >Dashboard</router-link
                    >
                </li>
                <li
                    class="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-if="isLoggedIn"
                >
                    <router-link class="nav-link" :to="calendar"
                        >Schedule</router-link
                    >
                </li>
                <li
                    class="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    v-if="isLoggedIn"
                    @click="handleLogOut"
                >
                    <router-link class="nav-link" to="/">Log Out</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import auth from "../auth";

export default {
    name: "the-navbar",
    data() {
        return {
            isLoggedIn: auth.getToken(),
            isAdmin: auth.getUser().rol === "admin",
            user: auth.getUser(),
            userProfileImg: {
                userProfileImgLink: ""
            }
        };
    },
    computed: {
        home() {
            if (!this.user) {
                return "/";
            }

            if (this.user.rol === "student") {
                return "/studenthome";
            } else if (this.user.rol === "employer") {
                return "/employerhome";
            } else if (this.user.rol === "admin") {
                return "/adminhome";
            }

            return "/";
        },
        profile() {
            if (this.user.rol === "student") {
                return "/studenthome";
            } else if (this.user.rol === "employer") {
                return "/employerhome";
            } else if (this.user.rol === "admin") {
                return "/adminhome";
            }

            return "/notfound";
        },
        calendar() {
            if (this.user.rol === "student") {
                return "/studentcalendar";
            } else if (this.user.rol === "employer") {
                return "/employercalendar";
            } else if (this.user.rol === "admin") {
                return "/admincalendar";
            }

            return "/notfound";
        }
    },
    methods: {
        handleLogOut() {
            this.isLoggedIn = false;
            if (this.user) {
                this.user = null;
            }
            return auth.destroyToken();
        },
        loadUserImgUrl(isLoggedIn) {
            if (isLoggedIn) {
                fetch(`${process.env.VUE_APP_REMOTE_API}/api/userprofileimg`, {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + auth.getToken(),
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(userProfileImgData => {
                        this.userProfileImg = userProfileImgData;
                    });
            }
        }
    },
    created() {
        this.loadUserImgUrl(this.isLoggedIn);
    }
};
</script>

<style scoped>
.profile-img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 8px;
    border-radius: 50%;
}

.profile-img:hover {
    box-sizing: border-box;
    border: 1px solid var(--teblue);
}

.nav-item > .nav-link > * {
    color: var(--tegray);
    letter-spacing: 0.15rem;
}

.nav-item > .nav-link > *:hover {
    color: var(--teblue);
}

@media only screen and (max-width: 600px) {
    nav {
        position: fixed;
        width: 100%;
        top: 0%;
        text-transform: uppercase;
        z-index: 1;
    }

    .navbar-brand {
        display: flex;
        align-items: center;
    }

    .navbar-brand:hover {
        filter: drop-shadow(1px 1px var(--teblue));
    }

    img {
        height: 2.5rem;
        margin-right: 0.2rem;
    }

    .navbar-toggler {
        border-color: none;
    }

    .navbar-toggler:active,
    .navbar-toggler:focus {
        outline: none;
    }

    .navbar-nav {
        width: 100%;
        justify-content: flex-end;
    }

    li.nav-item {
        margin-left: 1.5rem;
    }

    .nav-item > .nav-link {
        color: var(--tegray);
        letter-spacing: 0.15rem;
    }

    .nav-item > .nav-link:hover {
        color: var(--teblue);
    }
}

@media only screen and (min-width: 600px) {
    nav {
        padding: 1.3rem 6.5rem;
        position: fixed;
        width: 100%;
        top: 0%;
        text-transform: uppercase;
        z-index: 1;
    }

    .navbar-brand {
        display: flex;
        align-items: center;
    }

    .navbar-brand:hover {
        filter: drop-shadow(1px 1px var(--teblue));
    }

    img {
        height: 2.5rem;
        margin-right: 0.2rem;
    }

    .navbar-toggler {
        border-color: none;
    }

    .navbar-toggler:active,
    .navbar-toggler:focus {
        outline: none;
    }

    .navbar-nav {
        width: 100%;
        justify-content: flex-end;
    }

    li.nav-item {
        margin-left: 1.5rem;
    }

    .nav-item > .nav-link {
        color: var(--tegray);
        letter-spacing: 0.15rem;
    }

    .nav-item > .nav-link:hover {
        color: var(--teblue);
    }
}
</style>
