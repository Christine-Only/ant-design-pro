/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


import type { ProSettings, BasicLayoutProps as ProLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './defaultProps';
import defaultSettings from '../../config/defaultSettings';

const colorList = [
  { key: 'daybreak', color: '#1890ff' },
  { key: 'dust', color: '#F5222D' },
  { key: 'volcano', color: '#FA541C' },
  { key: 'sunset', color: '#FAAD14' },
  { key: 'cyan', color: '#13C2C2' },
  { key: 'green', color: '#52C41A' },
  { key: 'geekblue', color: '#2F54EB' },
  { key: 'purple', color: '#722ED1' },
];

const BasicLayout: React.FC<ProLayoutProps> = (props) => {
  const { children } = props;

  const [pathname, setPathname] = useState('/welcome');
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    ...defaultSettings,
  });
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={184}
        {...defaultProps}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        location={{ pathname }}
        // eslint-disable-next-line react/no-unstable-nested-components
        menuFooterRender={(menuProps) => {
          console.log('menuProps: ', menuProps);
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginRight: 10,
                }}
              />
              {!menuProps?.collapsed && 'Preview Pro'}
            </a>
          );
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        {children}
      </ProLayout>
      {/* <SettingDrawer
        pathname={pathname}
        enableDarkTheme={false}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={defaultSettings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
        colorList={colorList}
      /> */}
    </div>
  );
};

export default BasicLayout;
