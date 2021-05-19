import CapacityTable from './capacityTable'
import HealthTable from './healthTable'

import "./index.css"
import Performance from './performance'

export default function Dashboard() {
  return (
    <div className="dashboard-div">
      <Performance />
      <div className="left-table">
        <HealthTable />
        <CapacityTable />
      </div>
    </div>
  )
}