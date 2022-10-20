import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthProvider';

const useAuth = () => useContext(AuthContext);

export default useAuth;
