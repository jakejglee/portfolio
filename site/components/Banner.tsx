import { useState } from "react";

import {
  Box,
  Flex
} from "@chakra-ui/react";

function Banner() {
  const [welcome, setWelcome] = useState({
    X: 0,
    Y: 5
  });
  return (
    <header>
      <Flex
        w="full"
        onPointerMove={
          (e) => {
            console.log(welcome);
            setWelcome({
              ...welcome,
              X: welcome.X + 1
            })
          }
        }
      >
        <Box
          style={{
            transform: `translate(${welcome.X}px, ${welcome.Y}.px`
          }}
        >
          Welcome!
        </Box>
      </Flex>
    </header>
  );
}

export default Banner;
