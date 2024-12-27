import { useForm } from "react-hook-form";
let Input = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Your Submitted Data is:", data);
    alert("your data successfully Submitted");
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>REACT FORMS</h3>

      <label className="fw-bold">Name :</label>
      <input
        type="text"
        className="form-control w-25"
        {...register("Name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must have at least 3 characters",
          },
        })}
      />
      {errors.Name && (
        <p className="fw-bold text-danger">{errors.Name.message}</p>
      )}

      <label className="fw-bold"> Email :</label>
      <input
        type="text"
        className="form-control w-25"
        {...register("Email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
      />
      {errors.Email && (
        <p className="fw-bold text-danger">{errors.Email.message}</p>
      )}

      <label className="fw-bold">Address :</label>
      <input
        type="text"
        className="form-control w-25"
        {...register("Address", {
          required: "Address is required",
          minLength: {
            value: 7,
            message: "Address must have at least 7 characters",
          },
        })}
      />
      {errors.Address && (
        <p className="fw-bold text-danger">{errors.Address.message}</p>
      )}

      <label className="fw-bold">Phone :</label>
      <input
        type="text"
        className="form-control w-25"
        {...register("Phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{11}$/,
            message: "Enter a valid 10-digit phone number",
          },
        })}
      />
      {errors.Phone && (
        <p className="fw-bold text-danger">{errors.Phone.message}</p>
      )}

      <button type="submit" className="btn btn-info w-25 mt-3">
        Login
      </button>
    </form>
  );
};
export default Input;
