// ApplicationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationForm.css';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        statement: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.phone) newErrors.phone = "Phone is required";
        if (!formData.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
            newErrors.email = "Valid email is required";
        if (!formData.statement) newErrors.statement = "Statement is required";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/applicant', formData);
            setMessage(response.data.message);
            setFormData({ name: '', phone: '', email: '', statement: '' });
        } catch (error) {
            setMessage('Submission failed, please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="application-form">
            <h3>Apply Now</h3>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
                name="statement"
                placeholder="Why do you want to join?"
                value={formData.statement}
                onChange={handleChange}
                required
            ></textarea>
            {errors.statement && <p className="error">{errors.statement}</p>}

            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ApplicationForm;
