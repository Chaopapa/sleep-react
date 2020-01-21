import {RouteConfig} from "react-router-config";
import {lazy} from "react";
const foundRoute: RouteConfig = {
    path:'/found',
    exact:false,
    component: lazy(()=>import("@/pages/found/found/Found")),
}

export default foundRoute;