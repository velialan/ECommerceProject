import React from 'react';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Name is required."),
    email: Yup
        .string()
        .email("Not a valid email address. Should be your@email.com")
        .required("Email is required."),
    password: Yup
        .string()
        .min(8, "Your password must be at least 8 characters")
        .required("Password is required."),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref("password")], "Passwords does not match")
        .required("Password is required."),
});
export const SigninSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Not a valid email address. Should be your@email.com")
        .required("Email is required."),
    password: Yup
        .string()
        .min(8, "Your password must be at least 8 characters")
        .required("Password is required."),

});

