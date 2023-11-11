import AboutDetails from "@/components/About/AboutDetails/AboutDetails";
import AboutHero from "@/components/About/AboutHero/AboutHero";
import Advantage from "@/components/About/Advantage/Advantage";
import Effectiveness from "@/components/About/Effectiveness/Effectiveness";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <AboutHero />
      <AboutDetails />
      <Advantage />
      <Effectiveness />
    </Fragment>
  );
};

export default page;
