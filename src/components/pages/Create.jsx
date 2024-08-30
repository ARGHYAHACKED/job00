import React, { useState } from 'react';
import { TextField, MenuItem, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Create = () => {
    // State for form fields
    const [form, setForm] = useState({
        title: '',
        company: '',
        jobType: '',
        location: '',
        jobDescription: '',
        jobDetails: '',
        requiredSkills: '',
        responsibilities: '',
        salary: ''
    });

    const navigate = useNavigate(); // Initialize useNavigate

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Job Created:', form); // Log form data

        // Redirect to Profile page
        navigate('/profile');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>Create Job</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    select
                    label="Job Type"
                    name="jobType"
                    value={form.jobType}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                >
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                </TextField>
                <TextField
                    select
                    label="Location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                >
                    <MenuItem value="Kolkata">Kolkata</MenuItem>
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                    <MenuItem value="Bangalore">Bangalore</MenuItem>
                </TextField>
                <TextField
                    label="Job Description"
                    name="jobDescription"
                    value={form.jobDescription}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                />
                <TextField
                    label="Job Details"
                    name="jobDetails"
                    value={form.jobDetails}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    required
                />
                <TextField
                    label="Required Skills"
                    name="requiredSkills"
                    value={form.requiredSkills}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Responsibilities"
                    name="responsibilities"
                    value={form.responsibilities}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Salary"
                    name="salary"
                    value={form.salary}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </form>
        </Container>
    );
};

export default Create;
