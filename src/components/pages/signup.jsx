import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const SignUp = ({ setIsLoggedIn, setRole, setFormData }) => {
    const [localFormData, setLocalFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        resume: null,
        phone: '',
        role: 'Student',
        skills: []
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const availableSkills = [
        { value: 'Web Development', label: 'Web Development' },
        { value: 'Java Development', label: 'Java Development' },
        { value: 'Full Stack Development', label: 'Full Stack Development' },
        { value: 'MERN Stack', label: 'MERN Stack' },
        { value: 'UI/UX Designer', label: 'UI/UX Designer' },
        { value: 'Data Analytics', label: 'Data Analytics' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Software Testing', label: 'Software Testing' }
    ];

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setLocalFormData({
                ...localFormData,
                [name]: files[0]
            });
        } else {
            setLocalFormData({
                ...localFormData,
                [name]: value
            });
        }
    };

    const handleSelectChange = (selectedOptions) => {
        const selectedSkills = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setLocalFormData({
            ...localFormData,
            skills: selectedSkills
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const validationErrors = validateForm(localFormData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            // Set the global form data and role
            setFormData(localFormData);
            setRole(localFormData.role);

            // Log in the user
            setIsLoggedIn(true);
            
            // Redirect to the home page
            navigate('/');
        } catch (error) {
            console.error("Sign up error:", error);
        }

        setIsSubmitting(false);
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.name) errors.name = "Name is required.";
        if (!data.email) errors.email = "Email is required.";
        if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords must match.";
        
        // Validating specific fields for Students only
        if (data.role === 'Student') {
            if (!data.resume) errors.resume = "Resume is required.";
            else if (!['image/png', 'image/jpeg'].includes(data.resume.type)) {
                errors.resume = "Resume must be a PNG or JPG file.";
            }
            if (!data.phone) errors.phone = "Phone number is required.";
            if (data.skills.length === 0) errors.skills = "At least one skill must be selected.";
        }
        return errors;
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="role">Role</label>
                    <select
                        id="role"
                        name="role"
                        value={localFormData.role}
                        onChange={handleChange}
                        className="border px-4 py-2 w-full rounded-md"
                    >
                        <option value="Student">Student</option>
                        <option value="Recruiter">Recruiter</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={localFormData.name}
                        onChange={handleChange}
                        className={`border px-4 py-2 w-full rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={localFormData.email}
                        onChange={handleChange}
                        className={`border px-4 py-2 w-full rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={localFormData.password}
                        onChange={handleChange}
                        className={`border px-4 py-2 w-full rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={localFormData.confirmPassword}
                        onChange={handleChange}
                        className={`border px-4 py-2 w-full rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>

                {localFormData.role === 'Student' && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="resume">Resume (PNG, JPG)</label>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".png,.jpg,.jpeg"
                                onChange={handleChange}
                                className={`border px-4 py-2 w-full rounded-md ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={localFormData.phone}
                                onChange={handleChange}
                                className={`border px-4 py-2 w-full rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="skills">Skills</label>
                            <Select
                                id="skills"
                                name="skills"
                                isMulti
                                options={availableSkills}
                                value={availableSkills.filter(skill => localFormData.skills.includes(skill.value))}
                                onChange={handleSelectChange}
                                classNamePrefix="select"
                                className={`w-full rounded-md ${errors.skills ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
                        </div>
                    </>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                >
                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default SignUp;
