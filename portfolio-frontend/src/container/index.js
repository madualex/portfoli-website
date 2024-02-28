// Do note that the reason for creating the container folder aside from the components folder which normally should contain every react component is because the components inside of this container folder will in themselves contain several other components within themselves particularly several smaller components contained in the components folder.

// Also note that the reason for creating this special index.js file inside this container folder is just so as not to clutter the App component with several mentions of 'imports' for the several components in this container folder.

export { default as About } from './About/About'
export { default as Footer } from './Footer/Footer'
export { default as Header } from './Header/Header'
export { default as Skills } from './Skills/Skills'
export { default as Testimonial } from './Testimonial/Testimonial'
export { default as Work } from './Work/Work'