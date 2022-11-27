import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { providerLogin, logIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const Alert = () => {
        swal({
            title: "Congratulations",
            text: "You are Login successfully",
            icon: "success",
            button: "Done",
        });
    }

    const handleOnSubmitLogin = data => {
        console.log(data.email, data.name)
        const email = data.email;
        const password = data.password

        logIn(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email,

                }
                fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // form.reset();
                        localStorage.setItem('platinam', data.token)
                        navigate(from, { replace: true });
                        Alert();

                    })

            })
            .catch(error => {
                console.error(error)
                setError('Email or Password is wrong, Please Enter Correct email or password !')
                // form.reset();
            })

    };

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user.displayName);
                navigate(from, { replace: true });
                swal({
                    title: "Congratulations",
                    text: "You are Login successfully",
                    icon: "success",
                    button: "Done",
                });
                const userRole = 'buyer';
                uploadUserToDb(user.displayName, user.email, userRole)

            })
            .catch(error => console.error(error))
    };
    const uploadUserToDb = (userName, email, userRole) => {
        const user = { userName, email, userRole }
        fetch(`${process.env.REACT_APP_NOT_SECRET_serverLink}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };
    return (
        <div>
            <div className="hero glass p-5">
                <div className='text-center'>
                    <h1 className="text-3xl font-bold mb-5">Login</h1>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit(handleOnSubmitLogin)} >
                            <div className="card-body mb-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered" />
                                    {errors.email && <span className='text-red-500' >Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" {...register("password", { required: true })} className="input input-bordered" />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                </div>
                                <p className='text-red-500'>{error}</p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline">Login</button>
                                </div>
                                <p >Don't have an account? <Link to='/registration' className='text-blue-500'>Registration Now</Link> </p>
                            </div>
                        </Form>
                        <p className='divider w-3/4 mx-auto font-bold'> OR</p>
                        <div className='text-center mb-7'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-lg"> <FcGoogle /> <span className='ml-2'>Continue with Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;