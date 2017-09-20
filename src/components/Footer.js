import React from 'react';
import FilterLink from './FilterLink';
import { Card } from 'semantic-ui-react';

const Footer = () => (
  <div>
    <div>&nbsp;</div>
    <Card centered color='#333'>
      <strong>Filter by: </strong>
      <FilterLink>All</FilterLink>
      {' '}
      <FilterLink>Top Priority</FilterLink>
      {' '}
      <FilterLink>Normal Priority</FilterLink>
      {' '}
    </Card>

    <div><strong>Click any Post-It to change it to Top Priority</strong></div>
  </div>
)
export default Footer;
