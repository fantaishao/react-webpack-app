require('../styles/table.less');

import React ,{Component}from 'react';
import ReactDom from 'react-dom';
import {Table, Pagination } from 'antd';
import {columns, data} from '../datas/table.config';

class DBTable extends Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Table rowSelection={rowSelection} dataSource={data} columns={columns} pagination={false} />
        <Pagination current={1} defaultPageSize={7} total={50}></Pagination >
      </div>
    )
  }
}

export default DBTable;
