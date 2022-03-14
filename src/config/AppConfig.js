const AppConfig = () => {
  const API_ORIGIN =
    process.env.REACT_APP_PRODUCTION === 'true'
      ? 'https://cttbernex.herokuapp.com'
      : 'http://localhost:8080';

  return { API_ORIGIN: API_ORIGIN };
};

export default AppConfig;
