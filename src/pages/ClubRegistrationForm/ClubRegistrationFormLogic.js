import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

import AppConfig from '../../config/AppConfig';
import AxiosHelper from '../../helpers/AxiosHelper';

const ClubRegistrationFormLogic = ({ history }) => {
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios, history);

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [confirmationEmail, setConfirmationEmail] = useState('');

  const formDisabled = pageStatus === 'notFound';

  if (!hasFetchedData.current) {
    hasFetchedData.current = true;
    axios
      .get(API_ORIGIN + '/event', {
        params: {
          id: 'club',
        },
      })
      .then(() => {
        setPageStatus('active');
      })
      .catch((err) => {
        if (getStatusCode(err) === 404) {
          setPageStatus('notFound');
        }
      });
  }

  const onSubmit = (data) => {
    setPageStatus('sending');
    axios
      .post(API_ORIGIN + '/event/register', {
        eventId: 'club',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        registrationData: {
          ...data,
          dates: undefined,
          email: undefined,
          firstName: undefined,
          lastName: undefined,
        },
      })
      .then(() => {
        reset();
        window.scrollTo(0, 0);
        setConfirmationEmail(data.email);
        setPageStatus('success');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit: handleSubmit(onSubmit),
    pageStatus,
    formDisabled,
    confirmationEmail,
  };
};

export default ClubRegistrationFormLogic;
