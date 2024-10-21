import { discordUrl, telegramUrl, twitterUrl } from '@/common/utils';

export const routes = [
  {
    // path: 'https://launchpad.movegpt.io/launchpad/amnis-draconian-ino',
    path: 'https://launchpad.movegpt.io/launchpad/amnis-draconian-ino',
    target: true,
    name: 'Launchpad',
    hot: false,
    // comingSoon: true,
    comingSoon: false,
    hidden: false,
  },
  {
    path: 'https://launchpad.movegpt.io/staking',
    target: true,
    name: 'Staking',
    hot: false,
    comingSoon: false,
    hidden: false,
  },
  {
    path: 'https://movegpt.gitbook.io/movegpt',
    target: true,
    name: 'Docs',
    hot: false,
    comingSoon: false,
    hidden: false,
  },
];

import { DiscordIcon, TelegramIcon, TwitterIcon } from '@/common/components/icons/common';
import { Button, Drawer, Dropdown, Layout, Menu, MenuProps, Space, Switch, notification } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const { Header } = Layout;

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

const PageHeader: React.FunctionComponent = () => {
  const router = useRouter();
  const param: any = router.query;
  const [mode, setMode] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<THEME>(THEME.DARK);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // useEffect(() => {
  //   document.body.dataset.theme = app.theme;
  //   setCurrentTheme(app?.theme == 'light' ? THEME.LIGHT : THEME.DARK);
  //   setMode(app.theme === 'dark');
  // }, [app]);

  function openNewTab(url: string) {
    window.open(url, '_blank');
  }

  const SideMenu = ({ currentPageName, onRouteSelected }: any) => {
    const onClick: MenuProps['onClick'] = (e) => {
      console.log('e', e);
      window.open(`https://launchpad.movegpt.io/${e.key}`, '_blank');
      onRouteSelected();
    };

    return (
      <div className="h-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          {routes
            .filter((r) => r.path !== '*' && !r.hidden)
            .map(({ name, path, target, hot, comingSoon }, index) => {
              const isCurrent = currentPageName.toLowerCase().includes(name.toLowerCase());
              return (
                <Link
                  href={!target ? `/${path}` : path}
                  target={target ? '_blank' : ''}
                  key={`${name}-${index}-${isCurrent}`}
                  onClick={() => {
                    if (comingSoon) {
                      notification.warning({ message: 'Coming Soon!' });
                      return;
                    }
                    onRouteSelected();
                  }}
                  className={classNames('w-full font-semibold relative py-4 text-[#E8E8E8] menuItem', {
                    'hip-btn-selected': isCurrent,

                    // hot: hot,
                  })}
                >
                  <div className={'relative w-fit'}>
                    {name}
                    {/*<div className={`absolute right-[-20px] top-[-16px] ${!hot && 'hidden'}`}>*/}
                    {/*  <HotIcon />*/}
                    {/*</div>*/}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  };

  const renderNavItems: any = () => {
    return routes.map(({ name, path, hidden, type, target, comingSoon, hot }: any) => {
      if (path === '*' || hidden) return null;
      const currentPageName = router.asPath;
      const isCurrent = currentPageName.toLowerCase().includes(path.toLowerCase());
      return (
        <Menu.Item className={``} key={name}>
          {(type === 'Page' || !type) && (
            <a
              onClick={() => {
                const myObject: any = {};
                const dynamicKey = Object.keys(param)[0];
                myObject[dynamicKey] = dynamicKey;
                if (comingSoon) {
                  notification.warning({ message: 'Coming Soon!' });
                  return;
                }
                if (target) {
                  openNewTab(path);
                } else {
                  router.push({
                    pathname: `/${path}`,
                    // query: Object.keys(param).length > 0 ? param : undefined,
                  });
                }
              }}
              target={target ? '_blank' : ''}
              className={`flex items-center w-full h-full text-base font-medium nav-link px-2 ${
                isCurrent && 'activeNav'
              } hover:text-[#C2E23D] text-[#E8E8E8]`}
            >
              {name}
              {/*<div className={`absolute right-8 top-3 ${!hot && 'hidden'}`}>*/}
              {/*  <HotIcon />*/}
              {/*</div>*/}
            </a>
          )}
        </Menu.Item>
      );
    });
  };

  const isBlockVPN = router.pathname.includes('/error');

  return (
    <Header
      className={`header z-20 w-full fixed flex items-center bg-[#000] p-[60px]`}
    >
      <div className="mx-auto container max-w-[1600px] sm:px-0 h-full w-full top-0 left-0 flex justify-between items-center relative">
        <div className={'left-0 top-0 flex items-center relative w-full sm:max-w-[250px]'}>
          <Link className={'flex gap-2 items-center relative'} href={'/'} target={'_blank'} aria-label={'Go to home'}>
            <Image
              className="logo w-[180px] sm:w-[300px] h-auto"
              src={require('@/common/assets/images/logo.png')}
              alt=""
            />
          </Link>
        </div>
        <div className={'flex items-center gap-[60px]'}>
          <Link className={'flex gap-2 items-center relative'} href={'/'} target={'_blank'} aria-label={'Go to home'}>
            <TelegramIcon />
          </Link>
          <Link className={'flex gap-2 items-center relative'} href={'/'} target={'_blank'} aria-label={'Go to home'}>
            <TwitterIcon />
          </Link>
          <Link className={'flex gap-2 items-center relative'} href={'/'} target={'_blank'} aria-label={'Go to home'}>
            <DiscordIcon />
          </Link>
        </div>
      </div>

      <Drawer
        visible={isSideMenuOpen}
        width={100}
        placement="right"
        closable={false}
        onClose={() => setIsSideMenuOpen(false)}
      >
        <SideMenu currentPageName={router.asPath} onRouteSelected={() => setIsSideMenuOpen(false)} />
      </Drawer>
    </Header>
  );
};
export default PageHeader;
