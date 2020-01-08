<template>
    <div class="employer-register-form shadow rounded">
        <h2>Enter Company Information</h2>
        <hr />
        <br />
        <form @submit="registerEmployer">
            <div class="form-group">
                <label for="employerName">Company Name:</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Employer Name"
                    v-model.trim="employer.employerName"
                    required
                    autofocus
                />
            </div>
            <div class="form-group">
                <label for="tableCount"
                    >Number of Tables Needed for Matchmaking:</label
                >
                <select
                    class="form-control"
                    v-model.trim="employer.tableCount"
                    required
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div class="form-group">
                <label for="daysToAttend">Days to Attend:</label>
                <select
                    class="form-control"
                    v-model.trim="employer.daysToAttend"
                    required
                >
                    <option value="day1">Matchmaking Day 1</option>
                    <option value="day2">Matchmaking Day 2</option>
                    <option value="both">Both</option>
                </select>
            </div>
            <br />
            <hr />
            <br />
            <div class="form-group representative-field-wrapper">
                <div
                    class="d-md-flex justify-content-between align-items-center"
                >
                    <label for="employerRepresentatives"
                        >Who will be coming to the Matchmaking Event?</label
                    >
                    <button
                        class="te-btn add-representative-btn"
                        type="button"
                        @click="addRepresentativeField"
                    >
                        Add More Representatives
                    </button>
                </div>
                <br />
                <div
                    v-for="index in representativeCount"
                    :key="index"
                    class="representive-fieldset"
                >
                    <div
                        class="representative-no d-md-flex justify-content-between align-items-center"
                    >
                        <h6 class="text-center">Representative {{ index }}:</h6>

                        <button
                            :data-itemindex="index - 1"
                            class="te-btn remove-representative-btn"
                            @click="removeRepresentativeField($event)"
                            type="button"
                        >
                            Remove This Representative
                        </button>
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="representativeFirstName"
                            >RepresentativeFirstName</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            v-model.trim="representatives[index - 1].firstName"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="representativeLastName"
                            >RepresentativeLastName</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            v-model.trim="representatives[index - 1].lastName"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="representativeEmail"
                            >RepresentativeEmail</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            v-model.trim="representatives[index - 1].email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="representativeEmail"
                            >RepresentativeJobTitle</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            v-model.trim="representatives[index - 1].jobTitle"
                            placeholder="Job Title"
                            required
                        />
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div class="form-group representative-field-wrapper">
                <div
                    class="d-md-flex justify-content-between align-items-center"
                >
                    <label for="employerPositions"
                        >What are the positions available at your
                        company?</label
                    >
                    <button
                        class="te-btn add-position-btn"
                        type="button"
                        @click="addPositionField"
                    >
                        Add a Position
                    </button>
                </div>
                <br />
                <div
                    v-for="index in positionCount"
                    :key="index"
                    class="position-fieldset"
                >
                    <div
                        class="position-no d-md-flex justify-content-between align-items-center"
                    >
                        <h6 class="text-center">Position {{ index }}:</h6>

                        <button
                            :data-itemindex="index - 1"
                            class="te-btn remove-position-btn"
                            @click="removePositionField($event)"
                            type="button"
                        >
                            Remove This Position
                        </button>
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="positionTitle"
                            >PositionTitle</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            v-model.trim="positions[index - 1].title"
                            placeholder="Job Title"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="positionUrl"
                            >PositionUrl</label
                        >
                        <input
                            type="url"
                            class="form-control"
                            v-model.trim="positions[index - 1].url"
                            placeholder="URL of the job detail"
                            required
                        />
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div class="form-group">
                <label for="employerDescription">Company Description:</label>
                <textarea
                    type="text"
                    placeholder="Brief Description"
                    rows="5"
                    class="form-control"
                    v-model.trim="employer.employerDescription"
                    required
                ></textarea>
            </div>
            <div class="form-group">
                <label for="employerImgUrl">Company Image URL:</label>
                <input
                    class="form-control"
                    type="url"
                    placeholder="Company Image Url"
                    v-model.trim="employer.employerImgUrl"
                    required
                />
            </div>
            <div class="form-group">
                <label for="employerNote">Other Notes:</label>
                <textarea
                    type="text"
                    class="form-control"
                    placeholder="Additional Info"
                    rows="3"
                    v-model.trim="employer.employerNote"
                    required
                ></textarea>
            </div>
            <button class="te-btn" type="submit">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import auth from "../auth";
import swal from "sweetalert";
export default {
    name: "EmployerHome",
    data() {
        return {
            employer: {
                employerName: "",
                tableCount: "",
                daysToAttend: "",
                employerRepresentatives: "",
                employerPositions: "",
                employerImgUrl: "",
                employerDescription: "",
                employerNote: ""
            },
            representatives: [
                { firstName: "", lastName: "", email: "", jobTitle: "" }
            ],
            representativeCount: 1,
            positions: [{ title: "", url: "" }],
            positionCount: 1
        };
    },
    methods: {
        registerEmployer() {
            const rStrings = this.representatives.map(r =>
                Object.values(r).join("$$$$$")
            );
            const rString = rStrings.join("$$$$$");
            this.employer.employerRepresentatives = rString;

            const pStrings = this.positions.map(p =>
                Object.values(p).join("$$$$$")
            );
            const pString = pStrings.join("$$$$$");
            this.employer.employerPositions = pString;

            fetch(`${process.env.VUE_APP_REMOTE_API}/api/registeremployer`, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + auth.getToken(),
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.employer)
            }).then(response => {
                if (response.ok) {
                    swal("Company Information Successfully Saved!");
                }
            });
        },
        addRepresentativeField() {
            this.representatives.push({
                firstName: "",
                lastName: "",
                email: "",
                jobTitle: ""
            });
            this.representativeCount++;
        },
        addPositionField() {
            this.positions.push({
                title: "",
                url: ""
            });
            this.positionCount++;
        },
        removeRepresentativeField(event) {
            if (this.representativeCount === 1) {
                return swal("There needs to be at least one representative.");
            }
            const clickedItemIndex = event.target.dataset.itemindex;
            this.representatives.splice(clickedItemIndex, 1);
            this.representativeCount--;
        },
        removePositionField(event) {
            if (this.positionCount === 1) {
                return swal(
                    "There needs to be at least one available position."
                );
            }
            const clickedItemIndex = event.target.dataset.itemindex;
            this.positions.splice(clickedItemIndex, 1);
            this.positionCount--;
        }
    }
};
</script>

<style scoped>
.employer-register-form {
    background: rgba(248, 249, 250, 0.94);
}

.representative-no,
.position-no {
    margin-bottom: 1rem;
}

.representative-no h6,
.position-no h6 {
    margin: 0;
}

.add-representative-btn,
.remove-representative-btn,
.add-position-btn,
.remove-position-btn {
    padding: 2px 10px;
}

.remove-representative-btn,
.remove-position-btn {
    background-color: var(--tered);
}

.remove-representative-btn:hover,
.remove-position-btn:hover {
    background-color: var(--tegold);
    border-color: var(--tegold);
}

@media only screen and (max-width: 600px) {
    .employer-register-form {
        margin-top: 7rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
    }
}

@media only screen and (min-width: 600px) {
    .employer-register-form {
        margin-top: 8rem;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 2rem;
    }
}

@media only screen and (min-width: 992px) {
    .employer-register-form {
        padding: 5rem;
        margin: 10rem;
    }
}
</style>
