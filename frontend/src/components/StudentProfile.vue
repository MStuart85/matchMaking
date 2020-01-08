<template>
    <div>
        <h1>{{ student.studentFirstName }} {{ student.studentLastName }}</h1>
        <hr />
        <br />
        <div class="row justify-content-around">
            <div class="col-8">
                <h2>Contact Information </h2>
                <ul>
                    <li>
                        <a :href="`mailto:${student.studentEmail}`">{{
                            student.studentEmail
                        }}</a>
                    </li>
                    <li>
                        <a :href="student.studentLinkedinUrl" target="_blank">{{
                            `linkedin.com${student.studentLinkedinUrl.split(".com")[1]}`
                        }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-4">
                <img
                    :src="student.studentImgUrl"
                    :alt="
                        student.studentFirstName + ' ' + student.studentLastName
                    "
                />
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";

export default {
    name: "StudentProfile",
    data() {
        return {
            student: {
                studentFirstName: "",
                studentLastName: "",
                studentEmail: "",
                studentLinkedinUrl: "",
                studentImgUrl: ""
            }
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
                    this.student = studentData;
                });
        }
    },
    created() {
        this.loadStudentJsonData(auth.getUser().sub);
    }
};
</script>

<style scoped>
img {
    border-radius: 50%;
    width: 100%;
}
</style>
