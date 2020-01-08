<template>
    <div>
        <EmployerProfile v-if="hasEmployerData" />
        <EmployerRegisterForm v-else />
    </div>
</template>

<script>
import auth from "../auth";
import EmployerRegisterForm from "../components/EmployerRegisterForm";
import EmployerProfile from "../components/EmployerProfile";

export default {
    name: "EmployerHome",
    components: {
        EmployerProfile,
        EmployerRegisterForm
    },
    data() {
        return {
            hasEmployerData: false
        };
    },
    methods: {
        loadEmployerJsonData(userName) {
            fetch(
                `${process.env.VUE_APP_REMOTE_API}/api/employers/${userName}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + auth.getToken(),
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(response => {
                    return response.json();
                })
                .then(employerData => {
                    if (employerData) {
                        this.hasEmployerData = true;
                    } else {
                        this.hasEmployerData = false;
                    }
                });
        }
    },
    created() {
        this.loadEmployerJsonData(auth.getUser().sub);
    }
};
</script>

<style scoped></style>
