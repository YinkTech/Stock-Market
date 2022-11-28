import React from 'react'
import { PropTypes } from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const Filter = ({handleFilter}) => (
  <Dropdown className='mb-3' onSelect={handleFilter}>
  <Dropdown.Toggle className="dropdown bg-success">
    Page Filter
  </Dropdown.Toggle>

  <Dropdown.Menu className=" bg-info text-center w-auto">
    <Dropdown.Item eventKey="1" className='border'>1</Dropdown.Item>
    <Dropdown.Item eventKey="2" className='border'>2</Dropdown.Item>
    <Dropdown.Item eventKey="3" className='border'>3</Dropdown.Item>
    <Dropdown.Item eventKey="4" className='border'>4</Dropdown.Item>
    <Dropdown.Item eventKey="5" className='border'>5</Dropdown.Item>
    <Dropdown.Item eventKey="6" className='border'>6</Dropdown.Item>
    <Dropdown.Item eventKey="7" className='border'>7</Dropdown.Item>
    <Dropdown.Item eventKey="8" className='border'>8</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
);


Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;