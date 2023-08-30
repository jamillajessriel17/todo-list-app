import {
  FileDoneOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/navigationBar.css";

const NavigationMenuBar = () => {
  const navigation = useNavigate();

  const path = window.location.href.replace("http://localhost:3000", "");
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
  const [current, setCurrent] = useState(path);
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
