import { useForm } from 'react-hook-form';

const StageLogic = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const fields = [
    {
      input: register('firstName', { required: true, pattern: /^[A-Za-z]+$/i }),
    },
    {
      input: register('lastName', { required: true, pattern: /^[A-Za-z]+$/i }),
    },
    {
      input: register('birthDate', {
        required: true,
        pattern:
          /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g,
      }),
    },
    { input: register('gender', { required: true }), type: 'selection' },
  ];

  return { register, handleSubmit };
};

export default StageLogic;
