import { Select } from 'antd';
import React from 'react';
import "./Stylesheets/Dropdown.css";

const { Option } = Select;

const onSearch = (value) => {
  console.log('search:', value);
};

const Dropdown = (props) => (

  <Select
    showSearch
    placeholder="Please Select"
    optionFilterProp="children"
    onChange={props.onChange}
    onSearch={onSearch}
    allowClear
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    { 
      props.bucketNameData.map((data)=>{
        return(<Option key={data.id} value={data.id}>{data.bucket_title}</Option>)
      })
    }
  </Select>
);

export default Dropdown;