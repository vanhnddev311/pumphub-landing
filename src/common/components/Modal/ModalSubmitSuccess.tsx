import { Modal } from 'antd';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { discordUrl, telegramUrl, twitterUrl } from '@/common/utils';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ModalSubmitSuccess: React.FunctionComponent<Props> = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Modal
        className={'modal-customize w-[312px] md:w-[850px]'}
        centered
        visible={isOpen}
        footer={false}
        title={''}
        onCancel={handleClose}
        closable={false}
      >
        <div className={''}>
          <div className={'max-w-[420px] flex flex-col items-center gap-6 sm:gap-[50px] mx-auto'}>
            <Image
              src={require('@/common/assets/images/SuccessIcon.png')}
              alt={''}
              className={'w-[60px] sm:w-[152px]'}
            />
            <div className={'modal-title'}>You're in!</div>
            <div className={'text-center text-base sm:text-[30px] font-bold text-[#fff] leading-normal'}>Follow us now and get ready for the pump 👇</div>
            <div className={'flex items-center gap-[60px]'}>
              <Link className={'flex gap-2 items-center relative'} href={telegramUrl} target={'_blank'}>
                <Image
                  src={require('@/common/assets/images/TelegramIcon.png')}
                  alt={''}
                  className={'w-[24px] sm:w-[44px]'}
                />
              </Link>
              <Link className={'flex gap-2 items-center relative'} href={twitterUrl} target={'_blank'}>
                <Image
                  src={require('@/common/assets/images/TwitterIcon.png')}
                  alt={''}
                  className={'w-[24px] sm:w-[44px]'}
                />
              </Link>
              <Link className={'flex gap-2 items-center relative'} href={discordUrl} target={'_blank'}>
                <Image
                  src={require('@/common/assets/images/DiscordIcon.png')}
                  alt={''}
                  className={'w-[24px] sm:w-[44px]'}
                />
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSubmitSuccess;
