import "./antd-theme/antd-customized.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Col, Layout, Row } from "antd";
import P001FormDemo from "./pages/P001FormDemo/P001FormDemo";
import P002Spin from "./pages/P002Spin/P002Spin";

// Do not import. Just get from Layout
const { Content, Header } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={{ backgroundColor: "#5DAA68", color: "#FAF1CF" }}>
          Header
        </Header>
        <Layout>
          {/* <Sider style={{ backgroundColor: "white" }}>Sider</Sider> */}
          <Content style={{ padding: "10px" }}>
            <Row justify="center">
              <Col span="18">
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
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
