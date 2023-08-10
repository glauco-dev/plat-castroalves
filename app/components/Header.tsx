import { HomeOutlined, InfoCircleOutlined, PictureOutlined, AppstoreAddOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { Header } from "antd/es/layout/layout"
import Link from "next/link"

export default () => {
    const HeaderStyle = {
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 50,
    }

    return(
        //@ts-ignore
        <Header style={{...HeaderStyle}}>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400&display=swap" rel="stylesheet"/>

    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">Início</Link>
      </Menu.Item>  
      <Menu.Item key="galerias" icon={<PictureOutlined />}>
        <Link href="/galerias">Galerias</Link>
      </Menu.Item>
      <Menu.Item key="portal" icon={<AppstoreAddOutlined />}>
        <Link href="/portal">Portal</Link>
      </Menu.Item>
    </Menu>
  </Header>
    )
}