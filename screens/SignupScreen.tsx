import AuthContent from '../components/Auth/AuthContent';

function SignupScreen() {
  return <AuthContent isLogin={false} onAuthenticate={function ({ email, password }: { email: string; password: string; }): void {
    throw new Error('Function not implemented.');
  }} />;
}

export default SignupScreen;
