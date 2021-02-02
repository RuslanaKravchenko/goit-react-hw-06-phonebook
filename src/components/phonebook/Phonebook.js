import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Main from './PhonebookStyled';
import { getContactsFromLS } from '../../redux/contacts/contactsActions';
import Notice from '../notice/Notice';
import EditProfileForm from './editProfileForm/EditProfileForm';
import Modal from './modal/Modal';
import ContactInfo from './contactInfo/ContactInfo';

const Phonebook = ({
  contacts,
  getContactsFromLS,
  showNotice,
  isOpen,
  content,
  idValue,
}) => {
  //   componentDidMount
  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));
      contactsFromLS.length && getContactsFromLS([...contactsFromLS]);
    }
    // eslint-disable-next-line
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getContactById = idValue => {
    const contactById = contacts.find(contact => contact.id === idValue);
    return contactById;
  };

  return (
    <Main>
      <CSSTransition
        in={showNotice}
        timeout={250}
        classNames="my-notice"
        unmountOnExit
      >
        <Notice />
      </CSSTransition>

      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="title"
        unmountOnExit
      >
        <h1 className="phonebook_title">Phonebook</h1>
      </CSSTransition>

      <CSSTransition
        in={true}
        appear={true}
        timeout={400}
        classNames="form"
        unmountOnExit
      >
        <ContactForm />
      </CSSTransition>

      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="contactsTitle"
        unmountOnExit
      >
        <>
          <h2 className="contacts_title">Contacts</h2>
          {contacts.length > 1 && (
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames="filter"
              unmountOnExit
            >
              <Filter />
            </CSSTransition>
          )}
        </>
      </CSSTransition>

      <CSSTransition
        in={true}
        appear={true}
        timeout={550}
        classNames="contactsList"
        unmountOnExit
      >
        <ContactList />
      </CSSTransition>

      {contacts.length === 0 && (
        <CSSTransition
          in={true}
          appear={true}
          timeout={550}
          classNames="contactsText"
          unmountOnExit
        >
          <p className="contacts_text">
            Your phone book is empty. Please add a contact.
          </p>
        </CSSTransition>
      )}

      <CSSTransition
        in={isOpen}
        appear={true}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal>
          {content === 'openEditProfile' && (
            <EditProfileForm contactById={getContactById(idValue)} />
          )}

          {content === 'openContactInfo' && (
            <ContactInfo contactById={getContactById(idValue)} />
          )}
        </Modal>
      </CSSTransition>
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.phonebookContacts.contacts,
    showNotice: state.phonebookNotice.showNotice,
    isOpen: state.phonebookModal.isOpen,
    content: state.phonebookModal.content,
    idValue: state.phonebookContacts.idValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContactsFromLS: data => {
      dispatch(getContactsFromLS(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);

ContactForm.propTypes = {
  showNotice: PropTypes.bool,
  contacts: PropTypes.array,
  getContactsFromLS: PropTypes.array,
  isOpen: PropTypes.bool,
  content: PropTypes.string,
  idValue: PropTypes.string,
};
