import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

// const abouts = [
//   { title: 'Web Development', description: 'I am a good web developer.', imgURL: images.about01 },
//   { title: 'Web Designer', description: 'I am a good web designer.', imgURL: images.about02 },
//   { title: 'UI/UX', description: 'I am a good ui/ux specialist.', imgURL: images.about03 },
//   { title: 'Web Animations', description: 'I am a good web animator.', imgURL: images.about04 }
// ];

const About = () => {
  const [abouts, setAbouts] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await client.fetch(`*[_type == "abouts"]`);
  //     setAbouts(result);
  //   };
  //   fetchData();
  // }, []);


  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data)).catch(console.error)
  }, []);
  
  return (
    <>
      <h2 className="head-text">About <span>Me</span></h2>

      <div className="app__profiles">
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
              >
              {/* <img src={about.imgUrl} alt={about.title} /> */}
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }} >{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }} >{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__bg1');