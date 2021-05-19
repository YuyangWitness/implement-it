import axios from 'axios'

import './../mock/mock'
import { config } from "./config"

const DASHBOARD_BASE_URL = "/dashboard"
const DASHBOARD_HEALTH_URL = "/health"
const DASHBOARD_CAPACITY_URL = "/capacity"
const DASHBOARD_PERFORMANCE_URL = "/performance"
const DASHBOARD_PERFORMANCE_DATA_URL = "/performance/data"



const dashboardInstance = axios.create({
  baseURL: DASHBOARD_BASE_URL,
  timeout: 1000
})

config(dashboardInstance)

export async function getDashboardHealth(): Promise<ResponseArrayType> {
  return dashboardInstance.get(DASHBOARD_HEALTH_URL)
}

export async function getDashboardCapacity(): Promise<ResponseObjectType> {
  return dashboardInstance.get(DASHBOARD_CAPACITY_URL)
}

export async function getDashboardPerformance(): Promise<ResponseArrayType> {
  return dashboardInstance.get(DASHBOARD_PERFORMANCE_URL)
}

export async function getDashboardPerformanceData(): Promise<ResponseObjectType> {
  return dashboardInstance.get(DASHBOARD_PERFORMANCE_DATA_URL)
}



type ResponseArrayType = {
  isSuccess: boolean
  result: any[]
  errorMsg: string | null
}

type ResponseObjectType = {
  isSuccess: boolean
  result: any
  errorMsg: string | null
}
