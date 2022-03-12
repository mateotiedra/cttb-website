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
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const weekPresenceChoserDisabled = watch('allWeek', 'true') === 'true';

  /* {
      value: 'weekA',
      text: 'Stage performance du 8 au 12 août',
      disabled: false,
    }, */
  const [datesOptions, setDatesOptions] = useState([]);

  const formDisabled =
    datesOptions.filter((dateOption) => !dateOption.disabled).length === 0;

  var fetchedDatesOptions = [];

  const fetchStagesData = (eventId) => (next) => {
    axios
      .get(API_ORIGIN + '/event', {
        params: {
          id: eventId,
        },
      })
      .then(({ data }) => {
        fetchedDatesOptions.push(data);
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
      setDatesOptions(fetchedDatesOptions);
    });
  }

  return {
    register,
    errors,
    handleSubmit,
    onSubmit: handleSubmit(onSubmit),
    pageStatus,
    datesOptions,
    weekPresenceChoserDisabled,
    formDisabled,
  };
};

export default StageLogic;
