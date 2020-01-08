<template>
    <div>
        <p class="student-choice-instruction">
            Please select the top 4 companies you would like to interview with.
        </p>
        <form @submit="saveRankingList">
            <div class="form-group">
                <label for="first-choice">First Choice:</label>
                <select
                    class="form-control"
                    v-model.trim="rankingSubmitList[0].employerId"
                >
                    <option
                        v-for="employer in listOfEmployers"
                        :key="employer.employerId"
                        :value="employer.employerId"
                        >{{ employer.employerName }}</option
                    >
                </select>
            </div>
            <div class="form-group">
                <label for="second-choice">Second Choice:</label>
                <select
                    class="form-control"
                    v-model.trim="rankingSubmitList[1].employerId"
                >
                    <option
                        v-for="employer in listOfEmployers"
                        :key="employer.employerId"
                        :value="employer.employerId"
                        >{{ employer.employerName }}</option
                    >
                </select>
            </div>
            <div class="form-group">
                <label for="third-choice">Third Choice:</label>
                <select
                    class="form-control"
                    v-model.trim="rankingSubmitList[2].employerId"
                >
                    <option
                        v-for="employer in listOfEmployers"
                        :key="employer.employerId"
                        :value="employer.employerId"
                        >{{ employer.employerName }}</option
                    >
                </select>
            </div>
            <div class="form-group">
                <label for="fourth-choice">Fourth Choice:</label>
                <select
                    class="form-control"
                    v-model.trim="rankingSubmitList[3].employerId"
                >
                    <option
                        v-for="employer in listOfEmployers"
                        :key="employer.employerId"
                        :value="employer.employerId"
                        >{{ employer.employerName }}</option
                    >
                </select>
            </div>
            <br />
            <div class="text-center">
                <button class="te-btn">Submit Preference</button>
            </div>
        </form>
    </div>
</template>

<script>
import auth from "../auth";
import swal from "sweetalert";

export default {
    name: "StudentRankingForm",
    data() {
        return {
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
        saveRankingList() {
            let seen = new Set();
            const hasDuplicates = this.rankingSubmitList.some(
                e => seen.size === seen.add(e.employerId).size
            );
            const hasEmpty =
                this.rankingSubmitList.findIndex(e => e.employerId === "") !==
                -1;

            if (hasDuplicates || hasEmpty) {
                return swal("Empty ranking or repetitive selection!");
            }

            fetch(`${process.env.VUE_APP_REMOTE_API}/api/saveranking`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + auth.getToken(),
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.rankingSubmitList)
            }).then(response => {
                if (response.ok) {
                    swal("Ranking Preference Successfully Saved!");
                }
            });
        }
    },
    created() {
        this.loadListOfEmployersJsonData();
    }
};
</script>

<style scoped></style>
