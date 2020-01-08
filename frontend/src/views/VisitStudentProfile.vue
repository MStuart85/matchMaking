<template>
    <div class="student-home shadow rounded">
        <!-- student profile -->
        <div>
            <h1>
                {{ student.studentFirstName }} {{ student.studentLastName }}
            </h1>
            <hr />
            <br />
            <div class="row justify-content-around">
                <div class="col-12 col-md-6">
                    <h2>Contact Information</h2>
                    <ul>
                        <li>
                            <a :href="`mailto:${student.studentEmail}`">{{
                                student.studentEmail
                            }}</a>
                        </li>
                        <li>
                            <a
                                :href="student.studentLinkedinUrl"
                                target="_blank"
                                >{{
                                    `linkedin.com${
                                        student.studentLinkedinUrl.split(
                                            ".com"
                                        )[1]
                                    }`
                                }}</a
                            >
                        </li>
                    </ul>
                    <img
                        :src="student.studentImgUrl"
                        :alt="
                            student.studentFirstName +
                                ' ' +
                                student.studentLastName
                        "
                    />
                </div>
                <div class="col-12 col-md-6">
                    <div class="text-left">
                        <h2>Your Preferences</h2>
                        <ul class="list-unstyled">
                            <li class="ml-4 mt-4">
                                <img
                                    :src="require('../assets/images/one.png')"
                                    class="icon"
                                    alt="Top 1: "
                                /><router-link
                                    :to="
                                        `/employers/${studentRanking.rankedEmployers['1'].employerId}`
                                    "
                                >
                                    {{
                                        studentRanking.rankedEmployers["1"]
                                            .employerName
                                    }}</router-link
                                >
                            </li>
                            <li class="ml-4 mt-4">
                                <img
                                    :src="require('../assets/images/two.png')"
                                    class="icon"
                                    alt="Top 2: "
                                />
                                <router-link
                                    :to="
                                        `/employers/${studentRanking.rankedEmployers['2'].employerId}`
                                    "
                                >
                                    {{
                                        studentRanking.rankedEmployers["2"]
                                            .employerName
                                    }}</router-link
                                >
                            </li>
                            <li class="ml-4 mt-4">
                                <img
                                    :src="require('../assets/images/three.png')"
                                    class="icon"
                                    alt="Top 3: "
                                />
                                <router-link
                                    :to="
                                        `/employers/${studentRanking.rankedEmployers['3'].employerId}`
                                    "
                                >
                                    {{
                                        studentRanking.rankedEmployers["3"]
                                            .employerName
                                    }}</router-link
                                >
                            </li>
                            <li class="ml-4 mt-4">
                                <img
                                    :src="require('../assets/images/four.png')"
                                    class="icon"
                                    alt="Top 4: "
                                />
                                <router-link
                                    :to="
                                        `/employers/${studentRanking.rankedEmployers['4'].employerId}`
                                    "
                                >
                                    {{
                                        studentRanking.rankedEmployers["4"]
                                            .employerName
                                    }}</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";

export default {
    name: "StudentHome",
    data() {
        return {
            student: {
                studentFirstName: "",
                studentLastName: "",
                studentEmail: "",
                studentLinkedinUrl: "",
                studentImgUrl: ""
            },
            studentRanking: {
                student: {
                    studentId: "",
                    studentFirstName: "",
                    studentLastName: "",
                    studentEmail: "",
                    studentLinkedinUrl: "",
                    studentImgUrl: ""
                },
                rankedEmployers: {
                    "1": {
                        employerId: "",
                        employerName: "",
                        employerEmail: "",
                        tableCount: "",
                        daysToAttend: "",
                        employerRepresentatives: "",
                        employerPositions: "",
                        employerImgUrl: "",
                        employerDescription: "",
                        employerNote: ""
                    },
                    "2": {
                        employerId: "",
                        employerName: "",
                        employerEmail: "",
                        tableCount: "",
                        daysToAttend: "",
                        employerRepresentatives: "",
                        employerPositions: "",
                        employerImgUrl: "",
                        employerDescription: "",
                        employerNote: ""
                    },
                    "3": {
                        employerId: "",
                        employerName: "",
                        employerEmail: "",
                        tableCount: "",
                        daysToAttend: "",
                        employerRepresentatives: "",
                        employerPositions: "",
                        employerImgUrl: "",
                        employerDescription: "",
                        employerNote: ""
                    },
                    "4": {
                        employerId: "",
                        employerName: "",
                        employerEmail: "",
                        tableCount: "",
                        daysToAttend: "",
                        employerRepresentatives: "",
                        employerPositions: "",
                        employerImgUrl: "",
                        employerDescription: "",
                        employerNote: ""
                    }
                }
            }
        };
    },
    methods: {
        loadStudentJsonData(studentId) {
            fetch(
                `${process.env.VUE_APP_REMOTE_API}/api/visitstudents/${studentId}`,
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
                    this.student = studentData;
                });
        },
        loadStudentRankingJsonData(studentId) {
            fetch(
                `${process.env.VUE_APP_REMOTE_API}/api/visitstudentranking/${studentId}`,
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
                    this.studentRanking = studentRankingData;
                });
        }
    },
    created() {
        this.loadStudentJsonData(this.$route.params.studentId);
        this.loadStudentRankingJsonData(this.$route.params.studentId);
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
    border-left: 1px solid var(--tegray);
}

img {
    width: 50%;
    border-radius: 50%;
}

.icon {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
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
