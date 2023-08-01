import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Card from './Card';
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card
          price='$149'
          src={Single}
          title='Single User'
          text1='500 GB Storage'
          text2='1 Granted User'
          text3='Send up to 2 GB'
        />
        <Card
          price='$349'
          src={Double}
          title='Double User'
          text1='1 TB Storage'
          text2='2 Granted User'
          text3='Send up to 4 GB'
          bg
        />
        <Card
          price='$549'
          src={Triple}
          title='Triple User'
          text1='2 TB Storage'
          text2='3 Granted User'
          text3='Send up to 6 GB'
        />
      </div>
    </div>
  );
};

export default Cards;
