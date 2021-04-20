import "./scss/index.scss";
import { Router } from "./core/routers/Router";
import { DashboardPage } from "./pages/DashboardPage";
import { ExcelPage } from "./pages/ExcelPage";
//selector, routes
new Router("#app", {
  dashboard: DashboardPage,
  excel: ExcelPage,
});
