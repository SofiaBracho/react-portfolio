import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  const borderRadius = '.8rem'
  const styles = {
    borderRadius: borderRadius,
    background: 'white',
    color: 'black'
  }

  return (
    <>
      <VStack style={styles} >
        <Image src={imageSrc} style={{ borderRadius: borderRadius }} />
        <VStack style={{padding: '1rem'}} alignItems='left' >
          <Heading size='md' >{ title }</Heading>
          <Text>{ description }</Text>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
