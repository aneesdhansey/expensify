import { firebase, googleAuthProvider, twitterAuthProvider, githubAuthProvider, AUTH_PROVIDERS } from '../firebase/firebase'

export const login = (uid) => ({ type: 'LOGIN', uid })

export const startLogin = (authProvider) => {
    return () => {

        let provider;
        switch (authProvider) {
            case AUTH_PROVIDERS.GOOGLE:
                provider = googleAuthProvider;
                break;
            case AUTH_PROVIDERS.GITHUB:
                provider = githubAuthProvider;
                break;
            case AUTH_PROVIDERS.TWITTER:
                provider = twitterAuthProvider;
                break;
            default:
                provider = googleAuthProvider;
        }

        return firebase.auth().signInWithPopup(provider);
    }
}

export const logout = () => ({ type: 'LOGOUT' })

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}