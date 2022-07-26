// import { AppleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

// const itemIcon = <AppleOutlined />;

const siderItems = [
  {
    key: "p001",
    label: <Link to={"/p001"}>P001 Form Demo</Link>,
    // icon: itemIcon,
  },
  {
    key: "p002",
    label: <Link to={"/p002"}>P002 Spin</Link>,
    // icon: itemIcon,
  },
];

const SiderContent = () => {
  return <Menu mode="vertical" items={siderItems} style={{ height: "100%" }} />;
};

export default SiderContent;
