import { ButtonProps } from 'antd';

import * as S from './style';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

const LoginButton = ({ margin, ...props }: ButtonCurrentProps) => {
  return <S.Button style={{ margin }} {...props} />;
};

export default LoginButton;
