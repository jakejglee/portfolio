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
  onAdd,
  onChange,
}) {
  const [value, setValue] = useState("");
  return (
    <HStack>
      <Input
        placeholder="Input stuff here"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <IconButton
        aria-label="add-val"
        icon={<CheckIcon />}
        onClick={() => {
          setValue("");
          onAdd(value);
        }}
      />
    </HStack>
  );
}

export default InputAdd;
