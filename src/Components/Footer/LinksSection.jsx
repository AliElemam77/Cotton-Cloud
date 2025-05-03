import React from "react";
import { NavLink } from "react-router-dom";

export default function LinksSection() {
  return (
    <div>
      <h3 className="footer-headers">الروابط</h3>
      <ul className="footer-lists">
        <NavLink to={""}>الرئيسية</NavLink>
        <NavLink to={"categories"}>الفئات</NavLink>
        <NavLink to={"profile"}>الصفحة الشخصية</NavLink>
        <NavLink to={"blog"}>المدونة</NavLink>
      </ul>
    </div>
  );
}
