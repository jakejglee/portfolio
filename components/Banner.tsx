import { useState } from 'react';

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
            <IconButton />
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
