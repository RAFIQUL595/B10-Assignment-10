import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const { handelEmailLog, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password should contain an uppercase and a lowercase letter."
      );
      return;
    }

    // Proceed with email registration if the password is valid
    handelEmailLog(email, password)
      .then((result) => {
        // After registration, update user profile
        updateUser(name, photo)
          .then(() => {
            Swal.fire({
              title: "Registration Successful!",
              text: `Your account has been created successfully. Welcome ${result?.user?.displayName}`,
              icon: "success",
            });
            navigate("/");
          })
          .catch((error) => {
            toast.error("Failed to update profile. Please try again.");
          });

        form.reset();
      })
      .catch((error) => {
        toast.error(
          "This email is already registered. Please use another email."
        );
      });
  };
  return (
    <div className="flex justify-center items-center py-10 bg-gray-100">
      <Helmet>
        <title>Register | Chill Gamer</title>
      </Helmet>
      <form
        onSubmit={handelRegister}
        className="bg-yellow-100 p-8 rounded shadow-md w-96"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-[#3498db]">
          Register
        </h2>
        <div className="mb-4">
          <label className="block text-[#3498db] text-xl">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded text-lg"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#3498db] text-xl">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded text-lg"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#3498db] text-xl">
            PhotoURL <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="photoURL"
            className="w-full px-4 py-2 border rounded text-lg"
            placeholder="Enter your photoURL"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-[#3498db] text-xl">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            className="w-full px-4 py-2 border rounded text-lg"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute top-12 right-3 transform -translate-y-1/2"
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded text-xl hover:bg-blue-600 transition"
        >
          Register
        </button>
        <div className="text-center text-xl mt-4">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-blue-500 cursor-pointer">Login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
