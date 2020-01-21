
import { RouteConfig } from "react-router-config";
// import {lazy} from "react";
import homeRoute from "./module/home";
import foundRoute from "./module/found";
import mineRoute from "./module/mine";
import sleepRoute from "./module/sleep";
import shopRoute from "./module/shop";

const routes: RouteConfig[] = [
    homeRoute,
    foundRoute,
    mineRoute,
    sleepRoute,
    shopRoute

]
    ;

export default routes;