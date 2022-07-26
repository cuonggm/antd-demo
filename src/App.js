import "./antd-theme/antd-customized.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Col, Layout, Row } from "antd";
import P001FormDemo from "./pages/P001FormDemo/P001FormDemo";
import P002Spin from "./pages/P002Spin/P002Spin";
import SiderContent from "./components/SiderContent/SiderContent";
import { ChromeOutlined } from "@ant-design/icons";

// Do not import. Just get from Layout
const { Content, Header, Sider, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ backgroundColor: "#5DAA68", color: "#FAF1CF" }}>
          <Link to="/" style={{ color: "white", fontSize: "18pt" }}>
            <ChromeOutlined style={{ marginRight: "2px" }} />
            Home
          </Link>
        </Header>
        <Layout>
          <Sider
            style={{
              backgroundColor: "white",
            }}
          >
            <SiderContent />
          </Sider>

          <Content
            style={{
              paddingLeft: "12px",
              paddingTop: "8px",
              paddingRight: "12px",
              paddingBottom: "8px",
              backgroundColor: "white",
            }}
          >
            <Row justify="center">
              <Col span="24">
                <Switch>
                  <Route path={"/p001"} exact>
                    <P001FormDemo />
                  </Route>

                  <Route path={"/p002"} exact>
                    <P002Spin />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>staging.cuonggm.com</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
