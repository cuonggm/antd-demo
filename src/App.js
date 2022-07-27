import "./antd-theme/antd-customized.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { ChromeOutlined } from "@ant-design/icons";
import Login from "./pages/Login/Login";

// Do not import. Just get from Layout
const { Content, Header, Footer } = Layout;

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
          {/* <Sider
            style={{
              backgroundColor: "white",
            }}
          >
            <SiderContent />
          </Sider> */}
          <Content
            style={{
              paddingLeft: "12px",
              paddingTop: "8px",
              paddingRight: "12px",
              paddingBottom: "8px",
              backgroundColor: "white",
            }}
          >
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>staging.cuonggm.com</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
