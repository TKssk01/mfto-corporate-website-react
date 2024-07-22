// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Header from '../header/header.component';
// import Footer from '../footer/footer.component';
// import './contact-us.styles.scss';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     lastName: '',
//     firstName: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the data to your backend
//   };

//   return (
//     <div className="contact-us-page">
//       <Header />
//       <motion.div 
//         className="contact-us-container"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="contact-us-title">Contact Us</h1>
//         <p className="contact-us-subtitle">Get in Touch</p>
//         <div className="contact-form-wrapper">
//           <div className="form-illustration">
//             <img src="/api/placeholder/400/300" alt="Contact illustration" />
//           </div>
//           <motion.form 
//             className="contact-form"
//             onSubmit={handleSubmit}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input 
//                   type="text" 
//                   id="lastName" 
//                   name="lastName" 
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Smith"
//                   required 
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name</label>
//                 <input 
//                   type="text" 
//                   id="firstName" 
//                   name="firstName" 
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="John"
//                   required 
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="example@example.com"
//                 required 
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea 
//                 id="message" 
//                 name="message" 
//                 rows="4" 
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Please enter your message"
//                 required
//               ></textarea>
//             </div>
//             <motion.button 
//               type="submit" 
//               className="submit-button"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Submit
//             </motion.button>
//           </motion.form>
//         </div>
//       </motion.div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;



// /src/components/contact-us/contact-us.component.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import ThreeDModal from '../three-d-modal/ThreeDModal';
import './contact-us.styles.scss';
import Unknown from '../../assets/images/unknown.svg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    message: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="contact-us-page">
      <Header />
      <motion.div 
        className="contact-us-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-subtitle">Get in Touch</p>
        <div className="contact-form-wrapper">
          <div className="form-illustration">
            <img src={Unknown} alt="Contact illustration" /> {/* SVG画像の使用 */}
          </div>
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Please enter your message"
                required
              ></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
            {/* <button type="button" onClick={() => setIsModalOpen(true)} className="three-d-button">
              Show 3D
            </button> */}
          </motion.form>
        </div>
      </motion.div>
      <Footer />
      <ThreeDModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactUs;
