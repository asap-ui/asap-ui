import { AppBar, Button, Loading, Space } from 'asap-ui';
import React, { useState } from 'react';

const LoadingDemo = () => {
  const [loading, setLoading] = useState(false);
  const Content = () => (
    <div>这是被包裹的内容，可以是string，也可以是ReactElement</div>
  );
  // const Content = "字符串内容"

  return (
    <>
      <AppBar title="Loading 类型">
        <Space align="center" size={25}>
          <Loading type="circle" />
          <Loading type="cube" />
          <Loading type="wave" />
          <Loading type="rect" />
          <Loading type="disappear" />
        </Space>
      </AppBar>

      <AppBar title="Loading 颜色">
        <Space align="center" size={25}>
          <Loading type="circle" color="#00afef" />
          <Loading type="cube" color="#00c48f" />
          <Loading type="wave" color="#ff9f00" />
          <Loading type="rect" color="#f44336" />
          <Loading type="disappear" color="#aaa" />
        </Space>
      </AppBar>

      <AppBar title="Loading 大小">
        <Space align="center" size={25}>
          <Loading type="circle" size="small" />
          <Loading type="cube" size="small" />
          <Loading type="wave" size="small" />
          <Loading type="rect" size="small" />
          <Loading type="disappear" size="small" />
        </Space>
      </AppBar>

      <AppBar title="包裹内容">
        <Button onClick={() => setLoading(!loading)}>
          {loading ? '关闭' : '打开'}
        </Button>

        <Loading
          description="LOADING"
          content={<Content />}
          loading={loading}
        />
        {/* <Loading
          description="LOADING"
          content={Content}
          loading={loading}
        /> */}
      </AppBar>
    </>
  );
};

export default LoadingDemo;
