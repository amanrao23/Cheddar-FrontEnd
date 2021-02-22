import React,{useState} from 'react';
import PropTypes from 'prop-types';
import NewConversationComp from '../../components/chat/NewConversationComp';
import { connect } from 'react-redux';
import { newConversation } from '../../actions/chat';

const NewConversation = ({ newConversation, auth, chat }) => {
  const [formData, setFormData] = useState({
    username: '',
  });

  const { username } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    newConversation({ username });
    setFormData({ username:'' });

  };

  return (
    <NewConversationComp
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

NewConversation.propTypes = {};
const mapStateToProps = state => ({
  chat: state.chat,
  auth: state.auth,
});
export default connect(mapStateToProps, {newConversation})(NewConversation);
