import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import Lists from "@/pages/Lists.vue";
import addExam from "@/pages/addExam.vue";
import Login from "@/pages/Login.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const ExamsList = () => import(/* webpackChunkName: "common" */ "@/pages/ExamsList.vue");
const ParticularExam = () => import(/* webpackChunkName: "common" */ "@/pages/ParticularExam.vue");

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path:"/info",
    component: Dashboard,
    props: true,
  },
  {
    path:"/icons",
    component: Icons,
    props: true,
  },
  {
    path: "/lists",
    component: Lists,
    props: true,
  },
  {
    path: "/info/add",
    component: addExam,
  },
  {
    path: "/exams",
    component: ExamsList,
    props: true,
  },
  {
    path: "/particular-exam",
    component: ParticularExam,
    props: true,
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
