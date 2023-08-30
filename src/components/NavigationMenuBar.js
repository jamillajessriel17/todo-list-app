import {
  HomeOutlined,
  FileDoneOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/navigationBar.css";

const NavigationMenuBar = () => {
  const navigation = useNavigate();
  const menuItems = [
    {
      label: "Home",
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "Done",
      key: "/done",
      icon: <FileDoneOutlined />,
    },
    {
      label: "Help",
      key: "/help",
      icon: <QuestionCircleOutlined />,
    },
  ];
  const [current, setCurrent] = useState("/");
  const onClick = (item) => {
    setCurrent(item.key);
    navigation(item.key);
  };
  return (
    <div className="nav-bar">
      <Menu
        style={{}}
        onClick={onClick}
        mode="horizontal"
        items={menuItems}
        selectedKeys={[current]}
      />
    </div>
  );
};
export default NavigationMenuBar;
