import "./antd-theme/antd-customized.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import Login from "./pages/Login/Login";
import styles from "./App.module.css"

// Do not import. Just get from Layout
const { Content, Header, Footer } = Layout;

function App() {
  const headerBackgroundColor = "#5DAA68";

  return (
    <BrowserRouter>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ backgroundColor: headerBackgroundColor, height: "70px" }}>
          <Link to="/login" className={styles.headerItem}>Login</Link>
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
