import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';
import useBuyer from '../../../hook/useBuyer';

const Registration = () => {
    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState(null)
    const [isBuyer] = useBuyer(email)

    const from = location.state?.from?.pathname || '/'

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleOnsubmitRegistration = data => {
        console.log(data.email, data.name, data.userType)
        const userName = data.name
        const email = data.email;
        const password = data.password
        const userRole = data.userType
        const userStatus = false

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                swal({
                    title: "Congratulations",
                    text: `Your registration successfully completed`,
                    icon: "success",
                    button: "Done",
                });
                // form.reset();
                navigate('/')
                setError('');
                handleUpdateUserProfile(userName);
                uploadUserToDb(userName, email, userRole, userStatus)

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                swal({
                    title: "Opps !!",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try Again",
                });
            });
    };
    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error));
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
                    text: "Your successfully Login",
                    icon: "success",
                    button: "Done",
                });
                const userRole = 'buyer';
                setEmail(user.email);
                if (isBuyer === true) {
                    uploadUserToDb(user.displayName, user.email, userRole)
                    console.log('xx', isBuyer)
                }
            })
            .catch(error => console.error(error))
    };
    const uploadUserToDb = (userName, email, userRole, userStatus) => {
        const user = { userName, email, userRole, userStatus }
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
        <div className="hero glass pt-3 pb-5">
            <div>
                <h1 className="text-3xl font-bold mb-5 text-center">Registration</h1>
                <div className="card flex-shrink-0  w-80 md:w-96 lg:w-96 shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit(handleOnsubmitRegistration)}>
                        <div className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Account</span>
                                </label>
                                <select {...register("userType", { required: true })} className="select select-bordered w-full max-w-xs">
                                    <option >buyer</option>
                                    <option >seller</option>
                                </select>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Register</button>
                            </div>
                            <p className='text-center' > Already have an account? <Link to='/login' className='text-blue-500'> Please Login</Link></p>
                        </div>
                    </Form>
                    <p className='divider w-3/4 mx-auto font-bold'> OR</p>
                    <div className='text-center mb-7'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline rounded-lg"> <FcGoogle /> <span className='ml-2'>Continue with Google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;