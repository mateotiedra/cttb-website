import { useForm } from 'react-hook-form';

const StageLogic = (props) => {
  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const weekPresenceChoserDisabled = watch('allWeek', 'true') === 'true';

  const formDisabled = true;

  return {
    register,
    errors,
    handleSubmit,
    onSubmit: handleSubmit(onSubmit),
    weekPresenceChoserDisabled,
    formDisabled,
  };
};

export default StageLogic;
