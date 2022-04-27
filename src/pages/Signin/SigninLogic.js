import { useForm } from 'react-hook-form';

import PageLogic from '../../helpers/PageLogic';

const SignInLogic = (props) => {
  const {
    API_ORIGIN,
    axios,
    pageStatus,
    setPageStatus,
    getStatusCode,
    navigate,
    useLoadPage,
  } = PageLogic();

  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useLoadPage(() => {
    console.log('load page');
  });

  const onSubmit = (data) => {
    setPageStatus('sending');
    axios
      .post(API_ORIGIN + '/auth/signin', {
        email: data.email,
        password: data.password,
      })
      .then(({ data }) => {
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/membre', { replace: true });
      })
      .catch((err) => {
        if (getStatusCode(err) === 404) {
          setError('email', { type: 'custom', message: 'Adresse inconnue' });
        } else if (getStatusCode(err) === 403) {
          setError('password', {
            type: 'custom',
            message: 'Mot de passe incorrect',
          });
        }
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
