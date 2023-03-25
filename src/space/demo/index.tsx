import { AppBar, Button, Space } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="基础用法">
        <Space>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </AppBar>

      <AppBar title="垂直排列">
        <Space direction="vertical" fill>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </AppBar>

      <AppBar title="自定义间距">
        {/* 10px */}
        <Space size={10}>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>

        {/* 1rem */}
        <Space size="1rem">
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </AppBar>

      <AppBar title="对齐方式">
        <Space align="end" style={{ padding: '16px', background: '#f3f2f5' }}>
          <Button type="primary">按钮</Button>
          <div style={{ padding: '40px 20px', background: '#fff' }}>Block</div>
        </Space>
      </AppBar>

      <AppBar title="自动换行">
        <Space size={[10, 30]} wrap>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="primary">按钮</Button>
        </Space>
      </AppBar>
    </>
  );
};

export default Demo;
