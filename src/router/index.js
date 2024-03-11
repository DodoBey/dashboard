import LandingPage from "../components/LandingPage/LandingPage.vue";
import TheSetup from "../components/Setup/TheSetup.vue";
import SetCredentials from "../components/Setup/SetCredentials/SetCredentials.vue";
import TheDashboard from "../components/Dashboard/TheDashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/setup", name: "Setup", component: TheSetup },
  { path: "/setcredentials", name: "Credentials", component: SetCredentials },
  { path: "/dashboard", name: "Dashboard", component: TheDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
