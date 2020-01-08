<template>
    <div class="admin-student-preferences shadow rounded">
        <div class="row text-center align-items-top d-flex flex-nowrap">
            <div
                class="col-6 col-lg-3 employer-card"
                v-for="e in employersApplications"
                :key="e.employerId"
            >
                <h6>{{ e.employerName }}</h6>
                <ul class="list-unstyled">
                    <li v-for="s in e.studentApplicants" :key="s.studentId">
                        {{ s.studentFirstName }} {{ s.ranking }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";

export default {
    name: "AdminStudentPreferences",
    data() {
        return {
            employersApplications: []
        };
    },
    methods: {
        loadEmployersApplicationsJsonData() {
            fetch(
                `${process.env.VUE_APP_REMOTE_API}/api/employerstudent/rankings`,
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
                .then(employersApplicationsData => {
                    this.employersApplications = employersApplicationsData;
                });
        }
    },
    created() {
        this.loadEmployersApplicationsJsonData();
    }
};
</script>

<style scoped>
.admin-student-preferences {
    background: rgba(248, 249, 250, 0.94);
}

.admin-student-preferences > .row {
    overflow-x: auto;
    white-space: nowrap;
    display: block;
}

.admin-student-preferences > .row > .col-3 {
    display: inline-block;
    float: none;
}

.col-lg-3 {
    color: var(--tewhite);
    padding: 20px 0;
}

.col-lg-3:nth-child(4n + 1) {
    background: var(--tegray);
    opacity: 0.9;
}

.col-lg-3:nth-child(4n + 2) {
    background: var(--tegreen);
    opacity: 0.9;
}

.col-lg-3:nth-child(4n + 3) {
    background: var(--teblue);
    opacity: 0.9;
}

.col-lg-3:nth-child(4n + 4) {
    background: var(--tegold);
    opacity: 0.9;
}

.employer-card {
    min-height: 300px;
}

h6 {
    border-bottom: var(--tewhite) 1px solid;
    padding-bottom: 20px;
}

li {
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: var(--tewhite) 1px solid;
}

@media only screen and (max-width: 600px) {
    .admin-student-preferences {
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
    .admin-student-preferences {
        margin-top: 8rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 2rem;
    }
}

@media only screen and (min-width: 992px) {
    .admin-student-preferences {
        padding: 5rem;
        margin: 10rem;
    }
}
</style>
