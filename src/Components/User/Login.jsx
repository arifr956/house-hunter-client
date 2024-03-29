
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CentralContext } from "../../providers/AuthProvider";

import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';



const Login = () => {

  const { LoginUser } = useContext(CentralContext);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";
  



  const handleLogin = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    console.log(form.get('name'));
    const email = form.get('email');
    const password = form.get('password');

    LoginUser(email, password)
      .then(result => {
        toast.success(`Hi ! Welcome Back !`, {
          position: "top-center",
          autoClose:1500,
        });
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        // Check if the error message contains information about email/password mismatch
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-login-credentials"
        ) {
          toast.error("Invalid email or password. Please try again.", {
            position: "top-center",
            autoClose:1500,
          });
        }

        //       
      });
  }

  return (
    <>
      <Helmet>
        <title>House Hunter | Login</title>
      </Helmet>
      <div><div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleLogin} className="card-body">
              <div className="flex flex-row items-center justify-center lg:justify-around gap-3">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>

                {/* Google */}
                <button 
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-danger uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <FcGoogle className="mx-auto h-3.5 w-3.5" />
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-black uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <FaGithub className="mx-auto h-3.5 w-3.5" />
                </button>
              </div>

              {/* Separator between social media sign in and email/password sign in */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <h3 className='text-lg'>Dont Have an Account? <Link to="/registration"><span className='text-red-500'>Register Now</span></Link></h3>
              </div>
            </form>

          </div>
        </div>
        <ToastContainer />
      </div></div>

    </>
  );
};

export default Login;


