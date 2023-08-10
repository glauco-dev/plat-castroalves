import React from 'react';
import { Breadcrumb } from 'antd';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const router = usePathname();
  const pathSegments = router.split('/').filter(segment => segment);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {pathSegments.map((segment, index) => (
        <Breadcrumb.Item key={index}>
          {segment.charAt(0).toUpperCase() + segment.slice(1)}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
