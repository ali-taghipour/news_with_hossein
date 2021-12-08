import React, { useState } from 'react'

import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'
import Button from '../../../components/Theme/Button';

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small")
    return (
        <div style={{backgroundColor:"#212121"}} className={`flex flex-col rounded justify-between w-24 h-1/4 mb-6 transition-all duration-300  ml-6 shadow-lg mt-10 ${navSize == "small" ? "w-20" : "w-80"}`} >
            <div className={`flex flex-col  w-full py-6 ${navSize == "small" ? "items-center" : "  items-start"}`}> 
             <div className={`flex flex-col mb-8  w-full   ${navSize == "small" ? "items-center" : "items-start"}`}>
                <div className="flex text-center">
                    <img  className={`${navSize == "small" ? "w-12 h-12 mt-4 rounded-full" : "ml-8 w-12 h-12 mt-4 rounded-full"}` } src={"./img/avatar.jpg"} />
                    <div  className={` ${navSize == "small" ? "hidden" : "flex mt-8 flex-col justify-center"}`}>
                        <h3 className="ml-6 text-white" >Sylwia Weller</h3>
                    </div>
                </div>
            </div>    
             <Button
                        circle
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }}
                        type="secondary"
                        icon="burger"
                        className="w-6 h-6 mt-8 bg-transparent"
                    />
           <div className="w-full mt-6">
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active />
                <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <div className=" mt-36" style={{backgroundColor :"#9da0a6"}}>
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
                </div>
            </div>

            </div>
           
        </div>
    )
}
