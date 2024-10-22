import HeaderPage from '@/common/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { router } from 'next/client';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { gtag, install } from 'ga-gtag';
import { useRouter } from 'next/router';

export const installConfig = () => {
  install('G-WF8N9Y8FJY');
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const tracking = () => {
    installConfig();
  };
  useEffect(() => {
    installConfig();
    const sendGA = (e: any) => {
      if (e.target.dataset.name !== 'withdraw') {
        if (e.srcElement.localName === 'a' || e.srcElement.localName === 'button') {
          clickButtonAndLink(e);
        } else if (e.target.dataset.name) {
          clickDataSet(e);
        }
      } else {
        const eventName = `click_Claim`;
        gtag('event', eventName.slice(0, 40));
      }
    };

    const clickDataSet = (e: any) => {
      const eventName = `click_${e.target.dataset.name}`;
      gtag('event', eventName.slice(0, 40));
    };

    const clickButtonAndLink = (e: any) => {
      const innerText = e.target.innerText || e.srcElement.title;
      if (e.srcElement.localName === 'a') {
        const eventName = `click_${innerText}_${e.srcElement.href}`;
        gtag('event', eventName.slice(0, 40));
      } else if (innerText === '') {
        const eventName = `click_${e.target.dataset.name}`;
        gtag('event', eventName.slice(0, 40));
      } else {
        const eventName = `click_${innerText}`;
        gtag('event', eventName.slice(0, 40));
      }
    };

    document.addEventListener('scroll', tracking);
    document.addEventListener('click', tracking);
    document.addEventListener('click', sendGA);

    return () => {
      document.removeEventListener('click', sendGA);
    };
  }, []);

  if (router.pathname === '/comingsoon') {
    return <div>Coming soon</div>;
  } else {
    return (
      <>
        {/*<HeaderPage />*/}
        <Component {...pageProps} />
      </>
    );
  }
}
