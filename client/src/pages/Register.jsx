import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema } from '../schema/register';
import { useFormik } from 'formik';
export default function register() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (values) => {

    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      else {
        window.alert('User created successfully');
      }
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
        email: "",
        password: "",

    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    onSubmit,
    validationSchema: registerSchema,
  });
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Register</h1>
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
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/login'>
          <span className='text-blue-500 hover:underline'>Login</span>
        </Link>
      </div>
      <p className='text-red-500 mt-5'>{error && 'Something went wrong'}</p>
    </div>
  );
}