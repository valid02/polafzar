import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './AccountSlider.css';
import AccountCard from './AccountCard';

const AccountSlider = ({ accounts }) => {
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
            currency={account.currency}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AccountSlider;