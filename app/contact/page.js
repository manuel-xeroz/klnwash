import Contact from "@/components/ContactUs/Contact/Contact";
import ContactHero from "@/components/ContactUs/ContactHero/ContactHero";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <ContactHero />
      <Contact />
    </Fragment>
  );
};

export default page;
