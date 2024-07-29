import * as Styled from "./styled";

const Button = ({
  text,
  color,
  onClick,
  disabled,
  type='button',
  backgroundColor,
}) => (
  <Styled.Button
    type={type}
    color={color}
    onClick={onClick}
    disabled={disabled}
    $backgroundColor={backgroundColor}
  >
    {text}
  </Styled.Button>
);

export default Button;
