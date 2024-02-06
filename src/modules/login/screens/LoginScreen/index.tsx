import Input from '../../../../shared/inputs/Input';
import * as S from './style';

const LoginScreen = () => {
  return (
    <S.ContainerLoginScreen>
      <S.BackgroundImage src="./background.png" />;
      <S.LoginContainer>
        <S.LimitedContainer>
          <S.LogoImage src="./logo.png" />
          <Input label="USUÁRIO" />
          <Input label="SENHA" />
        </S.LimitedContainer>
      </S.LoginContainer>
    </S.ContainerLoginScreen>
  );
};

export default LoginScreen;
