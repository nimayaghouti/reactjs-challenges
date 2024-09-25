import { useForm } from "react-hook-form";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import ArrowLeftIcon from "@/assets/svg/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/svg/ArrowRightIcon";
import "./Form.scss";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Input
        label="Email"
        id="email"
        placeholder="Enter your email"
        className="form__control"
        maxWidth="unset"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid",
          },
        })}
        error={errors.email}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="Enter your password"
        className="form__control"
        maxWidth="unset"
        {...register("password", {
          required: "Password is required",
          validate: (value) =>
            value.length >= 6 || "Password must be at least 6 characters long",
        })}
        error={errors.password}
      />

      <Button
        type="submit"
        className="form__submit"
        maxWidth="unset"
        prependIcon={<ArrowRightIcon />}
        appendIcon={<ArrowLeftIcon />}
      >
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
