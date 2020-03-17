import React from 'react';
import { Input } from 'antd';
import SearchStyles from './SearchStyles';

const Searchbar = props => (
  <SearchStyles>
    <Input {...props} placeholder="Search" />
  </SearchStyles>
);

export default Searchbar;
