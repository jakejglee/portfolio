import { FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  chakra,
} from '@chakra-ui/react';

import Banner from '../../components/Banner';
import InputArrayBuilder from '../../components/InputArrayBuilder';
import styles from '../../styles/Home.module.css';

function Sandbox() {
  const {
    register,
    formState: { isDirty },
    getValues,
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      test: ["default"]
    }
  });

  const onSubmit = (args) => {
    console.log(args)
  }

  return (
    <div>
      <Banner />
      <main>
        <h1>Fun stuff lives here.</h1>
        <chakra.form id="test-form" onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.grid}>
            <InputArrayBuilder
              getValues={getValues}
              name="test"
              register={register}
            />
          </p>
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
