import { HomeOutlined, InfoCircleOutlined, PictureOutlined, AppstoreAddOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { Header } from "antd/es/layout/layout"
import Link from "next/link"

export default () => {
    return(
        <Header>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400&display=swap" rel="stylesheet"/>

    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">Início</Link>
      </Menu.Item>
      <Menu.Item key="sobre" icon={<InfoCircleOutlined />}>
        <Link href="/sobre">Sobre</Link>
      </Menu.Item>
      <Menu.Item key="galerias" icon={<PictureOutlined />}>
        <Link href="/galerias">Galerias</Link>
      </Menu.Item>
      <Menu.Item key="plataforma" icon={<AppstoreAddOutlined />}>
        <Link href="/plataforma">Plataforma</Link>
      </Menu.Item>
    </Menu>
  </Header>
    )
}