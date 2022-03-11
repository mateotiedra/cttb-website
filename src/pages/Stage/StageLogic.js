import { useState } from 'react';
import { useForm } from 'react-hook-form';

const StageLogic = (props) => {
  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [loadingPage, setLoadingPage] = useState(true);

  const datesOptions = [
    {
      value: 'weekA',
      text: 'Stage performance du 8 au 12 août',
      disabled: false,
    },
    {
      value: 'weekB',
      text: 'Stage tous niveaux du 15 au 19 août',
      datesOptions: false,
    },
  ];

  const weekPresenceChoserDisabled = watch('allWeek', 'true') === 'true';

  const formDisabled = false;

  return {
    register,
    errors,
    handleSubmit,
    onSubmit: handleSubmit(onSubmit),
    loadingPage,
    datesOptions,
    weekPresenceChoserDisabled,
    formDisabled,
  };
};

export default StageLogic;
