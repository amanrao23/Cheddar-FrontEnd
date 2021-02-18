import React,{useState} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import LoginComp from '../../components/auth/LoginComp'

const Login = ({  login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login({email, password});
  };

 return( <LoginComp isAuthenticated={isAuthenticated} formData={formData} onChange={onChange} onSubmit={onSubmit} />)
};

login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {  login })(Login);
