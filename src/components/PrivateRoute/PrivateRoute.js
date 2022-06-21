import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebaseInit';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const [user, loading] =  useAuthState(auth);
   
    if (loading) {
        return <div className='text-center flex justify-center py-24'><button type="button" className="flex items-center" disabled>
        <svg className="animate-spin h-10 w-10 mr-3 border border-rose-600 rounded-full" viewBox="0 0 24 24">
          {/* ----------- */}
        </svg>
        <span>Processing...</span>
        
      </button></div>
    }

    if (!user) {
        return <Navigate to="/login" state={{from : location}} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;