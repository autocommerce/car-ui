import { AuthProvider } from 'react-admin';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseApp } from '../config/firebase';

const firebaseAuth = getAuth(firebaseApp);
interface AuthResponse {
    isAuthenticated: boolean;
}

const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                firebaseAuth,
                username,
                password
            );
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user));
            return Promise.resolve();
        } catch (error: any) {
            console.error('Erreur lors de la connexion :', error);
            return Promise.reject(new Error('Authentication failed'));
        }
    },

    logout: async () => {
        try {
            localStorage.removeItem('user');
            await signOut(firebaseAuth);
            return Promise.resolve();
        } catch (error: any) {
            console.error('Erreur lors de la déconnexion :', error);
            return Promise.reject(new Error('Logout failed'));
        }
    },

    checkAuth: () => {
        const user = localStorage.getItem('user');
        return user ? Promise.resolve() : Promise.reject();
    },

    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('user');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        return Promise.resolve();
    }
};

export default authProvider;
