import {
  CloseIcon
} from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  HStack,
} from '@chakra-ui/react';

function InputElement({
  value,
  onDelete,
}) {
  return (
    <HStack>
      <Box>{value.id}:{value.value}</Box>
      <IconButton
        aria-label="rm-val"
        icon={<CloseIcon />}
        onClick={() => onDelete(value.id)}
      />
    </HStack>
  );
}

export default InputElement;
