import React from "react";
import { NavLink } from "react-router-dom";

export default function AboutSection() {
  return (
    <div>
      <h3 className="footer-headers">عن الشركة</h3>
      <ul className="footer-lists">
        <NavLink to={"about"}>من نحن</NavLink>
        <NavLink to={"contact"}>تواصل معنا</NavLink>
        <li>وسائل الدفع</li>
        <li>سياسية الخصوصية</li>
      </ul>
    </div>
  );
}
