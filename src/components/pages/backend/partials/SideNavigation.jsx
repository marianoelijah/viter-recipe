<<<<<<< HEAD
import { imgPath } from "@/components/helpers/functions-general";
import { ChartColumnStacked, Clapperboard, LayoutDashboard, Megaphone, Star, UtensilsCrossed } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      title: "Recipe",
      slug: "/admin/recipe",
      icon: <UtensilsCrossed size={16} />,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <ChartColumnStacked size={20} />,
    },
    {
      title: "Level",
      slug: "/admin/level",
      icon: <UtensilsCrossed size={16} />,
    },
  ];
=======
import { imgPath } from '@/components/helpers/functions-general';
import { ChartBarStacked, Clapperboard, HandPlatter, LayoutDashboard, Megaphone, Star, UtensilsCrossed } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavigation = ({menu}) => {

    const links = [
        {
            title: "Dashboard",
            slug: "/admin/dashboard",
            icon: <LayoutDashboard size={16}/>,
        },
        {
            title: "Food",
            slug: "/admin/food",
            icon: <UtensilsCrossed size={16}/>,
        },
        {
            title: "Category",
            slug: "/admin/category",
            icon: <UtensilsCrossed size={16}/>,
        },
        {
            title: "Level",
            slug: "/admin/level",
            icon: <UtensilsCrossed size={16}/>,
        },
    ];

>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
  return (
    <>
        <aside className="p-4 border-r border-line">
        <img src={`${imgPath}/logo-recipe.png`} alt="" className="w-[80%] h-[90px] mx-auto mt-2"/>

        <nav>
            <ul className="mt-10">
                {links.map((item,key) => (
                    <li className={`${menu === item.slug.replaceAll("/admin/", "") ? "border-accent bg-accent opacity-100 text-center text-white" : ""} p-2 mb-2 rounded-md border border-transparent opacity-70 hover:opacity-100`} key={key}>
                        <NavLink to={`${item.slug}`} className = "flex gap-2 text-base items-center"> 
                        {item.icon} {item.title}</NavLink></li>
                ))}
                
            </ul>
        </nav>
        </aside>
    </>
  )
}

export default SideNavigation