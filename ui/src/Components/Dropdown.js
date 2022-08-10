import { Select } from 'antd';
import React from 'react';
import "./Stylesheets/Dropdown.css";

const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const Dropdown = (props) => (
  

  <Select
    showSearch
    placeholder="Please Select"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    allowClear
    value={props.bucketName}
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    {
      props.bucketNameData.map((data)=>{
        return(<Option value="jack">{data.bucket_title}</Option>)
      })
    }
  </Select>
);

export default Dropdown;