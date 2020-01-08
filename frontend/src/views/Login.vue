<template>
    <div id="login" class="login row justify-content-around">
        <div class="login-form-wrapper text-center shadow bg-white rounded">
            <form class="form-signin" @submit.prevent="login">
                <h1 class="h3 mb-4 font-weight-normal">LOG IN</h1>
                <hr class="mb-4" />
                <div
                    class="alert alert-danger"
                    role="alert"
                    v-if="invalidCredentials"
                >
                    Invalid username and password!
                </div>
                <div
                    class="alert alert-success"
                    role="alert"
                    v-if="this.$route.query.registration"
                >
                    Thank you for signing up, please log in.
                </div>
                <label for="username" class="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    class="form-control"
                    placeholder="Username"
                    v-model.trim="user.username"
                    required
                    autofocus
                />
                <br />

                <label for="password" class="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="Password"
                    v-model.trim="user.password"
                    required
                />
                <br />
                <router-link :to="{ name: 'signup' }"
                    >Need an account?</router-link
                >
                <br />
                <button class="te-btn" type="submit">Log In</button>
            </form>
        </div>
    </div>
</template>

<script>
import auth from "../auth";

export default {
    name: "login",
    components: {},
    data() {
        return {
            user: {
                username: "",
                password: ""
            },
            invalidCredentials: false
        };
    },
    methods: {
        login() {
            fetch(`${process.env.VUE_APP_REMOTE_API}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.user)
            })
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        console.log(response);
                        this.invalidCredentials = true;
                    }
                })
                .then(token => {
                    if (token != undefined) {
                        if (token.includes('"')) {
                            token = token.replace(/"/g, "");
                        }
                        auth.saveToken(token);

                        const user = auth.getUser();
                        if (user.rol === "student") {
                            window.location.href = "/studenthome";
                        } else if (user.rol === "employer") {
                            window.location.href = "/employerhome";
                        } else {
                            window.location.href = "/adminhome";
                        }
                    }
                })
                .catch(err => console.error(err));
        }
    }
};
</script>

<style scoped>
.row {
    padding: 0 1px;
    margin-left: auto;
    margin-right: auto;
}

button {
    margin: 10px 0;
    padding-left: 35px;
    padding-right: 35px;
}

.login-form-wrapper {
    background: rgba(248, 249, 250, 0.94) !important;
}

@media only screen and (max-width: 600px) {
    .login-form-wrapper {
        padding: 50px 20px;
    }

    .login {
        margin-top: 7rem;
    }
}

@media only screen and (min-width: 600px) {
    .login-form-wrapper {
        padding: 60px 100px;
    }

    .login {
        padding-top: 9.5rem;
    }
}
</style>
