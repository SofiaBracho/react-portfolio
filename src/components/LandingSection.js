import React from "react";
import { Avatar, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../images/profile.jpg"

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack
      justifyContent="space-between"
      alignItems="left"
      spacing={6}
      marginLeft="10"
    >
      <Heading as='h1' id='landing-section' >Hello, my name is:</Heading>
      <HStack
        justifyContent="space-between"
        justifyContent='left'
        spacing={4}
      >
        <Avatar name='Sofia Bracho' src={profilePic} size='lg' />
        <VStack
          justifyContent="space-between"
          alignItems="left"
          spacing={1}
        >
          <Heading as='h4' size='lg' >Sofia Bracho</Heading>
          <p>Web developer</p>
        </VStack>
      </ HStack>
      <Text fontSize='sm'>I am a frontend web developer with experience in the design field, passionate about technology in general and art as a means of expression. I believe that combining these two disciplines unleashes a great creative potential, allowing to create unique digital experiences through programming.</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
