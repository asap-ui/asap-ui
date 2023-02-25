import { AppBar, Cell, Icon } from 'asap-ui';
import React from 'react';

const Demo = () => {
  return (
    <>
      <AppBar title="基本使用">
        <Cell>这是单元格</Cell>
      </AppBar>

      <AppBar title="显示图标">
        <Cell title="这是图标" icon="abacus" extra={<Icon name="abacus" />} />
      </AppBar>

      <AppBar title="显示描述">
        <Cell title="这是单元格" description="描述" />
      </AppBar>

      <AppBar title="显示边框">
        <Cell title="这是单元格" border />
      </AppBar>
    </>
  );
};

export default Demo;
