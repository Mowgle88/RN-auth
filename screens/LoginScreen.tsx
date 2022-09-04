import AuthContent from '../components/Auth/AuthContent';

function LoginScreen() {
  return <AuthContent isLogin onAuthenticate={function ({ email, password }: { email: string; password: string; }): void {
    throw new Error('Function not implemented.');
  }} />;
}

export default LoginScreen;
