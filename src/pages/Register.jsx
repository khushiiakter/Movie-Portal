import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import { useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

const Register = () => {
  const { createNewUser, setUser, auth } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const isPasswordValid = (password) => {
    const minLength = password.length >= 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    return minLength && hasUppercase && hasLowercase;
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        navigate("/");
      })

      .catch((error) => {
        console.log("Google Login Error:", error.message);
        setError("Failed to login with Google.");
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // get data from form
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!isPasswordValid(password)) {
      setError(
        "Password must be at least 6 characters long, include an uppercase letter, and a lowercase letter."
      );
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        

        const profile = {
            displayName: name,
            photoURL: photo,

        };
        updateProfile(auth.currentUser, profile)
          .then(() => {

          })
          .catch((error) => console.log("user profile update error"));
        setUser(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  

  return (
    <div className=" flex justify-center items-center md:py-5  bg-[#101318]">
      <div className="card bg-gray-900 w-full mt-[68px] md:max-w-lg shrink-0 md:border-2 border-[#5f1a89] md:rounded-3xl rounded-none md:p-9 px-1 py-6">
        <h2 className="text-3xl text-white font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body   pb-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="url"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error && (
              <label className="label text-sm text-red-700">{error}</label>
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-neutral bg-[#5f1a89]  hover:bg-red-800   rounded-full">Register</button>
          </div>
          <div className="divider text-gray-400">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline text-gray-400 rounded-full"
          >
            Continue with Google
          </button>
        </form>
        <p className="text-center text-gray-400 font-semibold">
          Already have an account?{" "}
          <Link className="text-[#5f1a89] hover:text-red-800 " to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
