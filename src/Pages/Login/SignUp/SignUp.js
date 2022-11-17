import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [signUpError, setSignUpError] = useState("");
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (data) => {
        // console.log(data);
        setSignUpError("");
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("signup successfully");

                const userInfo = {
                    displayName: data.name,
                };
                updateUser(userInfo)
                    .then(() => {
                        userSaveInDB(data.name, data.email);
                    })
                    .catch((err) => console.log(err));

                // from.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setSignUpError(error.message);
            });
    };

    const userSaveInDB = (name, email) => {
        const users = { name, email };

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(users),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("userSaveDb", data);
                navigate(from, { replace: true });
                // if (data.acknowledged) {
                //     setTreatment(null);
                //     toast.success("Booking confirmed");
                //     refetch();
                // } else {
                //     toast.error(data.message);
                // }
            });
    };

    return (
        <div className="h-[800px] flex justify-center items-center  ">
            <div className="w-96 p-7 shadow-2xl rounded-xl bg-slate-100">
                <h2 className="text-xl text-center">SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            {...register("email", {
                                required: "Email Address is required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters or longer" },
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />

                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <div>{signUpError && <p className="text-red-600">{signUpError}</p>}</div>
                    <input className="btn btn-accent w-full my-8" value="signin" type="submit" />
                </form>
                <p className="m-2">
                    Already have an Account
                    <Link className="text-secondary px-2" to="/login">
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
