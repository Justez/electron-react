import React from 'react';
// import { Button, Grid } from '@material-ui/core'
// import { Formik, Form, } from 'formik';
// import InputField from 'components/input-field'

const SearchFormTemplate = () => {
    return (
        <>
            {/* <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = { email: '', password: '' };
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Grid container direction="column" spacing={3}>
                            <Grid item xs={12}>
                                <InputField label="Email" name="email" type="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <InputField type="password" label="Pass" name="password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" disabled={isSubmitting} variant="outlined" color="secondary">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik> */}
        </>
    )
}

export default SearchFormTemplate 