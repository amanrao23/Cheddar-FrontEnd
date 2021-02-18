import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({  isAuthenticated,formData,onChange,onSubmit }) => {
  
  const { email, password } = formData;
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='form-border'>
        <h1 className='large text-primary'>Log In</h1>

        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>

          <input type='submit' className='btn btn-primary' value='login' />
        </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default Login;
