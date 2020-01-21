import {RouteConfig} from "react-router-config";
import {lazy} from "react";
const homeRoute: RouteConfig = {
    path:'/home',
    exact:false,
    component: lazy(()=>import("@/pages/home/home/Home")),
}

export default homeRoute;