import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const CabinetLayout = () => {
  return (
    <div className="Cabinet-Form-Wrapper" >
      <LoginForm />
      <br/>
      <RegisterForm />
      <br/>
    </div>
  );
};

export default CabinetLayout;
