import { useState } from "react";

import styles from "./ControlledForm.module.css";

const formInitialState = {
    username: "",
    password: "",
    age: "",
    gender: "male",
    running: false,
    swimming: false,
    tennis: false,
};

const errorsInitialState = {
    name: "",
    password: "",
    age: "",
};

export default function ControlledForm() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState(errorsInitialState);

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
    };

    const submitHandler = () => {
        console.log(formValues);
        resetFormHandler();
    };

    const onCheckboxChange = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.checked,
        }));
    };

    const nameValidator = () => {
        const username = formValues.username.trim(); // Remove leading and trailing white spaces

        if (username === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: "Username cannot be empty",
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: "", // Clear the error if it's valid
            }));
        }
    };

    const passwordValidator = () => {
        const password = formValues.password;

        if (password.length < 6) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: "Password should be at least 6 characters long",
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: "", // Clear the error if it's valid
            }));
        }
    };

    const ageValidator = () => {
        const age = formValues.age;

        if (age < 0 || age > 120) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                age: "Age should be between 0 120",
            }));
        } else {
            if (errors.age) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    age: "",
                }));
            }
        }
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formValues.username}
                        onChange={changeHandler}
                        onBlur={nameValidator}
                    />
                    {errors.name && (
                        <p className={styles.errorMessage}>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                        onBlur={passwordValidator}
                    />
                    {errors.password && (
                        <p className={styles.errorMessage}>{errors.password}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputError}
                    />
                    {errors.age && (
                        <p className={styles.errorMessage}>{errors.age}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formValues.gender}
                        onChange={changeHandler}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <h3>Hobbies</h3>
                    <input
                        type="checkbox"
                        name="running"
                        id="running"
                        checked={formValues.running}
                        onChange={onCheckboxChange}
                    />
                    <label htmlFor="running">running</label>
                    <input
                        type="checkbox"
                        name="swimming"
                        id="swimming"
                        checked={formValues.swimming}
                        onChange={onCheckboxChange}
                    />
                    <label htmlFor="swimming">swimming</label>
                    <input
                        type="checkbox"
                        name="tennis"
                        id="tennis"
                        checked={formValues.tennis}
                        onChange={onCheckboxChange}
                    />
                    <label htmlFor="tennis">tennis</label>
                </div>
                <div>
                    <button type="button" onClick={submitHandler}>
                        Register
                    </button>
                    <button type="button" onClick={resetFormHandler}>
                        Reset
                    </button>
                </div>
            </form>
        </>
    );
}
