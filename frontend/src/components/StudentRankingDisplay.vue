<template>
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
                        studentRanking.rankedEmployers["1"].employerName
                    }}</router-link
                >
            </li>
            <li class="ml-4 mt-4">
                <img :src="require('../assets/images/two.png')" class="icon" alt="Top 2: " />
                <router-link
                    :to="
                        `/employers/${studentRanking.rankedEmployers['2'].employerId}`
                    "
                    >
                    {{
                        studentRanking.rankedEmployers["2"].employerName
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
                        studentRanking.rankedEmployers["3"].employerName
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
                        studentRanking.rankedEmployers["4"].employerName
                    }}</router-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
import auth from "../auth";

export default {
    name: "StudentRankingDisplay",
    data() {
        return {
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
                    this.studentRanking = studentRankingData;
                });
        }
    },
    created() {
        this.loadStudentRankingJsonData(auth.getUser().sub);
    }
};
</script>

<style scoped>
    .icon {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
    }
</style>
