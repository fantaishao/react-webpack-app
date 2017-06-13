import React ,{Component}from 'react';
import ReactDom from 'react-dom';
import {Table} from 'antd';

const dataSource = [{
  key: '1',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class DBTable extends Component {
  render() {
    return (
      <Table dataSource={dataSource} columns={columns} />
    )
  }
}

export default DBTable;
