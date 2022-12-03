import React from 'react'
import { PropTypes } from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const Filter = ({handleFilter}) => (
  <Dropdown className='mb-3' onSelect={handleFilter}>
  <Dropdown.Toggle className="dropdown bg-success">
    Page Filter
  </Dropdown.Toggle>

  <Dropdown.Menu className=" bg-info text-center w-auto">
    <Dropdown.Item eventKey="1" className='border fw-bold fs-3'>1</Dropdown.Item>
    <Dropdown.Item eventKey="2" className='border fw-bold fs-3'>2</Dropdown.Item>
    <Dropdown.Item eventKey="3" className='border fw-bold fs-3'>3</Dropdown.Item>
    <Dropdown.Item eventKey="7" className='border fw-bold fs-3'>4</Dropdown.Item>
    <Dropdown.Item eventKey="8" className='border fw-bold fs-3'>5</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
);


Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;