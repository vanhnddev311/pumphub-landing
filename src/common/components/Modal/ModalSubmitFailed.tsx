import { Modal } from 'antd';
import Image from 'next/image';
import React from 'react';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ModalSubmitFailed: React.FunctionComponent<Props> = ({ isOpen, handleClose }) => {
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
              src={require('@/common/assets/images/FailedIcon.png')}
              alt={''}
              className={'w-[60px] sm:w-[152px]'}
            />
            <div className={'modal-title'}>Oops!</div>
            <div className={'text-center text-base sm:text-[30px] font-bold text-[#fff] leading-normal uppercase'}>
              Please fill it in to pump
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSubmitFailed;
