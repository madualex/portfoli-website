import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://twitter.com/_alexmadu"><BsTwitter /></a>
            </div>
            <div>
                <a href="https://web.facebook.com/ogochukwu.madu.alex"><FaFacebookF /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/alex-ogochukwu-madu/"><FaLinkedinIn /></a>
            </div>
        </div>
    )
}

export default SocialMedia