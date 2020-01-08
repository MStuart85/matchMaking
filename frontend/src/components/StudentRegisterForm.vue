<template>
    <div>
        <h1>Enter Your Information</h1>
        <hr />
        <br />
        <div>
            <form @submit="registerStudent">
                <div class="form-group">
                    <label for="studentFirstName">First Name: </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                        v-model.trim="student.studentFirstName"
                        autofocus
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="studentLastName">Last Name: </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                        v-model.trim="student.studentLastName"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="studentLinkedinUrl">LinkedIn URL: </label>
                    <input
                        type="url"
                        class="form-control"
                        placeholder="Enter your profile URL from LinkedIn"
                        v-model.trim="student.studentLinkedinUrl"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="studentImgUrl"
                        >Tech Elevator Profile Photo URL: 
                    </label>
                    <input
                        type="url"
                        class="form-control"
                        placeholder="Enter your Tech Elevator profile photo URL"
                        v-model.trim="student.studentImgUrl"
                        required
                    />
                </div>
                <br />
                <div class="text-center">
                    <button class="te-btn" type="submit">
                        Save Personal Information
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import auth from "../auth";
import swal from "sweetalert";

export default {
    name: "StudentRegisterForm",
    data() {
        return {
            student: {
                studentFirstName: "",
                studentLastName: "",
                studentLinkedinUrl: "",
                studentImgUrl: ""
            }
        };
    },
    methods: {
        registerStudent() {
            fetch(`${process.env.VUE_APP_REMOTE_API}/api/registerstudent`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + auth.getToken(),
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.student)
            }).then(response => {
                if (response.ok) {
                    swal("Student Information Successfully Saved!");
                }
            });
        }
    }
};
</script>

<style></style>
