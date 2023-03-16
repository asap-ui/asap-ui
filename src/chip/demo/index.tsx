import { AppBar, Chip } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title={'纸片类型'}>
        <Chip>默认纸片</Chip>
        <Chip type="primary">主要纸片</Chip>
        <Chip type="success">成功纸片</Chip>
        <Chip type="danger">危险纸片</Chip>
        <Chip type="warning">警告纸片</Chip>
        <Chip type="info">信息纸片</Chip>
      </AppBar>
    </>
  );
};

export default Demo;
