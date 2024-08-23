import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema } from '../schema/register';
import { useFormik } from 'formik';
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function login() {

  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {

    try {
      dispatch(loginStart());
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(loginFailure(data));
        return;
      }
      dispatch(loginSuccess(data));
      navigate('/profile');
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
  
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
        email: "",
        password: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    onSubmit,
    validationSchema: registerSchema,
  });
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email &&  <span className="text-xs text-red-500">{errors.email}</span>}
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
        <button
          disabled={loading}
          type='submit'
          className='bg-[#254E70] text-[#E0FBFC] p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to='/register'>
          <span className='text-blue-500 hover:underline'>Register now</span>
        </Link>
      </div>
      <p className='text-red-500 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>
  );
}