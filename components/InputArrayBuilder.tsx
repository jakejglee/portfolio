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

function InputArrayBuilder({
  getValues,
  name,
  register,
}) {
  const values = getValues(name);
  console.log(values);
  const onDelete = () => {
    console.log("Hi");
  }
  const onAdd = () => {
    console.log("nub");
  }
  return (
    <InputGroup>
      <VStack>
        <div>
          {values?.map((val) => {
            return (
              <Box>{val}</Box>
              )
          })}
        </div>
        <HStack>
          <Input
            {...register(
              name
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

export default InputArrayBuilder;
