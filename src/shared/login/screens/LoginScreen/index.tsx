import * as S from './style';

const LoginScreen = () => {
  return (
    <S.ContainerLoginScreen>
      <S.BackgroundImage src="./background.png" />;
      <S.LoginContainer>
        <S.LimitedContainer>
          <S.LogoImage src="./logo.png" />
        </S.LimitedContainer>
      </S.LoginContainer>
    </S.ContainerLoginScreen>
  );
};

export default LoginScreen;
