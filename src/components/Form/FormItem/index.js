import { Field } from 'formik';

import * as Styled from "./styled";

const FormItem = ({ data }) => (
  <Styled.FormItem>
    {data.labelText && <label htmlFor={data.name}>{data.labelText}</label>}

    <Field name={data.name} type={data.type} >
      {({ field }) => <input type={data.type} checked={field.value} {...field} />}
    </Field>
  </Styled.FormItem>
);

export default FormItem;




