'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import error from '../../../../public/x.svg';
import s from './ChooseUsForm.module.css';

const ChooseUsForm = () => {
  const [disable, setDisable] = useState(true);
  const [checked, setChecked] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      position: '',
      phone: '',
      message: '',
      confirm: false,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  useEffect(() => {
    errors.name || errors.email || errors.phone || errors.confirm
      ? setDisable(true)
      : setDisable(false);
  }, [errors.name, errors.email, errors.phone, errors.confirm]);

  return (
    <div className=' mobile:bg-chooseUs mobile:bg-cover'>
      <div className=' mobile:bg-backgroundSections py-[56px] px-5 tablet:py-0 tablet:pl-5 tablet:pr-0'>
        <div className='mobile:content-container'>
          <p className='text-14 text-white font-extralight leading-5 max-w-[179px] ml-auto pb-[24px] tablet:text-13 tablet:ml-0 tablet:pb-8'>
            Don&apos;t miss your opportunity!
            <br />
            Fill out the form right now and join our team!
          </p>
          <form
            className={`bg-transparent ${s.form}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={`relative flex flex-col gap-1 pb-4 tablet:gap-0 ${s.name}`}
            >
              <label
                className={`${errors.name ? 'text-red' : 'text-white'} ${
                  s.label
                }`}
                htmlFor='name'
              >
                Full name
              </label>
              <div className='relative'>
                <input
                  className={`${errors.name ? 'text-red' : 'text-white'} ${
                    s.input
                  } px-2`}
                  type='text'
                  {...register('name', {
                    required: 'Required',
                    pattern: {
                      value:
                        /^[a-zA-ZÀ-ÖØ-öø-ÿ]+([-'][a-zA-ZÀ-ÖØ-öø-ÿ]+)*(\s[a-zA-ZÀ-ÖØ-öø-ÿ]+([-'][a-zA-ZÀ-ÖØ-öø-ÿ]+)*)*$/,
                      message: 'Incorrect name',
                    },
                  })}
                  id='name'
                  placeholder='John Smith'
                />
                {errors.name && (
                  <p className={s.error}>
                    <Image src={error} alt='error' width={18} height={18} />
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            <div
              className={`relative flex flex-col gap-1 pb-4 tablet:gap-0 ${s.email}`}
            >
              <label
                className={`${errors.email ? 'text-red' : 'text-white'} ${
                  s.label
                }`}
                htmlFor='email'
              >
                E-mail
              </label>
              <div className='relative'>
                <input
                  className={`${errors.email ? 'text-red' : 'text-white'} ${
                    s.input
                  } px-2`}
                  type='email'
                  {...register('email', {
                    required: 'Required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email',
                    },
                  })}
                  id='email'
                  placeholder='johnsmith@email.com'
                />
                {errors.email && (
                  <p className={s.error}>
                    <Image src={error} alt='error' width={18} height={18} />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div
              className={`flex flex-col gap-1 pb-4 tablet:gap-0 ${s.position}`}
            >
              <label className={`${s.label} text-white`} htmlFor='position'>
                Position
              </label>
              <input
                className={`${s.input} px-2`}
                type='text'
                {...register('position', {
                  required: false,
                })}
                id='position'
                placeholder='Movie maker'
              />
            </div>
            <div className={`flex flex-col gap-1 pb-4 tablet:gap-0 ${s.phone}`}>
              <label
                className={`${errors.phone ? 'text-red' : 'text-white'} ${
                  s.label
                }`}
                htmlFor='phone'
              >
                Phone
              </label>
              <div className='relative'>
                <InputMask
                  className={`${errors.phone ? 'text-red' : 'text-white'} ${
                    s.input
                  } pl-14 pr-2`}
                  type='text'
                  mask='(999) 99 99 999'
                  {...register('phone', {
                    required: 'Required',
                    pattern: {
                      value: /^\(\d{3}\) \d{2} \d{2} \d{3}$/,
                      message: 'Incorrect phone',
                    },
                  })}
                  id='phone'
                  maskPlaceholder='(&bull;&bull;&bull;) &bull;&bull; &bull;&bull; &bull;&bull;&bull;'
                  placeholder='(097) 12 34 567'
                />
                <span className='absolute left-2 top-2/4 -translate-y-1/2 text-20 text-white font-extralight leading-6'>
                  + 38
                </span>
                {errors.phone && (
                  <p className={s.error}>
                    <Image src={error} alt='error' width={18} height={18} />
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div
              className={`flex flex-col gap-1 pb-4 tablet:pb-0 ${s.message}`}
            >
              <label className={`${s.label} text-white`} htmlFor='message'>
                Message
              </label>
              <textarea
                className={`${s.input} px-2 resize-none tablet:h-[228px]`}
                {...register('message', {
                  required: false,
                })}
                id='message'
                cols='25'
                rows='8'
              />
            </div>
            <div className={`pb-4 ${s.confirm}`}>
              <input
                onClick={() => {
                  checked ? setChecked(false) : setChecked(true);
                }}
                className=' invisible absolute whitespace-nowrap w-[1px] h-[1px] overflow-hidden border-0 p-0 m-[-1px]'
                type='checkbox'
                {...register('confirm', {
                  required: true,
                })}
                id='confirm'
              />
              <label
                className={`${
                  errors.confirm ? 'text-red' : 'text-white'
                } relative text-12 font-extralight leading-[22px]`}
                htmlFor='confirm'
              >
                <p className=' max-w-[280px] pl-8'>
                  I confirm my consent to the processing of <br /> personal
                  data.
                </p>
                <div className='absolute top-0 left-0 block w-6 h-6 bg-transparent border-white border-[1px] tablet:w-[22px] tablet:h-[22px] '>
                  <div
                    className={`
                ${
                  checked ? 'bg-white' : 'bg-white bg-opacity-[0.1]'
                } absolute top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4 block w-4 h-4 tablet:w-[14px] tablet:h-[14px]`}
                  ></div>
                </div>
              </label>
            </div>

            <button
              className={`block text-30 text-white font-medium uppercase ml-auto disabled:text-buttonHover ${s.submit}`}
              disabled={disable}
              type='submit'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsForm;
