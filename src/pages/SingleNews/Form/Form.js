import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={cx('formContainer')}>
      <h2 className={cx('formTitle')}>Leave a comment</h2>
      <form onSubmit={handleSubmit}>
        <div className={cx('formGroup')}>
          <label className={cx('formLabel')} htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className={cx('formControl')}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('formGroup')}>
          <label className={cx('formLabel')} htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className={cx('formControl')}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cx('formGroup')}>
          <label className={cx('formLabel')} htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            className={cx('formControl')}
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className={cx('formGroup')}>
          <label className={cx('formLabel')} htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            className={cx('formControl', 'textarea')}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={cx('submitButton')}>Leave a comment</button>
      </form>
    </div>
  );
};

export default Form;