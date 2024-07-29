import { useEffect } from 'react';
import { useFormik, FormikProvider } from 'formik';
import {
  formMainData,
  inputsGroupData,
  formInitialValues
} from '../../constants';

import Button from '../Button';
import FormItem from './FormItem';
import InputsGroup from './InputsGroup';

import * as Styled from "./styled";

const Form = ({ setFilters, onClose }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formInitialValues,
    onSubmit: values => {
      setFilters(values);
      onClose(false);
    },
  });

  const { dirty, values, handleSubmit, handleChange, resetForm, setFieldValue } = formik;

  useEffect(() => {
    setFieldValue('paidDaily', null)
  }, [values.leased, setFieldValue])

  return (
    <FormikProvider value={formik}>
      <Styled.Form onSubmit={handleSubmit}>
        {formMainData.map(item => (
          <FormItem
            data={item}
            values={values}
            key={item.name}
            onChange={handleChange}
          />
        ))}

        {inputsGroupData.map(item => (
          <InputsGroup
            data={item}
            key={item.name}
            values={values}
            onChange={handleChange}
          />
        ))}

        <Styled.ButtonsSection>
          <Button
            type="submit"
            text='Submit'
            backgroundColor='primary'
          />
          <Button
            text='Reset'
            disabled={!dirty}
            onClick={resetForm}
            backgroundColor='warning'
          />
        </Styled.ButtonsSection>
      </Styled.Form>
    </FormikProvider>
  )
};

export default Form;
