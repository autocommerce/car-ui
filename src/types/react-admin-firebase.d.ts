declare module 'react-admin-firebase' {
    import { DataProvider, AuthProvider } from 'react-admin';

    interface RAFirebaseOptions {
        app: any;
        // Ajouter d'autres options ici si nécessaire
    }

    export function FirebaseDataProvider(
        options: RAFirebaseOptions
    ): DataProvider;
    export function FirebaseAuthProvider(
        options: RAFirebaseOptions
    ): AuthProvider;
}
