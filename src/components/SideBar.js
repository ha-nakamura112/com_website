import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiUserCircle, HiShoppingCart, HiUserGroup, HiOfficeBuilding } from "react-icons/hi";
import styles from "../css/SideBar.module.css";
import "../css/active.css";
import Footer from "./Footer";

const SideBar = ()=>{
  const [isOpened, setIsOpened] = useState(false);
  
  return <section id="sidebar" className={isOpened ? "isOpened" : "isClosed"}>
    <button onClick={()=>setIsOpened(!isOpened)}><HiMenu/></button>
    <div></div>
    <article>
      {isOpened ? <ul><HiUserCircle/>Login</ul> : <HiUserCircle/>}
    </article>
    <article>
      {isOpened ? <ul><HiShoppingCart/>Market Place</ul> : <HiShoppingCart/>}
    </article>
    <article>
      {isOpened ? <ul><HiOfficeBuilding/>Find a job</ul> : <HiOfficeBuilding/>}
    </article>
    <article>
      {isOpened ? <ul><HiUserGroup/>Community</ul> : <HiUserGroup/>}
    </article>
    {isOpened && <Footer/>}
  </section>
}
export default SideBar;