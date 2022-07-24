import "./antd-theme/antd-customized.css"
import { BrowserRouter } from "react-router-dom";
import { Button, Layout } from "antd";

// Do not import. Just get from Layout
const { Content, Footer, Header, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={{backgroundColor: "#5DAA68", color: "#FAF1CF"}}>Header</Header>
        <Layout>
          <Sider style={{backgroundColor: "white"}}>Sider</Sider>
          <Content><Button type="primary">Primary Button</Button></Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
