import { TypeAnimation } from 'react-type-animation';
import '../container/Header/Header.scss'

export
  const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a web developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'a frontend developer',
        1500,
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'a backend developer',
        1500,
        'a fullstack developer',
        1500,
        'a freelance developer',
        1500
      ]}
      speed={50}
      // style={{ fontSize: '2em', textDecoration: 'uppercase', fontWeight: 'bold', color: '#ffbd59' }}
      className='text-effect'
      repeat={Infinity}
    />
  );
};