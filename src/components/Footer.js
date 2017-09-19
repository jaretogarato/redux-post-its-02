import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Top Priority</FilterLink>
    {' '}
    <FilterLink>Normal Priority</FilterLink>
    {' '}
  </div>
)
export default Footer;
