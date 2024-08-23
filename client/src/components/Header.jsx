import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-[#254E70]'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3 text-[#E0FBFC]'>
        <Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <li>{currentUser.email}</li> 
            ) : (
              <li>Login</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}