import { Button, Col, Row, Space, Spin } from "antd";
import { useEffect, useState } from "react";

// Config Rows and Columns
const colAlignConfig = "center";
const colSpanConfig = "24";
const title = "P002Spin";

const P002Spin = (props) => {
    const [loading1, setLoading1] = useState(false);

    useEffect(() => {
        if(loading1 === true) {
            setTimeout(() => {
                setLoading1(false);
            }, 1000)
        }
    }, [loading1, setLoading1]);

    const onClickAvtiveSpinHandler = event => {
        event.preventDefault();
        setLoading1(true);
    }

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Row>
          <Col span={colSpanConfig} align={colAlignConfig}>
            <Space size="middle">
              <Button type="primary" onClick={onClickAvtiveSpinHandler}>Active Spin</Button>
              {loading1 && <Spin />}
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default P002Spin;
