import { FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  chakra,
} from '@chakra-ui/react';

import Banner from '../../components/Banner';
import InputArray from '../../components/InputArray/InputArray';
import styles from '../../styles/Home.module.css';

function Sandbox() {
  const {
    register,
    formState: { isDirty },
    getValues,
    setValue,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      test: ["default"]
    }
  });

  const onSubmit = (args) => {
    console.log("Moo.")
  }

  return (
    <div>
      <Banner />
      <main>
        <h1>Fun stuff lives here.</h1>
        <chakra.form id="test-form" onSubmit={handleSubmit(onSubmit)}>
          <InputArray
            defaultValues={null}
            name="test"
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
