import { useRef, useState } from 'react';
import {
  Box,
  chakra,
  HStack,
  IconButton,
  Input,
  InputGroup,
  VStack,
} from '@chakra-ui/react';

import InputAdd from './InputAdd';
import InputElement from './InputElement';

function InputArray({
  defaultValues,
  name,
}) {
  const [inputArray, setInputArray] = useState(defaultValues ?? []);
  const handleDelete = (id) => {
    setInputArray(
      inputArray.filter(i => i.id !== id)
    );
  }
  const handleAdd = (val) => {
    setInputArray([...inputArray, {
      id: inputArray.length,
      value: val
    }]);
  }
  return (
    <InputGroup>
      <VStack>
        <Box>
          {inputArray?.map((i) => {
            return (
              <InputElement
                key={i.id}
                value={i}
                onDelete={handleDelete}
              />
            )
          })}
        </Box>
      <InputAdd onAdd={handleAdd} />
      </VStack>
    </InputGroup>
  )
}

export default InputArray;
