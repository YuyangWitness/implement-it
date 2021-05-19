import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { get } from 'lodash'

import { getDashboardCapacity } from '../../services/dashboardService';
import Scale from '../../components/scale';
const columns = [
  {
    title: 'Capacity',
    dataIndex: 'capacity',
    key: 'capacity',
    render: (text: string) => {
      const colorMap: any = {
        "Used": "#007DB8",
        "Availbale": "#f5f5f5",
        "Reserved": "pink"
      }
      return <div>{text} <span style={{width: "10px", height: "10px", background: colorMap[text], display: "inline-block"}}></span></div>
    }
  },
  {
    title: 'Base- /Base-10',
    dataIndex: 'base',
    key: 'base',
  },
  {
    title: 'Base-2',
    dataIndex: 'base2',
    key: 'base2',
  },
  {
    title: 'Base-10',
    dataIndex: 'base10',
    key: 'base10',
  },
];

export default function HealthTable() {
  const defaultValue: any[] = []
  const [dataSource, setDataSource] = useState(defaultValue)
  const [scaleData] = useState([10, 10, 10])
  useEffect(() => {
    getDashboardCapacity().then((res) => {
      if(res.isSuccess){
        const { used, available, reserved } = get(res, "result")
        if(used && available && reserved) {
          handleResultData(used, "Used")
          handleResultData(available, "Availbale")
          handleResultData(reserved, "Reserved")
          setDataSource([used, available, reserved])
        }
      }
    })
  }, [])
  const colors = ["#007DB8", "#f5f5f5", "pink"]
  return (
    <div>
      <h2>Capacity Utilization</h2>
      <Scale data={scaleData} colors={colors} />
      <Table columns={columns} dataSource={dataSource} pagination={false}/>
    </div>
  )
}

function handleResultData(obj: any, text: string) {
  obj.capacity = text
  obj.key = text
}
