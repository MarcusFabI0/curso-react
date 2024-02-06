import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import * as S from './style';

interface InputProps extends InputPropsAntd {
  label?: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <S.BoxInput>
      {label && <S.LabelInput>{label}</S.LabelInput>}
      <InputAntd {...props} />
    </S.BoxInput>
  );
};

export default Input;
