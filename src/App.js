import "./antd-theme/antd-customized.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button, Col, Layout, Row } from "antd";
import P001FormDemo from "./pages/P001FormDemo/P001FormDemo";

// Do not import. Just get from Layout
const { Content, Footer, Header, Sider } = Layout;

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
                  <Route path={"/"} exact>
                    <P001FormDemo />
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
