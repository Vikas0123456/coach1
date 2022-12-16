import {
  //   HomeOutlined,
  UserOutlined,
  //   ShoppingOutlined,
  //   BankOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./sidebar.css";
// import "antd/dist/antd.css";
import { Link } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link to="/">
      <b>Dashboard</b>
    </Link>,
    "sub1",
    <UserOutlined />
  ),

  getItem(<b>Hospitals</b>, "sub2", <UserOutlined />, [
    getItem(<Link to="/addhospital">Add New Hospitals</Link>, "3"),
    getItem(<Link to="/viewhospital">View Hospitals</Link>, "4"),
  ]),

  getItem(<b>Users</b>, "sub3", <UserOutlined />, [
    getItem(<Link to="/adduser">Add New User</Link>, "5"),
    getItem(<Link to="/viewuser">Update User</Link>, "6"),
  ]),

  getItem(<b>Offers</b>, "sub4", <UserOutlined />, [
    getItem(<Link to="/addoffers">Add New Offers</Link>, "7"),
    getItem(<Link to="/deactivateoffers">Deactivate Offers</Link>, "8"),
  ]),

  getItem(
    <Link to="/logout">
      <b>Logout</b>
    </Link>,
    "sub5",
    <UserOutlined />
  ),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout
        style={{
          minHeight: "600px",
          backgroundColor: "blue",
          maxHeight: "100%",
          position: "static",
          // marginTop: '-700px',
          // marginLeft: '200px',
          height: "100%",
          width: "0px",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            color="rgb(77, 204, 244)"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
      </Layout>
    </>
  );
};

export default Sidebar;
