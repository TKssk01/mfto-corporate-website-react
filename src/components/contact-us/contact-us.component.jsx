import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // EmailJSのインポート
import Header from '../header/header.component';
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
  const [isSubmitting, setIsSubmitting] = useState(false); // フォーム送信状態の管理
  const [submissionMessage, setSubmissionMessage] = useState(''); // 送信結果のメッセージ

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message
    };

    // EmailJSを使って問い合わせ内容を送信
    emailjs.send('service_gcix4jm', 'template_43w3w9g', templateParams, 'uQu_y1ZUJiKq_uKMp')
      .then((result) => {
        console.log('Email sent:', result.text);

        // 自動応答メールをユーザーに送信
        emailjs.send('service_gcix4jm', 'template_2fhdwqk', {
          user_name: formData.firstName,
          user_email: formData.email,
          message: formData.message
        }, 'uQu_y1ZUJiKq_uKMp')
        .then((responseResult) => {
          console.log('Response email sent:', responseResult.text);
        }, (responseError) => {
          console.log('Response email send error:', responseError.text);
        });

        setSubmissionMessage('Your message has been sent successfully!');
        setIsSubmitting(false);

        // フォームの入力文字を消す
        setFormData({
          lastName: '',
          firstName: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('Email send error:', error.text);
        setSubmissionMessage('Failed to send your message. Please try again later.');
        setIsSubmitting(false);
      });
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
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </motion.button>
            {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
          </motion.form>
        </div>
      </motion.div>
      <ThreeDModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ContactUs;
