import {
  CloseIcon
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  HStack,
} from '@chakra-ui/react';

function InputElement({
  value,
  onDelete,
}) {
  return (
    <Box
      bg="lightgrey"
      borderRadius="8px"
      borderWidth="1px"
      padding={3}
    >
      <Flex>
          <IconButton
            aria-label="rm-val"
            icon={<CloseIcon />}
            onClick={() => onDelete(value.id)}
          />
          <Box>{value.value}</Box>
      </Flex>
    </Box>
  );
}

export default InputElement;
