import { useState } from 'react';

import Image from 'next/image';
import NextLink from 'next/link';

import {
  Box,
  Flex,
  Heading,
  HStack,
  Grid,
  GridItem,
  IconButton,
  Spacer
} from "@chakra-ui/react";

function Banner() {
  return (
    <header>
      <Flex
        alignItems='center'
        justifyContent='center'
        minWidth='max-content'
        p='5'
      >
        <Grid
          templateAreas={`"icon title"`}
          gridTemplateColumns={'50px 200px'}
        >
          <GridItem area={'icon'}>
            <Image
              alt="Welcome!"
              src="raven_icon.png"
              height={50}
              width={50}
            />
          </GridItem>
          <GridItem area={'title'}> 
            <NextLink passHref href={'/'}>
              <Heading
                cursor='pointer'
                size='2xl'
              >
                Welcome!
              </Heading>
            </NextLink>
          </GridItem>
        </Grid>
        <Spacer />
      </Flex>
    </header>
  );
}

export default Banner;
