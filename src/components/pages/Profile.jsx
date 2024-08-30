// src/components/pages/Profile.jsx
import React, { useState } from 'react';
import {
  Card, CardContent, Button, Typography, Grid, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import StudentProfile from './StudentProfile';

const jobsData = [
  { id: 1, name: 'Software Developer', availablePost: 5, bgColor: '#e7fee3' },
  { id: 2, name: 'Product Manager', availablePost: 2, bgColor: '#efefff' },
  { id: 3, name: 'UI/UX Designer', availablePost: 3, bgColor: '#fefee0' },
  { id: 4, name: 'Data Scientist', availablePost: 4, bgColor: '#FFF5E1' },
  { id: 5, name: 'Backend Engineer', availablePost: 2, bgColor: '#E6E6FA' },
  { id: 6, name: 'DevOps Engineer', availablePost: 3, bgColor: '#E0FFFF' },
  { id: 7, name: 'QA Tester', availablePost: 6, bgColor: '#F0FFF0' },
  { id: 8, name: 'Business Analyst', availablePost: 1, bgColor: '#FFFAF0' },
];

const Profile = ({ role }) => {
  const [jobs, setJobs] = useState(jobsData);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [recruiterData, setRecruiterData] = useState({
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    setJobs(jobs.filter((job) => job !== jobToDelete));
    setOpenDeleteDialog(false);
  };

  const handleClickOpenDelete = (job) => {
    setJobToDelete(job);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecruiterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveEdit = () => {
    console.log('Updated Recruiter Data:', recruiterData);
    setOpenEditDialog(false);
  };

  const handleViewApplications = (jobId, jobName) => {
    navigate(`/profile/applications/${jobId}`, { state: { jobName, jobId } }); // Navigate to the Applications page with state
  };

  const pageStyles = {
    backgroundColor: 'white',
    minHeight: '100vh',
    padding: '20px',
  };

  const profileCardStyles = {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    padding: '16px',
  };

  return (
    <div style={pageStyles}>
      {role === 'Recruiter' && (
        <RecruiterProfile
          jobs={jobs}
          recruiterData={recruiterData}
          handleClickOpenDelete={handleClickOpenDelete}
          handleOpenEditDialog={handleOpenEditDialog}
          handleViewApplications={handleViewApplications} // Pass the handleViewApplications function
          profileCardStyles={profileCardStyles}
        />
      )}
      {role === 'Student' && <StudentProfile />}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Job"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this job?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">Cancel</Button>
          <Button onClick={handleDelete} color="error" autoFocus>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Profile Dialog */}
      <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={recruiterData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={recruiterData.email}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">Cancel</Button>
          <Button onClick={handleSaveEdit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// Component for Recruiter Profile Interface
const RecruiterProfile = ({
  jobs,
  recruiterData,
  handleClickOpenDelete,
  handleOpenEditDialog,
  handleViewApplications, // Add handleViewApplications prop
  profileCardStyles,
}) => (
  <div className="flex space-x-4">
    {/* Left Card */}
    <Card className="flex w-1/3" style={profileCardStyles}>
      <CardContent>
        <Typography variant="h5" component="div">Recruiter Profile</Typography>
        <Typography variant="body2"><strong>Name:</strong> {recruiterData.name}</Typography>
        <Typography variant="body2"><strong>Email:</strong> {recruiterData.email}</Typography>
        <Typography variant="body2"><strong>Company:</strong> ABC Corp</Typography>
        <div className="mt-4">
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={handleOpenEditDialog}
          >
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>

    {/* Right Side with Button and Job Cards */}
    <div className="flex-1 space-y-4">
      <div className="flex justify-end">
        <Link to="/create-job">
          <Button variant="contained" color="primary">Create Job</Button>
        </Link>
      </div>

      <Grid container spacing={2}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: job.bgColor,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -10 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0 })}
            >
              <CardContent>
                <Typography variant="h6" component="div">{job.name}</Typography>
                <Typography variant="body2">Available Post: {job.availablePost}</Typography>
                <div className="mt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewApplications(job.id, job.name)} // Pass jobId and jobName
                  >
                    View Applications
                  </Button>
                </div>
                <div className="mt-2">
                  <Button variant="outlined" color="secondary">Edit</Button>
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ marginLeft: '8px' }}
                    onClick={() => handleClickOpenDelete(job)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
);

export default Profile;
