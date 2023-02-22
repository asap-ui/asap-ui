import { AppBar, Breadcrumb, Breadcrumbs, Icon } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="基本用法">
        <Breadcrumbs>
          <Breadcrumb>首页</Breadcrumb>
          <Breadcrumb>一级</Breadcrumb>
          <Breadcrumb>二级</Breadcrumb>
        </Breadcrumbs>
      </AppBar>

      <AppBar title="分隔符">
        <Breadcrumbs separator="\">
          <Breadcrumb>首页</Breadcrumb>
          <Breadcrumb>一级</Breadcrumb>
          <Breadcrumb>二级</Breadcrumb>
        </Breadcrumbs>
      </AppBar>

      <AppBar title="子级分隔符">
        <Breadcrumbs>
          <Breadcrumb>首页</Breadcrumb>
          <Breadcrumb separator="~">一级</Breadcrumb>
          <Breadcrumb>二级</Breadcrumb>
        </Breadcrumbs>
      </AppBar>

      <AppBar title="分隔符插槽">
        <Breadcrumbs>
          <Breadcrumb>首页</Breadcrumb>
          <Icon name="ab-testing" color="red" />
          <Breadcrumb>一级</Breadcrumb>
          <Icon name="ab-testing" color="red" />
          <Breadcrumb>二级</Breadcrumb>
        </Breadcrumbs>
      </AppBar>
    </>
  );
};

export default Demo;
