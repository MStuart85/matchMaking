<template>
    <div id="signup" class="signup row justify-content-around">
        <div class="text-center signup-form-wrapper shadow bg-white rounded">
            <form class="form-signup" @submit.prevent="signup">
                <h1 class="h3 mb-4 font-weight-normal">CREATE ACCOUNT</h1>
                <hr class="mb-4" />
                <div
                    class="alert alert-danger"
                    role="alert"
                    v-if="registrationErrors"
                >
                    There were problems registering this user.
                </div>

                <label for="role" class="sr-only">Account Type</label>
                <select class="form-control" v-model.trim="user.role">
                    <option value="" :selected="this.user.role === ''">Please Select Account Type</option>
                    <option
                        value="student"
                        :selected="this.user.role === 'student'"
                        >I'm a Student</option
                    >
                    <option
                        value="employer"
                        :selected="this.user.role === 'employer'"
                        >I'm an Employer</option
                    >
                </select>
                <br />

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

                <label for="email" class="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Email"
                    v-model.trim="user.email"
                    required
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

                <input
                    type="password"
                    id="confirmPassword"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model.trim="user.confirmPassword"
                    required
                />
                <br />

                <router-link :to="{ name: 'login' }">
                    Have an account?
                </router-link>
                <br />

                <button class="te-btn" type="submit">
                    Create Account
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "signup",
    data() {
        return {
            user: {
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                role: ""
            },
            registrationErrors: false
        };
    },
    created() {
        const identityPreference = sessionStorage.getItem("identityPreference");
        if (identityPreference === "student") {
            this.user.role = "student";
        } else if (identityPreference === "employer") {
            this.user.role = "employer";
        }
        sessionStorage.removeItem("identityPreference");
    },
    methods: {
        signup() {
            fetch(`${process.env.VUE_APP_REMOTE_API}/register`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.user)
            })
                .then(response => {
                    if (response.ok) {
                        this.$router.push({
                            path: "/login",
                            query: { registration: "success" }
                        });
                    } else {
                        this.registrationErrors = true;
                    }
                })

                .then(err => console.error(err));
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

.signup-form-wrapper {
    background: rgba(248, 249, 250, 0.94) !important;
}

@media only screen and (max-width: 600px) {
    .signup-form-wrapper {
        padding: 50px 20px;
    }

    .signup {
        padding-top: 7rem;
        margin-bottom: 3rem;
    }
}

@media only screen and (min-width: 600px) {
    .signup-form-wrapper {
        padding: 60px 100px;
    }

    .signup {
        margin-top: 9.5rem;
        margin-bottom: 5rem;
    }
}
</style>
