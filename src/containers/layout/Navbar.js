import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import GuestNav from "../../components/layout/GuestNav";
import UserNav from "../../components/layout/UserNav";

const Navbar = ({ isAuthenticated, logout }) => {
  
  return (
    <Fragment>
      {isAuthenticated ? (
        <UserNav logout={logout} />
      ) : (
        <GuestNav />
      )}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
