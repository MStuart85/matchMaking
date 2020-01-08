<template>
    <div class="student-home shadow rounded">
        <StudentProfile v-if="hasStudentData" />
        <StudentRegisterForm v-else />
        <br />
        <hr />
        <br />
        <div class="row justify-content-between align-items-center">
            <div class="col-12 col-md-6">
                <StudentRankingDisplay v-if="hasStudentRankingData" />
                <StudentRankingForm v-else />
            </div>
            <div class="col-12 col-md-5 companies-list">
                <h2>Companies</h2>
                <ul>
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
import StudentProfile from "../components/StudentProfile";
import StudentRegisterForm from "../components/StudentRegisterForm";
import StudentRankingDisplay from "../components/StudentRankingDisplay";
import StudentRankingForm from "../components/StudentRankingForm";

export default {
    name: "StudentHome",
    components: {
        StudentProfile,
        StudentRegisterForm,
        StudentRankingDisplay,
        StudentRankingForm
    },
    data() {
        return {
            hasStudentData: false,
            hasStudentRankingData: false,
            listOfEmployers: [],
            rankingSubmitList: [
                { studentId: "", employerId: "", ranking: 1 },
                { studentId: "", employerId: "", ranking: 2 },
                { studentId: "", employerId: "", ranking: 3 },
                { studentId: "", employerId: "", ranking: 4 }
            ]
        };
    },
    methods: {
        loadStudentJsonData(userName) {
            fetch(
                `${process.env.VUE_APP_REMOTE_API}/api/students/${userName}`,
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
                .then(studentData => {
                    if (studentData) {
                        this.hasStudentData = true;
                    } else {
                        this.hasStudentData = false;
                    }
                });
        },
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
        loadStudentRankingJsonData(userName) {
            fetch(
                `${process.env.VUE_APP_REMOTE_API}/api/studentranking/${userName}`,
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
                .then(studentRankingData => {
                    if (studentRankingData.student) {
                        this.hasStudentRankingData = true;
                    } else {
                        this.hasStudentRankingData = false;
                    }
                });
        }
    },
    created() {
        this.loadStudentJsonData(auth.getUser().sub);
        this.loadListOfEmployersJsonData();
        this.loadStudentRankingJsonData(auth.getUser().sub);
    }
};
</script>

<style scoped>
.student-home {
    background: rgba(248, 249, 250, 0.94);
}

.student-choice-instruction {
    font-size: 1.1rem;
    font-weight: bold;
}

.companies-list {
    padding-left: 1.8rem;
    border-left: 1px solid var(--tegray);
}

ul {
    color: var(--tegray);
}

@media only screen and (max-width: 600px) {
    .student-home {
        margin-top: 7rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
    }

    .companies-list {
        margin-top: 1.5rem;
        border-left: none;
    }
}

@media only screen and (min-width: 600px) {
    .student-home {
        margin-top: 8rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 2rem;
    }
}

@media only screen and (min-width: 992px) {
    .student-home {
        padding: 5rem;
        margin: 10rem;
    }
}
</style>
