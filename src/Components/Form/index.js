import React from 'react';
import {Formik, Field} from 'formik';
import {loginInitialValues, loginValidationSchema} from './constant';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../CustomInput';
import Button from '../Button';
import Box from '../Box';
import Text from '../Text';
import Theme from '../../Theme';

const Form = () => {
  const navigation = useNavigation();

  const Submit = () => {
    navigation.navigate('Home');
  };
  return (
    <Box px={3} width={'100%'}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={loginInitialValues}
        onSubmit={Submit}>
        {({handleSubmit, isValid, values}) => (
          <>
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button
              onPress={handleSubmit}
              disabled={!isValid || values.email === ''}
              color="secondary"
              width="50%"
              mt={4}
              px={4}
              py={3}
              borderRadius={Theme.radii.normal}
              mx="auto"
              bg="gray">
              <Text color="white">Login</Text>
            </Button>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
