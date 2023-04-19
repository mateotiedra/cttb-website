import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

import AppConfig from '../../config/AppConfig';
import AxiosHelper from '../../helpers/AxiosHelper';

const StageLogic = ({ history }) => {
  const { API_ORIGIN } = AppConfig();
  const { getStatusCode } = AxiosHelper(axios, history);

  const [pageStatus, setPageStatus] = useState('loading');
  const hasFetchedData = useRef(false);

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const weekPresenceChoserDisabled = watch('allWeek', 'true')
    ? watch('allWeek', 'true') === 'true'
    : true;

  // Formated presence values
  /* const presenceValues = useRef([]);
  const halfDayNbr = useRef(10); */
  const presenceValues = watch('formula');
  const halfDayNbr = presenceValues === 'day' ? 10 : 5;

  const onWeekPresenceChange = (newWeekPresenceValues) => {
    var newWeekPresenceFormated = '';
    var newHalfDayNbr = 0;
    for (const day of newWeekPresenceValues) {
      if (day.presence[0] && day.presence[1]) {
        newWeekPresenceFormated += day.title + ', ';
        newHalfDayNbr += 2;
      } else if (day.presence[0]) {
        newWeekPresenceFormated += day.title + ' matin, ';
        newHalfDayNbr += 1;
      } else if (day.presence[1]) {
        newWeekPresenceFormated += day.title + ' après-midi, ';
        newHalfDayNbr += 1;
      }
    }
    presenceValues.current = newWeekPresenceFormated;
    halfDayNbr.current = newHalfDayNbr;
  };

  const [datesOptions, setDatesOptions] = useState([]);
  const [confirmationEmail, setConfirmationEmail] = useState('');

  const formDisabled =
    datesOptions.filter((dateOption) => !dateOption.disabled).length === 0 ||
    pageStatus === 'notFound';

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
    fetchStagesData('stage-mixte-2023')(() => {
      setDatesOptions(fetchedDatesOptions.current);
      setPageStatus('active');
    });
  }

  const onSubmit = (data) => {
    setPageStatus('sending');
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
          halfDayNbr: presenceValues === 'day' ? 10 : 5,
          presenceValues: presenceValues.current,
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
    onWeekPresenceChange,
  };
};

export default StageLogic;
