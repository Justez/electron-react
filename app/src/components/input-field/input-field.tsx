import React from 'react';
import { TextField } from '@material-ui/core'
import { Field, ErrorMessage } from 'formik';

import type { ElementType } from 'types';

type Props = {
  name: string, 
  type: string, 
  label: string,
}

const InputField = ({ name, type = "text", label }: Props): ElementType => {
  return (
    <>
      <Field type={type} name={name}>
        <TextField id={name} label={label} />
      </Field>
      <ErrorMessage name={name} component="div" />
    </>
  );
};

export default InputField;
