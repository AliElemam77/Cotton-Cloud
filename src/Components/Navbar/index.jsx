import React from "react";
import UpperSection from "./UpperSection";

import LowerSection from "./LowerSection";

function index() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-fluid">
        <UpperSection />
      </div>

      <hr className="hidden lg:block lg:border-t lg:border-third-550 md:block md:border-t md:border-third-550" />

      <div className="md:container-fluid">
        <LowerSection />
      </div>
    </header>
  );
}

export default index;
