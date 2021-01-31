import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterFild from './FilterStyled';
import { setFilter } from '../../../redux/contacts/contactsActions';

const Filter = ({ filter, setFilter }) => {
  const onHandleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <FilterFild>
      <input
        className="filter_input"
        placeholder="Find by name..."
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChange}
      />
    </FilterFild>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.phonebookContacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => {
      dispatch(setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
