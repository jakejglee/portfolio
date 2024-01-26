import { FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  chakra,
} from '@chakra-ui/react';

import Banner from '../../components/Banner';
import InputArray from '../../components/InputArray/InputArray';
import styles from '../../styles/Home.module.css';

function Sandbox() {
  const formDefaults = {
    test: [
      "1111111",
      "2333333",
      "4444444"
    ]
  }
  const {
    register,
    formState: { isDirty },
    getValues,
    setValue,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      test: formDefaults.test
    }
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Banner />
      <main>
        <h1>Fun stuff lives here.</h1>
        <chakra.form id="test-form" onSubmit={handleSubmit(onSubmit)}>
          <InputArray
            defaultValues={getValues("test")}
            name="test"
            setValue={setValue}
          />
          <Button
            type="submit"
          >
            Submit answer
          </Button>
        </chakra.form>
      </main>
    </div>
  );
}

export default Sandbox;
