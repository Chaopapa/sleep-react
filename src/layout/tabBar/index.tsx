import React from "react";
import "./style.scss";
import  {Icon} from "antd-mobile";
import {NavLink} from "react-router-dom";

interface tabType {
    id: number,
    title: string,
    icon: string,
    to: string
}

const tabList: tabType[] = [
    {
        id: 0,
        title: "首页",
        icon: 'home',
        to: '/home'
    },
    {
        id: 1,
        title: "发现",
        icon: 'home',
        to: '/found'
    },
    {
        id: 2,
        title: "开始睡觉",
        icon: 'home',
        to: '/sleep'
    },
    {
        id: 3,
        title: "商城",
        icon: 'home',
        to: '/shop'
    },
    {
        id: 4,
        title: "我的",
        icon: 'home',
        to: '/mine'
    }
]



const TabBar: React.FC<{}> = () => {
    return (
        <div className="tabBar-box">
            <div className="tabBar" >
                {tabList.map(item => {
                    return (<NavLink className="tabBar-item" to={item.to} key={item.id}>
                        <Icon type="check" size="lg" />
                        <span>{item.title}</span>
                    </NavLink>)
                })}
            </div>
        </div>
    )
}

export default TabBar;