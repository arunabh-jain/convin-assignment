import { Select } from 'antd';
import React from 'react';
import DropdownMenu from './Dropdown';

const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const Dropdown = () => (
  <Select
    showSearch
    placeholder="Please Select"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    allowClear
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
);

export default Dropdown;