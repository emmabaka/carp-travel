'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import error from '../../../../public/x.svg';
import s from './ContactUsForm.module.css';

const ContactUsForm = () => {
  const [disable, setDisable] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      contactUsName: '',
      contactUsEmail: '',
      contactUsMessage: '',
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  useEffect(() => {
    errors.contactUsName || errors.contactUsEmail
      ? setDisable(true)
      : setDisable(false);
  }, [errors.contactUsName, errors.contactUsEmail]);

  return (
    <form className='bg-transparent' onSubmit={handleSubmit(onSubmit)}>
      <div className='relative flex flex-col gap-1 pb-[25px]'>
        <label
          className={`${errors.contactUsName ? 'text-red' : 'text-white'} ${
            s.label
          }`}
          htmlFor='contactUsName'
        >
          Full name
        </label>
        <div className='relative'>
          <input
            className={`${errors.contactUsName ? 'text-red' : 'text-white'} ${
              s.input
            } px-2`}
            type='text'
            {...register('contactUsName', {
              required: 'Required',
              pattern: {
                value:
                  /^[a-zA-ZÀ-ÖØ-öø-ÿ]+([-'][a-zA-ZÀ-ÖØ-öø-ÿ]+)*(\s[a-zA-ZÀ-ÖØ-öø-ÿ]+([-'][a-zA-ZÀ-ÖØ-öø-ÿ]+)*)*$/,
                message: 'Incorrect name',
              },
            })}
            id='contactUsName'
            placeholder='John Smith'
          />
          {errors.contactUsName && (
            <p className={s.error}>
              <Image src={error} alt='error' width={18} height={18} />
              {errors.contactUsName.message}
            </p>
          )}
        </div>
      </div>
      <div className='relative flex flex-col gap-1 pb-[25px]'>
        <label
          className={`${errors.contactUsEmail ? 'text-red' : 'text-white'} ${
            s.label
          }`}
          htmlFor='contactUsEmail'
        >
          E-mail
        </label>
        <div className='relative'>
          <input
            className={`${errors.contactUsEmail ? 'text-red' : 'text-white'} ${
              s.input
            } px-2`}
            type='email'
            {...register('contactUsEmail', {
              required: 'Required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email',
              },
            })}
            id='contactUsEmail'
            placeholder='johnsmith@email.com'
          />
          {errors.contactUsEmail && (
            <p className={s.error}>
              <Image src={error} alt='error' width={18} height={18} />
              {errors.contactUsEmail.message}
            </p>
          )}
        </div>
      </div>
      <div className='flex flex-col gap-1 pb-4'>
        <label className={`${s.label} text-white`} htmlFor='contactUsMessage'>
          Message
        </label>
        <textarea
          className={`${s.input} px-2 resize-none`}
          {...register('contactUsMessage', {
            required: false,
          })}
          id='contactUsMessage'
          cols='25'
          rows='8'
        />
      </div>
      <button
        className='block text-30 text-white font-medium uppercase ml-auto disabled:text-buttonHover'
        disabled={disable}
        type='submit'
      >
        Send
      </button>
    </form>
  );
};

export default ContactUsForm;
