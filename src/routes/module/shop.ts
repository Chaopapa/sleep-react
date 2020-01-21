import {RouteConfig} from "react-router-config";
import {lazy} from "react";
const shopRoute: RouteConfig = {
    path:'/shop',
    exact:false,
    component: lazy(()=>import("@/pages/shop/shop/Shop")),
}

export default shopRoute;