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
  values,
  name,
  register,
  setValue,
}) {
  console.log(values);
  const index = values.length - 1;
  const onDelete = () => {
    // 1. Remove value from list.
    console.log("Hi");
  }
  const onAdd = () => {
    // 1. Append value to list.
    console.log("nub");
  }
  // TODO(nubby): add `onChange`.
  return (
    <InputGroup>
      <VStack>
        {values?.map((val) => <Box>{val}</Box>)}
        <HStack>
          <Input
            {...register(
              `${name}.${index}`
            )}
          />
          <IconButton
            aria-label="add-val"
            icon={<CheckIcon />}
            onClick={onAdd}
          />
        </HStack>
      </VStack>
    </InputGroup>
  )
}

export default InputArray;
