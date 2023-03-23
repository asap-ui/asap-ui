import { AppBar, Chip } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="纸片类型">
        <Chip>默认纸片</Chip>
        <Chip type="primary">主要纸片</Chip>
        <Chip type="success">成功纸片</Chip>
        <Chip type="danger">危险纸片</Chip>
        <Chip type="warning">警告纸片</Chip>
        <Chip type="info">信息纸片</Chip>
      </AppBar>
      <AppBar title="空心纸片">
        <Chip plain type="primary">
          空心纸片
        </Chip>
      </AppBar>
      <AppBar title="非圆角纸片">
        <Chip round={false} type="primary">
          非圆角纸片
        </Chip>
      </AppBar>
      <AppBar title="纸片大小">
        <Chip type="primary">常规纸片</Chip>
        <Chip type="success" size="small">
          小型纸片
        </Chip>
        <Chip type="warning" size="mini">
          迷你纸片
        </Chip>
        <Chip type="danger" size="large">
          大型纸片
        </Chip>
      </AppBar>
      <AppBar title="块级纸片">
        <Chip block type="primary">
          块级纸片
        </Chip>
      </AppBar>
      <AppBar title="自定义颜色">
        <Chip color="#009688">纸片</Chip>
        <Chip color="#009688" plain>
          纸片
        </Chip>
        <Chip color="#faecd8" text-color="#e6a23c" plain>
          纸片
        </Chip>
        <Chip color="#faecd8" text-color="#e6a23c">
          纸片
        </Chip>
      </AppBar>
    </>
  );
};

export default Demo;
