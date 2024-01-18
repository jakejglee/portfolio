import { useRef, useState } from 'react';
import {
  CheckIcon
} from '@chakra-ui/icons';
import {
  Box,
  chakra,
  HStack,
  IconButton,
  Input,
  InputGroup,
  VStack,
} from '@chakra-ui/react';

function InputArray({
  defaultValues,
  name,
}) {
  const inputRef = useRef("");
  const [inputArray, setInputArray] = useState(defaultValues ?? []);
  const handleDelete = (index) => {
    inputArray.slice(index, 1);
  }
  const handleAdd = (val) => {
    setInputArray([...inputArray, inputRef.current]);
    inputRef.current = "";
  }
  const handleChange = (val) => {
    inputRef.current = val;
  }
  return (
    <InputGroup>
      <VStack>
        <Box>
          {inputArray?.map((val, index) => <Box key={index}>{val}</Box>)}
        </Box>
        <HStack>
          <Input
            onChange={(e) => handleChange(e.target.value)}
          />
          <IconButton
            aria-label="add-val"
            icon={<CheckIcon />}
            onClick={handleAdd}
          />
        </HStack>
      </VStack>
    </InputGroup>
  )
}

export default InputArray;
