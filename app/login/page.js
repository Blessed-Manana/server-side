"use client"
import { createContext } from 'react';
import styles from "../components/loginForm/LoginForm.module.css"
import {
    StyledContainer,
    StyledTextInput,
    StyledFormArea,
    StyledFromButton,
    StyledLabel,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
} from "../components/Styles";
import { Formik, Form } from 'formik';
import { TextInput } from "../components/loginForm/LoginForm";
import * as Yup from "yup";
import { FiMail, FiLock } from 'react-icons/fi';
import { Dna } from 'react-loader-spinner';
import { Link } from "@mui/material";

const Login = () => {
    const navigateToDashboard = () => {
        window.location.href = '/welcomePage';
    };

    return (
        <StyledContainer className={styles.StyledContainer}>
            <StyledFormArea className={styles.formArea}>
                <img className={styles.logo} src="FcLogo.png" alt="FcLogo.png" />
                <StyledTitle colors={colors.theme} size={30}>Memeber Login</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email('Invalid email adress').required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(15, "Password is too long").required("Required"),
                        })
                    }

                    onSubmit={(e, val, { setSubmitting }) => {
                        e.preventDefault();

                        console.log(val);
                        setTimeout(() => {

                            navigateToDashboard();
                        }, 1000);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form action="/login" method='post'>
                            <TextInput
                                className={styles.input}
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="Enter Em@il"
                                icon={<FiMail />}
                            />

                            <TextInput
                                className={styles.input}
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="Enter Pa**word"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                {!isSubmitting && <StyledFromButton  type="sumbit">Login</StyledFromButton>}

                                {isSubmitting && (
                                    <Dna
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="dna-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="dna-wrapper"
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New here? <Link className={styles.TextLink} href="/signup">SignUp</Link>
                </ExtraText>
            </StyledFormArea>
        </StyledContainer>
    );
}

export default Login;