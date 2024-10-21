import Image from 'next/image';

const Page = () => {
  return (
    <div
      className={'flex justify-center items-center relative pt-[68px]'}
      style={{
        minHeight: 'calc(100vh)',
        background: '#141416',
      }}
    >
      <div className={'text-center'}>
        <h1 className={'text-5xl font-bold text-gradient'}>Access Denied</h1>
        <div className={'mt-5'}>
          <p className={'text-[#B1B5C3] text-base'}>
            Sorry! You don't have the permission to access this page from USA
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page;
