import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import RegisterComp from "../../components/auth/RegisterComp";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    username:'',
    email: '',
    password: '',
    password2: '',

  });

  const { name,username, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name,username, email, password});
      console.log('fjhdjh');
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/chat' />;
  }

  return (
    <Fragment>
      <div className="">
        <RegisterComp
          onChange={onChange}
          onSubmit={onSubmit}
          formData={formData}
        />
      </div>
    </Fragment>

  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register})(Register);
