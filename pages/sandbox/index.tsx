import { FieldValues, useForm } from 'react-hook-form';
import {
  Input
} from '@chakra-ui/react';

import Banner from '../../components/Banner';
import styles from '../../styles/Home.module.css';

function Sandbox() {
  const {
    register,
    formState: { isDirty },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      test: "default"
    }
  });

  return (
    <div>
      <Banner />
      <main>
        <h1>Fun stuff lives here.</h1>
        <p className={styles.grid}>
          <Input
            {...register(
              "test"
            )}
          />
        </p>
      </main>
    </div>
  );
}

export default Sandbox;
