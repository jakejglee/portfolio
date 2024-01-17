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
  const values = getValues("test");

  const onSubmit = (args) => {
    console.log(args)
  }

  return (
    <div>
      <Banner />
      <main>
        <h1>Fun stuff lives here.</h1>
        <chakra.form id="test-form" onSubmit={handleSubmit(onSubmit)}>
            <InputArray
              values={values}
              name="test"
              register={register}
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
