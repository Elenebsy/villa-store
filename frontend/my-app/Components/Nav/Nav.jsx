import React from "react";
import "./navstyle.css";
export const Nav = () => {
return (
<div className="component">
<div className="head">
<img
className="cairo-haven-high"
alt="Cairo haven high"
src="cairo-haven-high-resolution-logo-white-transparent-2.png"
/>
<p className="find-your-next-stay">
Find your next stay
<br />
Search low prices on hotels, homes and much more..
</p>
<div className="main-bar">
<div className="div">Cairo_Haven.com</div>
<div className="overlap-group">
<div className="text-wrapper-2">Login</div>
</div>
<div className="overlap">
<div className="text-wrapper-3">Register</div>
</div>
<div className="overlap-2">
<div className="text-wrapper-4">About</div>
<div className="text-wrapper-5">Contacts</div>
</div>
</div>
</div>
<Deals
className="deals-instance"
iconChevronLeft="icon-chevron-left-2.png"
image="image.png"
vector="image.svg"
/>
</div>
);
};
export default Nav;
