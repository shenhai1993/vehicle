/* eslint-disable react/no-array-index-key */
import {
  blue,
  cyan,
  geekblue,
  gold,
  green,
  grey,
  lime,
  magenta,
  purple,
  red,
  volcano,
  yellow,
} from "@ant-design/colors";
import { BgColorsOutlined } from "@ant-design/icons";
import type { FormItemProps } from "@ant-design/pro-form";
import { Button, Col, Form, Input, Popover, Row } from "antd";
import { useEffect, useState } from "react";

const Content = ({ onChange }: any) => {
  return (
    <div>
      {[
        red,
        volcano,
        gold,
        yellow,
        lime,
        green,
        cyan,
        blue,
        geekblue,
        purple,
        magenta,
        grey,
      ].map((c, index) => (
        <Row key={index}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => {
            return (
              <Col
                key={index + "_" + v}
                style={{ backgroundColor: c[v] }}
                onClick={() => onChange(c[v])}
                css={{
                  width: "30px",
                  height: "30px",
                }}
              />
            );
          })}
        </Row>
      ))}
    </div>
  );
};

type ColorPickerType = {
  value?: string;
  onChange?: (value: string) => void;
};

const ColorPicker = ({ value, onChange }: ColorPickerType) => {
  const [color, setColor] = useState(value);

  useEffect(() => {
    setColor(value);
  }, [value]);

  return (
    <Input.Group compact>
      <Input style={{ width: "200px" }} value={color} />
      <Popover
        placement="right"
        title={false}
        content={
          <Content
            onChange={(c: string) => {
              setColor(c);
              onChange?.(c);
            }}
          />
        }
        trigger="click"
      >
        <Button style={{ backgroundColor: color }}>
          <BgColorsOutlined />
        </Button>
      </Popover>
    </Input.Group>
  );
};

export default function MyColorPicker({ name, label, ...rest }: FormItemProps) {
  return (
    <Form.Item name={name} label={label} {...rest}>
      <ColorPicker />
    </Form.Item>
  );
}
