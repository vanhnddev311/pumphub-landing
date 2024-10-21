import { Button, Modal } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  isModalOpen: boolean;
  handleClose: () => void;
}

const ModalSoldOut: React.FunctionComponent<Props> = ({ isModalOpen, handleClose }) => {
  return (
    <Modal centered visible={isModalOpen} footer={false} closable={false} onCancel={handleClose} width={450}>
      <div
        onClick={handleClose}
        className={
          'w-[50px] absolute top-[-20px] right-[-15px] h-[50px] cursor-pointer flex items-center justify-center bg-[#191919] border border-[#777e9052] rounded-full'
        }
      >
        <i className="fa-solid fa-xmark text-white text-xl opacity-40"></i>
      </div>
      <div>
        <Image src={require('@/common/assets/images/image-116.png')} alt={''} />
      </div>
      <div className={'text-center mt-5 text-base text-white'}>
        <p>IDO on Spores is sold out.</p>
        <p>Don't worry, you can still join the IDO here.</p>
      </div>
      <Link href={'/'} target={'_blank'}>
        <Button
          className={
            'btn-primary hover:text-[#000] w-full active:text-[#000] focus:text-[#000] mt-8 rounded-[12px] h-[52px] font-semibold'
          }
        >
          <span className={''}>Participate</span>
        </Button>
      </Link>
    </Modal>
  );
};

export default ModalSoldOut;
