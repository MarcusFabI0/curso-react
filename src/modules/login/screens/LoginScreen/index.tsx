import Button from '../../../../shared/buttons/Button';
import Input from '../../../../shared/inputs/Input';
import * as S from './style';

const LoginScreen = () => {
  return (
    <S.ContainerLoginScreen>
      <S.BackgroundImage src="./background.png" />;
      <S.LoginContainer>
        <S.LimitedContainer>
          <S.LogoImage src="./logo.png" />
          <S.LoginTitle level={2}>LOGIN</S.LoginTitle>
          <Input label="USUÁRIO" />
          <Input label="SENHA" />
          <Button type="primary" margin="64px 0 16px 0 ">
            ENTRAR
          </Button>
        </S.LimitedContainer>
      </S.LoginContainer>
    </S.ContainerLoginScreen>
  );
};

export default LoginScreen;
