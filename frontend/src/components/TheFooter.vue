<template>
    <footer class="row align-items-center">
        <div class="col-11 row">
            <div class="col-12 col-md-6 col-xl-4">
                <p class="heading">TECH ELEVATOR</p>
                <p class="underlined">
                    <a :href="'mailto:' + email">hello@techelevator.com</a>
                </p>
                <p class="underlined">
                    <a :href="'tel:' + phone">877.606.3203</a></p>
            </div>
            <div class="top-margin-for-mobile col-12 col-md-6 col-xl-2">
                <p class="heading">COMPANY</p>
                <p class="underlined"><a href="https://www.techelevator.com/who-we-are">Who We Are</a></p>
                <p class="underlined"><a href="https://www.techelevator.com/join-our-team">Join Our Team</a></p>
                <p class="underlined"><a href="https://www.techelevator.com/press">Press</a></p>
            </div>
            <div class="top-margin-for-mobile top-margin-for-tablet col-12 col-md-6 col-xl-3">
                <p class="heading">COMMUNITY</p>
                <p class="underlined"><a href="https://www.techelevator.com/events">Events</a></p>
                <p class="underlined"><a href="http://www.techelevator.com/contact">Contact</a></p>
                <p class="underlined"><a href="https://www.techelevator.com/faqs">FAQs</a></p>
            </div>
            <div class="top-margin-for-mobile top-margin-for-tablet col-12 col-md-6 col-xl-3">
                <p class="icon-link-title">FOLLOW US</p>
                <a class="icon-link" href="https://twitter.com/Tech_Elevator"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                ></a>
                <a class="icon-link" href="http://instagram.com/techelevator"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
                <a class="icon-link" href="http://www.facebook.com/techelevator"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                ></a>
                <a class="icon-link" href="http://www.linkedin.com/school/tech-elevator"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                ></a>
                <a class="icon-link" href="https://www.youtube.com/c/Techelevatorcodeschool"
                    ><i class="fa fa-youtube-play" aria-hidden="true"></i
                ></a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "TheFooter",
    data() {
        return {
            email: "hello@techelevator.email",
            phone: "877-606-3203"
        };
    }
};
</script>

<style scoped>
footer {
    background: #3e4246;
    color: #81878c;
    font-weight: bold;
    padding-top: 60px !important;
    padding-bottom: 60px !important;
}

p {
    margin: 0;
}

.heading {
    margin-bottom: 0.8rem;
}

.underlined {
    text-decoration: underline;
}

.underlined a {
    color: #81878c;
}

.underlined a:hover {
    color: var(--teblue);
}

.icon-link-title {
    margin-bottom: 1.6rem;
}

.icon-link {
    margin-right: 0.7rem;
    font-size: 1rem;
    background: var(--tegreen);
    color: var(--tewhite);
    border-radius: 50%;
}

.icon-link:nth-of-type(1) {
    padding: 0.4rem 0.57rem;
}

.icon-link:nth-of-type(2) {
    padding: 0.4rem 0.6rem;
}

.icon-link:nth-of-type(3) {
    padding: 0.4rem 0.73rem;
}

.icon-link:nth-of-type(4) {
    padding: 0.4rem 0.6rem;
}

.icon-link:nth-of-type(5) {
    padding: 0.4rem 0.55rem;
}

.icon-link:hover {
    background: var(--teblue);
}

@media only screen and (max-width: 600px) {
    .top-margin-for-mobile {
        margin-top: 2.5rem;
    }
}

@media only screen and (max-width: 1199px) {
    .top-margin-for-tablet {
        margin-top: 2.5rem;
    }
}
</style>
