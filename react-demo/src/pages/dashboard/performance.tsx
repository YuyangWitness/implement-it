import { Table } from "antd";
import React, { useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react'
import { getDashboardPerformance, getDashboardPerformanceData } from "../../services/dashboardService";
import { PERFORMANCE_X_12 } from './../../utils'

const defaultValue: any[] = []
const DEFAULT_SELECTED: React.Key[] = []
enum PERFORMACE_COLORS {
  read50 = "#007DB8",
  read90 = "#eda053",
  write50 = "#a1daf4",
  write90 = "#edc49c"
}
const columns = [
  {
    title: () => "Object Store",
    dataIndex: 'objectstore',
    render: (text: string) => <a href="/#">{text}</a>,
  },
  {
    title: <div><span className="performance-title" style={{ "background": PERFORMACE_COLORS["read50"]}}></span>Read First Byte(p50)</div>,
    dataIndex: 'read50',
  },
  {
    title: <div><span className="performance-title" style={{ "background": PERFORMACE_COLORS["write50"]}}></span>Write Last Byte(p50)</div>,
    dataIndex: 'write50',
  },
  {
    title: <div><span className="performance-title" style={{ "background": PERFORMACE_COLORS["read90"]}}></span>Read First Byte(p90)</div>,
    dataIndex: 'read90',
  },
  {
    title: <div><span className="performance-title" style={{ "background": PERFORMACE_COLORS["write90"]}}></span>Write Last Byte(p90)</div>,
    dataIndex: 'write90',
  },
  {
    title: 'Compression Ratio',
    dataIndex: 'compression',
  },
];

const defaultOptions = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: 'category',
    data: PERFORMANCE_X_12,
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: function (value: number) {
        return value + 'ms';
    }
    }
  },
  series: [],
  tooltip: {
    trigger: 'axis',
  },
};

export default function Performance() {
  const [dataSource, setdataSource] = useState(defaultValue)
  const [selectedValue, setSelectedValue] = useState(DEFAULT_SELECTED)
  const [option, setOption] = useState(defaultOptions)
  const [allPerformanceData, setallPerformanceData] = useState({})
  useEffect(() => {
    async function getData() {
      const performace =  await getDashboardPerformance()
      if(performace.isSuccess){
        for(let value of performace.result) {
          value.key = value.objectstore
        }
        setdataSource(performace.result)
        if(performace.result.length > 0) {
          setSelectedValue([performace.result[0].key])
        }
      }
      const performaceData = await getDashboardPerformanceData()
      if(performaceData.isSuccess) {
        const currentKey = performace.result[0].key
        handlerSeriesData(performaceData.result, currentKey)
        setallPerformanceData(performaceData.result)
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlerSeriesData = (allPerformanceData: any, selectedRowKey: React.Key) => {
    const currentData = (allPerformanceData as any)[selectedRowKey]
    const series: SeriesDataType[] = []
        for(let key in currentData) {
          const seriesData: SeriesDataType = {
            data: currentData[key],
            type: 'line',
            smooth: true,
            color: (PERFORMACE_COLORS as any)[key],
            name: key
          }
          series.push(seriesData)
        }
    const data = Object.assign({}, option, {series})
    setOption(data)
  }

  const changeRadio = (selectedRowKeys: React.Key[]) => {
    setSelectedValue(selectedRowKeys)
    handlerSeriesData(allPerformanceData, selectedRowKeys[0])
  }
  return (
    <div>
      <h2>Performance: {selectedValue[0]}</h2>
      <ReactECharts option={option} />
      <Table className="performace-table" rowSelection={{type: "radio", onChange: changeRadio, selectedRowKeys: selectedValue}} columns={columns} dataSource={dataSource}/>
    </div>
  )
}

type SeriesDataType = {
  data: number[],
  type: string,
  smooth: boolean,
  color: string,
  name: string
}