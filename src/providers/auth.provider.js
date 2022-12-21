import { createContext, useContext, useEffect, useState } from 'react'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    state: { userToken: '' },
    authContext: {
        signIn: async (data) => {
        },
        signOut: () => { },
        signUp: async (data) => {
        },
    }
})
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // Restoring token failed
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                await AsyncStorage.setItem('userToken', data.token);
                dispatch({ type: 'SIGN_IN', token: data.token });
            },
            signOut: async () => {
                await AsyncStorage.removeItem('userToken');
                dispatch({ type: 'SIGN_OUT' })
            },
            signUp: async (data) => {
                dispatch({ type: 'SIGN_IN', token: data.token });
            },
        }),
        []
    );
    return (
        <AuthContext.Provider
            value={{
                state,
                authContext
            }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}

export default useAuth