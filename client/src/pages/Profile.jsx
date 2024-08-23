import { useSelector } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

const profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto mt-16'>
    <h1 className='text-4xl font-bold text-center'>Profile</h1>
    <p className='my-10 text-2xl text-center'>
      Hello, <span className='font-semibold'>{currentUser.email}</span>
    </p>
    <p onClick={handleSignOut} className='text-red-500 cursor-pointer hover:underline text-center'>Log out</p>
    </div>
  )
}

export default profile