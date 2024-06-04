import { AuthProvider } from 'react-admin';
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    UserCredential
} from 'firebase/auth';
import { firebaseApp } from '../config/firebase';

const firebaseAuth = getAuth(firebaseApp);

const BEARER_LOCALSTORAGE_NAME = 'token';
const cacheToken = async (credential: UserCredential) => {
    localStorage.setItem(
        BEARER_LOCALSTORAGE_NAME,
        await credential.user.getIdToken()
    );
    return credential;
};

export const getCachedToken = () => {
    return localStorage.getItem(BEARER_LOCALSTORAGE_NAME);
};

interface LoginParams {
    email: string;
    password: string;
}

interface SignupParams {
    username: string;
    email: string;
    password: string;
}

const authProvider: AuthProvider = {
    signup: async ({ username, email, password }: SignupParams) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            cacheToken(userCredential);
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('username', username);
            return Promise.resolve();
        } catch (error: any) {
            console.error("Erreur lors de l'inscription :", error);
            return Promise.reject(new Error('Signup failed'));
        }
    },

    login: async ({ email, password }: LoginParams) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            cacheToken(userCredential);
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
            localStorage.removeItem('username');
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

    checkError: (error: { status: number }) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('user');
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        return Promise.resolve();
    }
};

export default authProvider;
