import { Box, Button, Text, Image, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Home from "../components/Home";
import RoadmapSection from "../components/Roadmap";
import TicketSection from "../components/TypesOfTickets";
import WhyWeDifferentSection from "../components/WhyWeDifferent";

const IndexPage = () => {
  return (
    <>
      <Home />
      <TicketSection />
      <WhyWeDifferentSection />
      <RoadmapSection />
    </>
  );
};
export default IndexPage;
