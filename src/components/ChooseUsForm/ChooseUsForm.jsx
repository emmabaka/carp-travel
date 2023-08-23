"use client";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import s from "./ChooseUsForm.module.css";


const ChooseUsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      position: "",
      phone: "",
      message: "",
      confirm: "",
    },
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  console.log(errors);
  console.log(formState);
  return (
    <div className="py-[56px] px-5">
      <p className="text-14 text-white font-extralight leading-5 max-w-[179px] ml-auto pb-[24px]">
        Don&apos;t miss your opportunity!
        <br />
        Fill out the form right now and join our team!
      </p>
      <form className="bg-transparent" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative flex flex-col gap-1 pb-4">
          <label className={s.label} htmlFor="name">
            Full name
          </label>
          <div className="relative">
            <input
              className={`${s.input} px-2`}
              type="text"
              {...register("name", {
                required: "Required",
                pattern: {
                  value:
                    /^[a-zA-ZÀ-ÖØ-öø-ÿ]+([-'][a-zA-ZÀ-ÖØ-öø-ÿ]+)*(\s[a-zA-ZÀ-ÖØ-öø-ÿ]+([-'][a-zA-ZÀ-ÖØ-öø-ÿ]+)*)*$/,
                  message: "Incorrect name",
                },
              })}
              id="name"
              placeholder="John Smith"
            />
            <p className={s.error}>{errors.name && errors.name.message}</p>
          </div>
        </div>
        <div className="relative flex flex-col gap-1 pb-4">
          <label className={s.label} htmlFor="email">
            E-mail
          </label>
          <div className="relative">
            <input
              className={`${s.input} px-2`}
              type="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
              id="email"
              placeholder="johnsmith@email.com"
            />
            <p className={s.error}>{errors.email && errors.email.message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 pb-4">
          <label className={s.label} htmlFor="position">
            Position
          </label>
          <input
            className={`${s.input} px-2`}
            type="text"
            {...register("position", {
              required: false,
            })}
            id="position"
            placeholder="Movie maker"
          />
        </div>
        <div className="flex flex-col gap-1 pb-4">
          <label className={s.label} htmlFor="phone">
            Phone
          </label>
          <div className="relative">
            <InputMask
              className={`${s.input} pl-14 pr-2`}
              type="text"
              mask="(999) 99 99 999"
              {...register("phone", {
                required: false,
                pattern: {
                  value: /^\(\d{3}\) \d{2} \d{2} \d{3}$/,
                  message: "Incorrect phone",
                },
              })}
              id="phone"
              maskPlaceholder="(&bull;&bull;&bull;) &bull;&bull; &bull;&bull; &bull;&bull;&bull;"
              placeholder="(097) 12 34 567"
            />
            <span className="absolute left-2 top-2/4 -translate-y-1/2 text-20 text-white font-extralight leading-6">
              + 38
            </span>
            <p className={s.error}>{errors.phone && errors.phone.ref.value}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 pb-4">
          <label className={s.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={`${s.input} px-2 resize-none`}
            {...register("message", {
              required: false,
            })}
            id="message"
            cols="25"
            rows="8"
          />
        </div>
        <div className="pb-4">
          <input type="checkbox" name="confirm" id="confirm" />
          <label
            className="text-12 text-white font-extralight leading-[22px]"
            htmlFor="confirm"
          >
            I confirm my consent to the processing of personal data.
          </label>
        </div>
        <button
          className="block text-30 text-white font-medium uppercase ml-auto"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChooseUsForm;
