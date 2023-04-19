import { AppBar, Button, Space } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="基础用法">
        <Space>
          <Button type="primary">Button1</Button>
          <Button type="primary">Button2</Button>
          <Button type="primary">Button3</Button>
        </Space>
      </AppBar>

      <AppBar title="垂直">
        <Space direction="column" size="large">
          <Button type="primary">Button1</Button>
          <Button type="primary">Button2</Button>
          <Button type="primary">Button3</Button>
          <Button type="primary">Button4</Button>
        </Space>
      </AppBar>

      <AppBar title="间隙">
        <Space size={[20, 20]}>
          <Button type="primary">Button1</Button>
          <Button type="primary">Button2</Button>
          <Button type="primary">Button3</Button>
          <Button type="primary">Button4</Button>
          <Button type="primary">Button5</Button>
          <Button type="primary">Button6</Button>
        </Space>
      </AppBar>

      <AppBar title="靠右" flex={false}>
        <Space justify="flex-end">
          <Button type="primary">Button1</Button>
          <Button type="primary">Button2</Button>
        </Space>
      </AppBar>

      <AppBar title="环绕" flex={false}>
        <Space justify="space-around">
          <Button type="primary">Button1</Button>
          <Button type="primary">Button2</Button>
        </Space>
      </AppBar>

      <AppBar title="居中" flex={false}>
        <Space justify="center">
          <Button type="primary">Button1</Button>
          <Button type="primary">Button2</Button>
        </Space>
      </AppBar>

      <AppBar title="两端对齐" flex={false}>
        <Space justify="space-between">
          <Button type="primary">Button1</Button>
          <Button type="primary">Button2</Button>
        </Space>
      </AppBar>
    </>
  );
};

export default Demo;
