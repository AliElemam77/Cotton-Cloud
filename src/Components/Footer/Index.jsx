import React from "react";
import FooterForm from "./FooterForm";
import CopyRight from "./CopyRight";
import ContactSection from "./ContactSection";
import LinksSection from "./LinksSection";
import AboutSection from "./AboutSection";
import FooterMain from "./FooterMain";

export default function Index() {
  return (
    <footer className=" bg-primary-550 text-third-100">
      <div className="container-fluid md:pt-16">
        <div className="grid grid-cols-2 gap-y-7 md:gap-y-10 md:gap-x-6 md:grid-cols-12">
          <div className="flex flex-col order-1 gap-y-7 col-span-full md:col-span-4">
            <FooterMain />
            <ContactSection />
          </div>
          <div className="flex order-2 col-span-4">
            <div className="w-1/2">
              <LinksSection />
            </div>
            <div className="w-1/2">
              <AboutSection />
            </div>
          </div>

          <div className="order-4 col-span-2 md:col-span-4 md:order-4">
            <FooterForm />
          </div>
          <div className="order-5 col-span-full">
            <hr />
            <CopyRight />
          </div>
        </div>
      </div>
    </footer>
  );
}
