import { LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Spin } from "antd";
import { useEffect, useState } from "react";

// Config Rows and Columns
const colAlignConfig = "center";
const colSpanConfig = "24";
const title = "P002Spin";

// Config Icons
const customLoadingIcon = <LoadingOutlined style={{ fontSize: 36 }} />;

const P002Spin = (props) => {
  // For Spin 1
  const [loading1, setLoading1] = useState(false);

  useEffect(() => {
    if (loading1 === true) {
      setTimeout(() => {
        setLoading1(false);
      }, 1000);
    }
  }, [loading1, setLoading1]);

  const onClickAvtiveSpinHandler = (event) => {
    event.preventDefault();
    setLoading1(true);
  };

  // For Spin 2
  const [isLoading2, setIsLoading2] = useState(false);
  useEffect(() => {
    if (isLoading2 === true) {
      setTimeout(() => {
        setIsLoading2(false);
      }, 2000);
    }
  }, [isLoading2, setIsLoading2]);

  const onClickLoading2Handler = () => {
    setIsLoading2(true);
  };

  // Return Component HTML
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {/* Spin */}
        <Row style={{ paddingBottom: "16px" }}>
          <Col span={colSpanConfig} align={colAlignConfig}>
            <Space size="middle">
              <Button type="primary" onClick={onClickAvtiveSpinHandler}>
                Active Spin
              </Button>
              {loading1 && <Spin />}
            </Space>
          </Col>
        </Row>

        {/* Spin */}
        <Row>
          <Col span={colSpanConfig} align="center">
            <Space direction="vertical" size="middle">
              <Button type="primary" onClick={onClickLoading2Handler}>
                Active Spin
              </Button>
              {/* size, tip, spinning, indicator properties */}
              <Spin
                indicator={customLoadingIcon}
                size="large"
                spinning={isLoading2}
                tip="... Loading something ..."
              >
                <div
                  style={{
                    backgroundColor: "lightgrey",
                    color: "black",
                    border: "solid 1px black",
                    width: "500px",
                    height: "300px",
                  }}
                >
                  Content
                </div>
              </Spin>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default P002Spin;
