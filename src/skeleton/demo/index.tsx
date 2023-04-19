import { AppBar, Button, Skeleton } from 'asap-ui';
import React, { useState } from 'react';

const SkeletonDemo = () => {
  const [loading] = useState(true);
  const [fullscreenLoading, setFullscreenLoading] = useState(false);
  const fullScreen = () => {
    setFullscreenLoading(true);
    setTimeout(() => {
      setFullscreenLoading(false);
    }, 2000);
  };
  return (
    <div>
      <AppBar title="基本使用">
        <Skeleton loading={loading}>加载的数据</Skeleton>
      </AppBar>

      <AppBar title="显示标题">
        <Skeleton title loading={loading}>
          加载的数据
        </Skeleton>
      </AppBar>

      <AppBar title="自定义段落高度">
        <Skeleton
          title
          rows={3}
          rowsWidth={['200px', '100px', '50px']}
          loading={loading}
        >
          加载的数据
        </Skeleton>
      </AppBar>

      <AppBar title="显示头像">
        <Skeleton title avatar rows={3} loading={loading}>
          加载的数据
        </Skeleton>
      </AppBar>

      <AppBar title="显示卡片">
        <Skeleton title avatar card rows={3} loading={loading}>
          加载的数据
        </Skeleton>
      </AppBar>

      <AppBar title="全屏模式">
        <Button type="danger" onClick={fullScreen}>
          切换全屏模式
        </Button>
        <Skeleton fullscreen loading={fullscreenLoading} />
      </AppBar>
    </div>
  );
};

export default SkeletonDemo;
