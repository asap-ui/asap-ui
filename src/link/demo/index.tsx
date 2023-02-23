import { AppBar, Link } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="主题色链接">
        <Link>默认链接</Link>
        <Link type="primary">主要链接</Link>
        <Link type="info">信息链接</Link>
        <Link type="success">成功链接</Link>
        <Link type="warning">警告链接</Link>
        <Link type="danger">危险链接</Link>
      </AppBar>
    </>
  );
};

export default Demo;
