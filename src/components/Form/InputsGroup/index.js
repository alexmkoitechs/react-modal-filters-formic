import * as Styled from "./styled";

const InputsGroup = ({ data, values, onChange }) => {
  const getCheckedItems = (item) => {
    if (item.type === 'checkbox') {
      return values[data.name].includes(item.value);
    }
    if (item.type === 'radio') {
      return values[data.name] === item.value;
    }
  }

  const disabledItems = data.name === 'paidDaily' && values.leased !== 'false';

  return (
    <Styled.InputsGroup>
      {data.labelText && <label htmlFor={data.name}>{data.labelText}</label>}
  
      {data?.data?.map((item) => (
        <Styled.Input key={item.itemLabel}>
          <input
            type={item.type}
            name={data.name}
            value={item.value}
            onChange={onChange}
            disabled={disabledItems}
            checked={getCheckedItems(item)}
          />
          <label htmlFor={item.itemLabel}>{item.itemLabel}</label>
        </Styled.Input>
      ))}
    </Styled.InputsGroup>
  )
};

export default InputsGroup;
