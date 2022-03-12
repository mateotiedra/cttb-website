import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

import AppConfig from '../../config/AppConfig';
import AxiosHelper from '../../helpers/AxiosHelper';

const StageLogic = ({ history }) => {
  const { API_ORIGIN } = AppConfig();
  const { setInterceptors, getStatusCode } = AxiosHelper(axios, history);

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const weekPresenceChoserDisabled = watch('allWeek', 'true') === 'true';

  const [datesOptions, setDatesOptions] = useState([]);
  const [confirmationEmail, setConfirmationEmail] = useState('');

  const formDisabled =
    datesOptions.filter((dateOption) => !dateOption.disabled).length === 0;

  const fetchedDatesOptions = useRef([]);

  const fetchStagesData = (eventId) => (next) => {
    axios
      .get(API_ORIGIN + '/event', {
        params: {
          id: eventId,
        },
      })
      .then(({ data }) => {
        fetchedDatesOptions.current.push({
          value: data.id,
          text: data.name,
          disabled: !data.registrationOpened,
        });
        next();
      })
      .catch((err) => {
        if (getStatusCode(err) === 404) {
          setPageStatus('notFound');
        }
      });
  };

  if (!hasFetchedData.current) {
    hasFetchedData.current = true;
    fetchStagesData('stage-perf-2022')(() => {
      fetchStagesData('stage-all-2022')(() => {
        setDatesOptions(fetchedDatesOptions.current);
        setPageStatus('active');
      });
    });
  }

  const onSubmit = (data) => {
    axios
      .post(API_ORIGIN + '/event/register', {
        eventId: data.dates,
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
    datesOptions,
    weekPresenceChoserDisabled,
    formDisabled,
    confirmationEmail,
  };
};

export default StageLogic;
