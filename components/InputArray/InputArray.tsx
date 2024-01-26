/* InputArray
 *
 * Dynamically input and capture an array.
 *
 * OPTIONS:
 *  + maxLength
 *  + minLength
 *
 * TODO(nubby): get this to plug into react-hook-forms better while
 *              maintaining proper re-renders.
 */
import { useState } from 'react';
import {
  Box,
  chakra,
  Container,
  Grid,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import InputAdd from './InputAdd';
import InputElement from './InputElement';


interface iArrayConfigs {
  maxLength: number;
  minLength: number;
  w: string;
}
let UID = 0;
const defaults = {
  maxLength: 500,
  minLength: 6,
  w: "420px",
}


function InputArray({
  configs = defaults,
  defaultValues,
  name,
  setValue,
  w,
}: {
  configs?: iArrayConfigs | null | undefined,
  defaultValues?: string[] | null | undefined,
  name: string,
  setValue: (
    name: string,
    value: unknown,
    config?: Object,
  ) => void,
  w?: string | null | undefined,
}) {
  const defaultArray = defaultValues ? defaultValues.map(
    (v) => {
      UID++;
      return {
        value: v,
        id: UID,
        key: UID,
      }
    }
  ) : [];
  const [inputArray, setInputArray] = useState(defaultArray);
  const [inputValue, setInputValue] = useState("");
  const handleAdd = () => {
    if (
      (inputValue.length > configs?.minLength) &&
      (inputValue.length < configs?.maxLength)
    ) {
      const nextArray = [...inputArray, {
        value: inputValue,
        id: UID,
        key: UID,
      }]
      UID++;
      setInputValue("");
      setInputArray(nextArray);
      setValue(name, nextArray, { shouldDirty: true });
    }
  }
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleDelete = (id) => {
    const nextArray = inputArray.filter(i => i.id !== id);
    setInputArray(nextArray);
    setValue(name, nextArray);
  }
  return (
    <InputGroup>
      <VStack w={w ?? defaults.w}>
        <Wrap>
          {inputArray?.map((i, index) => {
            return (
              <WrapItem>
                <InputElement
                  key={i.key}
                  value={i}
                  onDelete={handleDelete}
                />
              </WrapItem>
            )
          })}
        </Wrap>
        <InputAdd
          value={inputValue}
          onAdd={handleAdd}
          onChange={handleInputChange}
        />
      </VStack>
    </InputGroup>
  );
}

export default InputArray;
