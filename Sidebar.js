import React from 'react';


import { RiDeviceRecoverFill } from "react-icons/ri";
import { MdCallSplit,MdOutlineKeyOff } from "react-icons/md";
import { IoIosCut } from "react-icons/io";
import { GiJoin } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import './Sidebar.css';
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2><HiOutlineBars3BottomLeft /></h2>
            <ul>
               <Link className='side-link' to='/recover'>
               <p><RiDeviceRecoverFill /></p>
                <li>Recover</li>
               </Link>
               <Link className='side-link' to = '/spliter'>
               <p><MdCallSplit/></p>
               <li>Spliter</li>
               </Link>
                <Link className='side-link' to='/pitcher'>
                <p><MdOutlineKeyOff /></p>
                <li>Pitcher</li>
                </Link>
                <Link className='side-link' to='/finder'>
                <p><IoIosCut /></p>
                <li>Key BPM Finder</li>
                </Link>
                <Link className='side-link' to='/joiner'>
                <p><GiJoin /></p>
                <li>Joiner</li>
                </Link>
                <Link className='side-link' to='/recoder'>
                <p><FaMicrophone /></p>
                <li>Recoder</li>
                </Link>
                <li>Karaoke</li>
            </ul>
        </div>
    );
};

export default Sidebar;
