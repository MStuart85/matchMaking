import Vue from "vue";
import Router from "vue-router";
import auth from "./auth";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import StudentHome from "./views/StudentHome.vue";
import EmployerHome from "./views/EmployerHome.vue";
import AdminHome from "./views/AdminHome.vue";
import AdminCalendar from "./views/AdminCalendar.vue";
import AdminStudentPreferences from "./views/AdminStudentPreferences.vue";
import AdminViewAllProfiles from "./views/AdminViewAllProfiles.vue";
import EmployerCalendar from "./views/EmployerCalendar.vue";
import StudentCalendar from "./views/StudentCalendar.vue";
import VisitEmployerProfile from "./views/VisitEmployerProfile.vue";
import VisitStudentProfile from "./views/VisitStudentProfile.vue";
import Unauthorized from "./views/Unauthorized.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                requiresAuth: false,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                requiresAuth: false,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup,
            meta: {
                requiresAuth: false,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/studenthome",
            name: "studenthome",
            component: StudentHome,
            meta: {
                requiresAuth: true,
                requiresAdmin: false,
                requiresStudent: true,
                requiresEmployer: false
            }
        },
        {
            path: "/employerhome",
            name: "employerhome",
            component: EmployerHome,
            meta: {
                requiresAuth: true,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: true
            }
        },
        {
            path: "/adminhome",
            name: "adminhome",
            component: AdminHome,
            meta: {
                requiresAuth: false,
                requiresAdmin: true,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/admincalendar",
            name: "admincalendar",
            component: AdminCalendar,
            meta: {
                requiresAuth: false,
                requiresAdmin: true,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/adminstudentpreferences",
            name: "adminstudentpreferences",
            component: AdminStudentPreferences,
            meta: {
                requiresAuth: false,
                requiresAdmin: true,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/adminviewallprofiles",
            name: "adminviewallprofiles",
            component: AdminViewAllProfiles,
            meta: {
                requiresAuth: false,
                requiresAdmin: true,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/employercalendar",
            name: "employercalendar",
            component: EmployerCalendar,
            meta: {
                requiresAuth: true,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: true
            }
        },
        {
            path: "/studentcalendar",
            name: "studentcalendar",
            component: StudentCalendar,
            meta: {
                requiresAuth: true,
                requiresAdmin: false,
                requiresStudent: true,
                requiresEmployer: false
            }
        },
        {
            path: "/employers/:employerId",
            name: "visitemployerprofile",
            component: VisitEmployerProfile,
            meta: {
                requiresAuth: true,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/students/:studentId",
            name: "visitstudentprofile",
            component: VisitStudentProfile,
            meta: {
                requiresAuth: true,
                requiresAdmin: true,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/unauthorized",
            name: "unauthorized",
            component: Unauthorized,
            meta: {
                requiresAuth: true,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: false
            }
        },
        {
            path: "/*",
            name: "notfound",
            component: NotFound,
            meta: {
                requiresAuth: false,
                requiresAdmin: false,
                requiresStudent: false,
                requiresEmployer: false
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    const requiresStudent = to.matched.some(x => x.meta.requiresStudent);
    const requiresEmployer = to.matched.some(x => x.meta.requiresEmployer);
    const requiresAdmin = to.matched.some(x => x.meta.requiresAdmin);
    const user = auth.getUser();

    if (requiresAuth && !user) {
        next("/login");
    } else {
        if (requiresStudent && user.rol !== "student") {
            next("/unauthorized");
        } else if (requiresEmployer && user.rol !== "employer") {
            next("/unauthorized");
        } else if (requiresAdmin && user.rol !== "admin") {
            next("/unauthorized");
        }

        next();
    }
});

export default router;
