import {RouteConfig} from "react-router-config";
import {lazy} from "react";
const mineRoute: RouteConfig = {
    path:'/mine',
    exact:false,
    component: lazy(()=>import("@/pages/mine/mine/Mine")),
}

export default mineRoute;