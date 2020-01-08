<template>
    <div class="admin-view-all-profiles shadow rounded">
        <div class="align-items-center justify-content-around row">
            <div class="col-12 col-md-6 text-center">
                <h2>Students</h2>
                <ul class="list-unstyled">
                    <li
                        v-for="student in listOfStudents"
                        :key="student.studentId"
                    >
                        <router-link :to="`/students/${student.studentId}`">{{ student.studentFirstName }}
                        {{ student.studentLastName }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 text-center">
                <h2>Companies</h2>
                <ul class="list-unstyled">
                    <li
                        v-for="employer in listOfEmployers"
                        :key="employer.employerId"
                    >
                        <router-link
                            :to="`/employers/${employer.employerId}`"
                            >{{ employer.employerName }}</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";
export default {
    name: "AdminViewAllProfiles",
    data() {
        return {
            listOfEmployers: [],
            listOfStudents: []
        };
    },
    methods: {
        loadListOfEmployersJsonData() {
            fetch(`${process.env.VUE_APP_REMOTE_API}/api/employers`, {
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
                .then(listOfEmployersData => {
                    this.listOfEmployers = listOfEmployersData;
                });
        },
        loadListOfStudentsJsonData() {
            fetch(`${process.env.VUE_APP_REMOTE_API}/api/students`, {
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
                .then(listOfStudentsData => {
                    this.listOfStudents = listOfStudentsData;
                });
        }
    },
    created() {
        this.loadListOfEmployersJsonData();
        this.loadListOfStudentsJsonData();
    }
};
</script>

<style scoped>
.admin-view-all-profiles {
    background: rgba(248, 249, 250, 0.94);
}

.student-choice-instruction {
    font-size: 1.1rem;
    font-weight: bold;
}

@media only screen and (max-width: 600px) {
    .admin-view-all-profiles {
        margin-top: 7rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
    }
}

@media only screen and (min-width: 600px) {
    .admin-view-all-profiles {
        margin-top: 8rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 2rem;
    }
}

@media only screen and (min-width: 992px) {
    .admin-view-all-profiles {
        padding: 5rem;
        margin: 10rem;
    }
}
</style>
