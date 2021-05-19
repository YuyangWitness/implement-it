import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { get } from 'lodash'

import { getDashboardHealth } from '../../services/dashboardService';
const columns = [
  {
    title: 'Critical',
    dataIndex: 'critical',
    key: 'critical',
  },
  {
    title: 'Error',
    dataIndex: 'error',
    key: 'error',
  },
  {
    title: 'Warning',
    dataIndex: 'warning',
    key: 'warning',
  },
];

export default function HealthTable() {
  const defaultValue: any[] = []
  const [dataSource, setDataSource] = useState(defaultValue)
  useEffect(() => {
    getDashboardHealth().then((res) => {
      if(res.isSuccess){
        const data = get(res, "result") || []
        setDataSource(data)
      }
    })
  }, [])
  return (
    <div>
      <h2>Health</h2>
      <Table columns={columns} dataSource={dataSource} pagination={false}/>
    </div>
  )
}
