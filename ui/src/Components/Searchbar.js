import { Input } from 'antd';
import React from 'react';
import "./Stylesheets/Searchbar.css";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const Searchbar = () => (
  
    <Search className="searchbar"
      placeholder="Search Task"
      allowClear
      enterButton
      size="middle"  
      onSearch={onSearch}
    />

);

export default Searchbar;