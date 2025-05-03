import React from "react";
import RecentlyAdded from "./RecentlyAdded";
import BestSellers from "./BestSellers";
import Features from "./Features";
import Reviews from "./Reviews";
import Services from "./Services";
import Landing from "./Landing";
import Offers from "./Offers";

export default function index() {
  return (
    <>
      <Landing />
      <Services />
      <Offers />
      <RecentlyAdded />
      <BestSellers />
      <Reviews />
      <Features />
    </>
  );
}
