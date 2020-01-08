<template>
    <div class="employer-profile shadow rounded">
        <h1>{{ employer.employerName }}</h1>
        <hr />
        <br />
        <div class="row justify-content-around align-items-top">
            <div class="col-12 col-md-8">
                <h2>Representatives:</h2>
                <ul>
                    <li
                        v-for="representative in employerRepresentatives"
                        :key="representative.firstName"
                    >
                        <h6>
                            {{ representative.firstName }}
                            {{ representative.lastName }}
                        </h6>
                        <ul>
                            <li>{{ representative.jobTitle }}</li>
                            <li>
                                <a :href="`mailto:` + representative.email">{{
                                    representative.email
                                }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p>
                    {{ employer.employerDescription }}
                </p>

                <h2>Available Jobs:</h2>
                <ul>
                    <li
                        v-for="position in employerPositions"
                        :key="position.jobTitle"
                    >
                        <a :href="position.url" target="_blank">{{
                            position.jobTitle
                        }}</a>
                    </li>
                </ul>
            </div>
            <div class="mt-4 mt-md-0 col-12 col-md-4">
                <img
                    :src="employer.employerImgUrl"
                    :alt="employer.employerName"
                />
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";
export default {
    name: "EmployerProfile",
    data() {
        return {
            employer: {
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
            employerRepresentatives: [],
            employerPositions: []
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
                    this.employer = employerData;
                    this.parseEmployerRepresentativeData(
                        this.employer.employerRepresentatives
                    );
                    this.parseEmployerPositionsData(
                        this.employer.employerPositions
                    );
                });
        },
        parseEmployerRepresentativeData(representativeString) {
            const dataChunk = representativeString.split("$$$$$");
            const representativeCount = dataChunk.length / 4;

            for (let i = 0; i < representativeCount; i++) {
                const representative = {
                    firstName: "",
                    lastName: "",
                    email: "",
                    jobTitle: ""
                };

                for (let j = i * 4; j < i * 4 + 4; j++) {
                    if (j % 4 === 0) {
                        representative.firstName = dataChunk[j];
                    } else if (j % 4 === 1) {
                        representative.lastName = dataChunk[j];
                    } else if (j % 4 === 2) {
                        representative.email = dataChunk[j];
                    } else {
                        representative.jobTitle = dataChunk[j];
                    }
                }

                this.employerRepresentatives.push(representative);
            }
        },
        parseEmployerPositionsData(positionsString) {
            const dataChunk = positionsString.split("$$$$$");
            const positionsCount = dataChunk.length / 2;

            for (let i = 0; i < positionsCount; i++) {
                const position = {
                    jobTitle: "",
                    url: ""
                };

                for (let j = i * 2; j < i * 2 + 2; j++) {
                    if (j % 2 === 0) {
                        position.jobTitle = dataChunk[j];
                    } else {
                        position.url = dataChunk[j];
                    }
                }

                this.employerPositions.push(position);
            }
        }
    },
    created() {
        this.loadEmployerJsonData(auth.getUser().sub);
    }
};
</script>

<style scoped>
.employer-profile {
    background: rgba(248, 249, 250, 0.94);
}

h2 {
    font-size: 1.25rem;
}

img {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .employer-profile {
        margin-top: 7rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
    }
}

@media only screen and (min-width: 600px) {
    .employer-profile {
        margin-top: 8rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 2rem;
    }
}

@media only screen and (min-width: 992px) {
    .employer-profile {
        padding: 5rem;
        margin: 10rem;
    }
}
</style>
