import { DiscordIcon, TelegramIcon, TwitterIcon } from '@/common/components/icons/common';
import { discordUrl, telegramUrl, twitterUrl } from '@/common/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ModalSubmitSuccess from '@/common/components/Modal/ModalSubmitSuccess';
import { useModal } from '@/common/hooks/useModal';
import ModalSubmitFailed from '@/common/components/Modal/ModalSubmitFailed';

const Home: React.FunctionComponent = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const {show, setShow, toggle} = useModal()
  const {show: showFailed, setShow: setShowFailed, toggle: toggleFailed} = useModal()

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('userName', username);
    formData.append('email', email);
    fetch('https://sheetdb.io/api/v1/au1lo0u9fhi65', {
        method: 'POST',
        body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
    }
        setShow(true);
      })
      .catch((e: any) => {
        console.error('Fetch error:', e);
        setShowFailed(true);
      });
  };

  return (
    <div className={'relative'}>
      <Image
        src={require('@/common/assets/images/bg-frame.png')}
        alt={' '}
        className={'hidden sm:block absolute bottom-0 left-0 w-full z-20'}
      />
      <Image
        src={require('@/common/assets/images/bg-frame-mb.png')}
        alt={' '}
        className={'block sm:hidden absolute bottom-0 left-0 w-full z-20'}
      />
      <div className={'relative border-[15px] border-[#EC9E34] min-h-screen pb-24 z-10'}>
        <div className={`header z-20 w-full flex items-center bg-[#000] p-[60px]`}>
          <div className="mx-auto container max-w-[1600px] sm:px-0 h-full w-full top-0 left-0 flex justify-between items-center relative">
            <div className={'left-0 top-0 flex justify-center sm:justify-start items-center relative w-full sm:max-w-[250px]'}>
              <Link
                className={'flex gap-2 items-center relative'}
                href={'/'}
                target={'_blank'}
                aria-label={'Go to home'}
              >
                <Image
                  className="logo w-[180px] sm:w-[300px] h-auto"
                  src={require('@/common/assets/images/logo.png')}
                  alt=""
                />
              </Link>
            </div>
            <div className={'hidden sm:flex items-center gap-[60px]'}>
              <Link className={'flex gap-2 items-center relative'} href={telegramUrl} target={'_blank'}>
                <TelegramIcon />
              </Link>
              <Link className={'flex gap-2 items-center relative'} href={twitterUrl} target={'_blank'}>
                <TwitterIcon />
              </Link>
              <Link className={'flex gap-2 items-center relative'} href={discordUrl} target={'_blank'}>
                <DiscordIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className={'relative max-w-[312px] sm:max-w-[1644px] mx-auto'}>
          <Image
            src={require('@/common/assets/images/frame-1.png')}
            alt=""
            className={'hidden sm:block w-[80px] absolute top-[44px] lg:top-[88px] left-[76px]'}
            />
          <Image
            src={require('@/common/assets/images/frame-1.png')}
            alt=""
            className={'hidden sm:block w-[88px] absolute top-0 right-[120px] lg:right-[180px]'}
            />
          <Image
            src={require('@/common/assets/images/frame-1.png')}
            alt=""
            className={'hidden sm:block w-[100px] absolute bottom-0 left-0'}
            />
          <Image
            src={require('@/common/assets/images/frame-1.png')}
            alt=""
            className={'hidden sm:block w-[120px] absolute top-1/2 -translate-x-1/2 right-0'}
            />
          <div className={'container text-title flex flex-col mx-auto max-w-[1080px] gap-6 sm:gap-8'}>
            <div>hey degen!</div>
            <div>we’re coming so close to the moon 🚀</div>
            <div>
              pumphub is set to release, so get ready for the ultimate one-stop hub for seamless token creation on Aptos
            </div>
            <div className={'mt-2 sm:mt-6'}>Join our discord & submit your info to get OG role 👇</div>
            <Link href={'/discord'} target={'_blank'} className={'text-[#EC9E34]'}>
              https://pumphub.io/discord
            </Link>
          </div>
          <div className={'form-input flex flex-col sm:flex-row justify-center mx-auto max-w-[1080px] items-center gap-4 sm:gap-[100px] mt-6 sm:mt-12'}>
            <input
              className={'flex items-center bg-input min-w-[232px] h-[40px] text-[#000] p-3'}
              placeholder={'Discord username'}
              value={username}
              onChange={(e) => setUsername(e?.target.value)}
            />
            <input
              className={'flex items-center bg-input min-w-[232px] h-[40px] text-[#000] p-3'}
              placeholder={'Email'}
              value={email}
              onChange={(e) => setEmail(e?.target.value)}
            />
          </div>
          <div className={'relative form-submit flex flex-col justify-center items-center mt-4'}>
            <Image src={require('@/common/assets/images/fire.png')} alt={' '} className={'z-20'} />
            <div
              onClick={handleSubmit}
              className={
                'flex justify-center items-center bg-submit mb-2 min-w-[168px] h-[40px] text-[#fff] font-bold text-[24px] cursor-pointer'
              }
            >
              Submit
            </div>
          </div>
          
        </div>
      </div>
      <ModalSubmitSuccess isOpen={!!show} handleClose={toggle} />
      <ModalSubmitFailed isOpen={!!showFailed} handleClose={toggleFailed} />
    </div>
  );
};

export default Home;
