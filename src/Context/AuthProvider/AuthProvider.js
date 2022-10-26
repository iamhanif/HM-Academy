import { createContext } from 'react';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
}

const logOut = () => {
    return signOut(auth)
}

const AuthProvider = ({ children }) => {
    const user = { displayName: 'Hanif' }

    const authInfo = { user, providerLogin, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;