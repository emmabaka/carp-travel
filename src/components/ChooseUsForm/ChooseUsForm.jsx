"use client";
import { useForm } from "react-hook-form";

const ChooseUsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div className="py-[56px]">
      <p className="text-14 text-white font-extralight leading-5 max-w-[179px] ml-auto pb-[24px]">
        Don&apos;t miss your opportunity!
        <br />
        Fill out the form right now and join our team!
      </p>
      <form className=" bg-transparent">
        <div>
          <label htmlFor="name">Full name</label>
          <input
            className=" bg-backgroundInput"
            type="text"
            {...register("name", {
              required: "Required",
              pattern: {
                value:
                  /^[A-Za-zА-Яа-яЁёіїєґ]+\s[A-Za-zА-Яа-яЁёіїєґ]+\s?[A-Za-zА-Яа-яЁёіїєґ]*$/,
                message: "Incorrect name",
              },
            })}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            className=" bg-backgroundInput"
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
            })}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input
            className=" bg-backgroundInput"
            type="text"
            {...register("position", {
              required: false,
            })}
            id="position"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            className=" bg-backgroundInput"
            type="text"
            {...register("phone", {
              required: false,
              pattern: {
                value: /^\+380\d{9}$/,
                message: "Incorrect phone",
              },
            })}
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className=" bg-backgroundInput"
            {...register("message", {
              required: false,
            })}
            id="message"
            cols="30"
            rows="10"
          />
        </div>
        <div>
          <input type="checkbox" name="confirm" id="confirm" />
          <label htmlFor="confirm">
            I confirm my consent to the processing of personal data.
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChooseUsForm;
