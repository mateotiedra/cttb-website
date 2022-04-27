import { useForm } from 'react-hook-form';
import PageLogic from '../../helpers/PageLogic';

const SignInLogic = (props) => {
  const { API_ORIGIN, axios, pageStatus, setPageStatus, getStatusCode } =
    PageLogic();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setPageStatus('sending');
    console.log(data);
    axios
      .post(API_ORIGIN + '/auth/signin', {
        email: data.email,
        password: data.password,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
        setPageStatus('active');
      });
  };

  return {
    pageStatus,
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default SignInLogic;
