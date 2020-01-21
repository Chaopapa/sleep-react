import {RouteConfig} from "react-router-config";
import {lazy} from "react";
const sleepRoute: RouteConfig = {
    path:'/sleep',
    exact:false,
    component: lazy(()=>import("@/pages/sleep/Sleep")),
}

export default sleepRoute;