import { Col, Form, Input, Row } from "antd";

const P001FormDemo = (props) => {
  return (
    <div>
      <h1>P001FormDemo</h1>
      <div>
        <Row justify="center">
          <Col span="8">
            <Form id="my-form">
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    min: 3,
                    message: "At least 3 characters.",
                  },
                  {
                    max: 8,
                    message: "Max 8 characters.",
                  },
                  {
                    len: 5,
                    message: "Length must be 5.",
                  },
                  {
                    required: true,
                    message: "Required Field.",
                  },
                  {
                    whitespace: true,
                    message: "Not allow whitespace.",
                  },
                  // Spread Operator to get inside getFieldValue of FormInstance
                  ({ getFieldValue }) => ({
                    // Return RuleConfig as validator function
                    validator: (_, value) => {
                      if (value.includes("a")) {
                        return Promise.reject(
                          new Error("Can not include 'a'.")
                        );
                      }

                      return Promise.resolve();
                    },
                  }),
                  {
                    validator: (_, value) => {
                      if (value.includes("b")) {
                        return Promise.reject(new Error("Can not include 'b'."));
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input autoComplete="off"></Input>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default P001FormDemo;
