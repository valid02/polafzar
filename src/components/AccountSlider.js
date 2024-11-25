import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './AccountSlider.css';
import AccountCard from './AccountCard';


const accounts = [
  { name: 'حساب 1', number: '1234567890', balance: '100,000', key: 'a1' },
  { name: 'حساب 2', number: '1234567890', balance: '100,000', key: 'a2' },
  { name: 'حساب 3', number: '1234567890', balance: '100,000', key: 'a3' },
  { name: 'حساب 4', number: '1234567890', balance: '100,000', key: 'a4' },
  { name: 'حساب 5', number: '1234567890', balance: '100,000', key: 'a5' },
  { name: 'حساب 6', number: '1234567890', balance: '100,000', key: 'a6' },
  { name: 'حساب 7', number: '1234567890', balance: '100,000', key: 'a7' },
  { name: 'حساب 8', number: '1234567890', balance: '100,000', key: 'a8' },
  { name: 'حساب 9', number: '1234567890', balance: '100,000', key: 'a9' },
  { name: 'حساب 10', number: '1234567890', balance: '100,000', key: 'a10' },
];

const AccountSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={5}
      slidesPerView={"auto"}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true, }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        }
      }}
    >
      {accounts.map((account) => (
        <SwiperSlide key={account.key}>
          <AccountCard
            name={account.name}
            number={account.number}
            balance={account.balance}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AccountSlider;