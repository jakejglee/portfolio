import { useState } from 'react';
import {
  CheckIcon
} from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Input,
} from '@chakra-ui/react';
function InputAdd({
  value,
  onAdd,
  onChange,
}) {
  return (
    <HStack>
      <Input
        placeholder="Input stuff here"
        value={value}
        onChange={onChange}
      />
      <IconButton
        aria-label="add-val"
        icon={<CheckIcon />}
        onClick={onAdd}
      />
    </HStack>
  );
}

export default InputAdd;
