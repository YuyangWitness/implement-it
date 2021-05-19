import React, { useState } from 'react'
import { Menu } from 'antd';
import { DashboardOutlined, UserOutlined, CloudOutlined, NodeIndexOutlined, SettingOutlined } from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'
import { get } from 'lodash'

export default withRouter(function MyHeader(props: any) {
  // console.log(props)
  const useCurrentHeader  = () => {
    let pathname = get(props, "location.pathname")
    if(pathname === "/") {
      pathname = "dashboard"
    } else if (pathname) {
      pathname = pathname.slice(1)
    }
    return useState(pathname)
  }

  const [currentHeader, setHeaderLink] = useCurrentHeader()
  const changeHeader = (e:any) => {
    setHeaderLink(e.key)
  }
  return (
    <Menu onClick={changeHeader} selectedKeys={[currentHeader]} mode="horizontal">
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/">Dashboard</Link>
        </Menu.Item>
      <Menu.Item key="accounts" icon={<UserOutlined />}>
      <Link to="/accounts">Accounts</Link>
        </Menu.Item>
      <Menu.Item key="objectstore" icon={<CloudOutlined />}>
      <Link to="/objectstore">Object Stores</Link>
        </Menu.Item>
      <Menu.Item key="objectscale" icon={<NodeIndexOutlined />}>
      <Link to="/objectscale">ObjectSacel Systems</Link>
        </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
      <Link to="/settings">Settings</Link>
        </Menu.Item>
    </Menu>
  )
})