const Card = ({ src, title, price, text1, text2, text3, bg }) => {
  return (
    <div
      className={
        !bg
          ? 'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'
          : 'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100'
      }
    >
      <img
        className='w-20 mx-auto mt-[-3rem] bg-transparent'
        src={src}
        alt='/'
      />
      <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
      <p className='text-center text-4xl font-bold'>{price}</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{text1}</p>
        <p className='py-2 border-b mx-8'>{text2}</p>
        <p className='py-2 border-b mx-8'>{text3}</p>
      </div>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-black hover:text-[#00df9a]'>
        Start Trial
      </button>
    </div>
  );
};

export default Card;
