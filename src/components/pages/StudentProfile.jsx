import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const StudentProfile = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [profileDetails, setProfileDetails] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
        resume: '',
        skills: 'JavaScript, React, Node.js'
    });

    // Dummy data for applied jobs
    const appliedJobs = [
        { jobDetails: 'Software Developer at XYZ Corp', companyName: 'XYZ Corp', serialNo: 1 },
        { jobDetails: 'Product Manager at ABC Ltd', companyName: 'ABC Ltd', serialNo: 2 },
        { jobDetails: 'UI/UX Designer at DesignCo', companyName: 'DesignCo', serialNo: 3 },
        { jobDetails: 'Product Manager at ABC Ltd', companyName: 'ABC Ltd', serialNo: 4 },
        { jobDetails: 'Product Manager at ABC Ltd', companyName: 'ABC Ltd', serialNo: 5 },
        // Add more dummy data as needed
    ];

    const handleApplyMore = () => {
        navigate('/Jobs');
    };

    const handleEditProfile = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setProfileDetails({
            ...profileDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the updated profile details in object form
        console.log('Updated Profile Details:', {
            name: profileDetails.name,
            email: profileDetails.email,
            phoneNumber: profileDetails.phoneNumber,
            resume: profileDetails.resume,
            skills: profileDetails.skills,
        });
        handleClose();
    };

    return (
        <Container style={{ paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" component="h1">Student Profile</Typography>
                <Button variant="contained" color="primary" onClick={handleApplyMore}>
                    Apply More
                </Button>
            </div>

            <div style={{ display: 'flex', marginTop: '20px' }}>
                {/* Left side: Student Profile Details */}
                <Card style={{ height: '350px', flex: 1, marginRight: '20px', position: 'relative' }}>
                    <CardContent>
                        <Typography variant="h6">Profile Details</Typography>
                        <Typography variant="body1"><strong>Name:</strong> {profileDetails.name}</Typography>
                        <Typography variant="body1"><strong>Email:</strong> {profileDetails.email}</Typography>
                        <Typography variant="body1"><strong>Resume:</strong> <a href="#" style={{ color: 'blue' }}>Download Resume</a></Typography>
                        <Typography variant="body1"><strong>Phone No:</strong> {profileDetails.phoneNumber}</Typography>
                        <Typography variant="body1"><strong>Skills:</strong> {profileDetails.skills}</Typography>
                        <Button variant="outlined" color="primary" onClick={handleEditProfile} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                            Edit Profile
                        </Button>
                    </CardContent>
                </Card>

                {/* Right side: Applied Jobs */}
                <Card style={{ flex: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Applied Jobs</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sl No.</TableCell>
                                        <TableCell>Job Details</TableCell>
                                        <TableCell>Company Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {appliedJobs.map((job) => (
                                        <TableRow key={job.serialNo}>
                                            <TableCell>{job.serialNo}</TableCell>
                                            <TableCell>{job.jobDetails}</TableCell>
                                            <TableCell>{job.companyName}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Edit Profile Form */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Profile</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            name="name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={profileDetails.name}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={profileDetails.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Phone Number"
                            name="phoneNumber"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={profileDetails.phoneNumber}
                            onChange={handleChange}
                            inputProps={{ maxLength: 10 }}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Resume"
                            name="resume"
                            type="file"
                            accept=".png"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Skills"
                            name="skills"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={profileDetails.skills}
                            onChange={handleChange}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Container>
    );
};

export default StudentProfile;
