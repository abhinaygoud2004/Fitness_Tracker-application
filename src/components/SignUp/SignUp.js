import React from "react";
import "./SignUp.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { v4: uuidv4 } = require("uuid");
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //HTTP req error state
  let [err, setErr] = useState("");
  console.log(errors, "errors");

  function generateUserId() {
    return uuidv4();
  }
  let addUser = async (newUser) => {
    const userId = generateUserId(); // Replace this with your logic to get the user ID

    // Create a modified newUser object with the appended user ID
    const modifiedUser = {
      ...newUser,
      userId: userId, // Append the user ID here
    };
    console.log(modifiedUser, "modified user...");
    const response = await axios.post(
      "http://localhost:4000/user-api/register",
      modifiedUser,
      {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    );
    toast.success("User SignUp successful!");
    navigate("/login");
  };
  let navigate = useNavigate();
  return (
    <div className="flex-center">
      <div className="container">
        <div className="signup-form">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(addUser)}>
            <div className="input-group">
              <label htmlFor="name" className="input-label">
                Username{" "}
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
                className="input-field mt-1"
                {...register("username", { required: "Username is required" })}
              />
              
            </div>
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                className="input-field mt-1"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="error-message text-xs">{errors.password.message}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                className="input-field mt-1"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="error-message text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-row gap-4">
              <div className="input-group w-1/2">
                <label htmlFor="sex" className="input-label">
                  Sex
                </label>
                <select
                  {...register("sex", { required: true })}
                  id="sex"
                  name="sex"
                  className="select-field"
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                  <option value="2">Other</option>
                </select>
                {errors.sex && (
                  <p className="error-message text-xs">{errors.sex.message}</p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="age" className="input-label">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="input-field"
                  {...register("age", { required: "Age is required" })}
                  placeholder="age"
                />
                {errors.age && (
                  <p className="error-message text-xs">{errors.age.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="input-group w-1/2">
                <label htmlFor="height" className="input-label">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  className="input-field"
                  {...register("height", { required: "Height is required" })}
                  placeholder="height"
                />
                {errors.height && (
                  <p className="error-message text-xs">{errors.height.message}</p>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="weight" className="input-label">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  className="input-field"
                  {...register("weight", { required: "Weight is required" })}
                  placeholder="weight"
                />
                {errors.weight && (
                  <p className="error-message text-xs">{errors.weight.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="button"
              // onClick={() => {
              //   navigate('/login');
              // }}
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="welcome-box">
          <h2 className="text-2xl font-bold mb-4 text-[#f8f9fa]">
            Welcome to the Fitness Tracker App
          </h2>
          <img
            src="https://img.freepik.com/free-vector/healthy-lifestyle-diet-fitness-vector-sign-shape-heart-with-multiple-icons-depicting-various-sports-vegetables-cereals-seafood-meat-fruit-sleep-weight-beverages_1284-44073.jpg?w=1380&t=st=1701497993~exp=1701498593~hmac=1e9bc1c9790b2534ac1f29837fe443a6cdc2f060823b6206ddef79566139eb2a"
            alt=""
            className="rounded mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
