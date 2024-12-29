import HomePage from "@/pages/HomePage.vue";
import AddPage from "@/pages/AddPage.vue";
import DetailPage from "@/pages/DetailPage.vue";
import ListPage from "@/pages/ListPage.vue";
import EditPage from "@/pages/EditPage.vue";
import DefaulLayouts from "@/layouts/DefaulLayouts.vue";

export const routes = [
  {
    path: "/",
    component: DefaulLayouts,
    children: [
      {
        path: "/",
        name: "home",
        component: HomePage,
      },
      {
        path: "/add",
        name: "add",
        component: AddPage,
      },
      {
        path: "/detail/:id",
        name: "detail",
        component: DetailPage,
      },
      {
        path: "/list",
        name: "list",
        component: ListPage,
      },
      {
        path: "/edit/:id",
        name: "edit",
        component: EditPage,
      },
    ],
  },
];
