import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Checkbox, FormControlLabel, FormGroup, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const jobData = [
  { id: 1, title: 'Software Engineer', company: 'Tech Corp', jobType: 'Full-Time', description: 'Develop and maintain software applications.', details: 'Detailed job description and requirements.', skills: 'JavaScript, React, Node.js', responsibilities: 'Developing, Testing, Deploying', postedOn: '2024-08-20', salary: '$80,000/year', location: 'Kolkata' },
  { id: 2, title: 'Project Manager', company: 'Biz Solutions', jobType: 'Full-Time', description: 'Manage projects from initiation to closure.', details: 'Detailed job description and requirements.', skills: 'Project Management, Agile, Scrum', responsibilities: 'Planning, Executing, Closing', postedOn: '2024-08-18', salary: '$100,000/year', location: 'Delhi' },
  { id: 3, title: 'Data Analyst', company: 'Data Inc.', jobType: 'Part-Time', description: 'Analyze and interpret complex data sets.', details: 'Detailed job description and requirements.', skills: 'Python, SQL, Data Visualization', responsibilities: 'Analyzing, Reporting, Visualizing', postedOn: '2024-08-22', salary: '$60,000/year', location: 'Mumbai' },
  { id: 4, title: 'UI/UX Designer', company: 'Design Studio', jobType: 'Contract', description: 'Create user-friendly interfaces and designs.', details: 'Detailed job description and requirements.', skills: 'UI Design, UX Research, Figma', responsibilities: 'Designing, Prototyping, Testing', postedOn: '2024-08-25', salary: '$70,000/year', location: 'Bangalore' },
];

const Jobs = ({ role }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // State to track the selected job
  const [appliedJobs, setAppliedJobs] = useState([]); // State to track applied jobs
  const navigate = useNavigate(); // Navigate hook for routing

  const handleLocationChange = (event) => {
    const { value, checked } = event.target;
    setSelectedLocations((prev) =>
      checked ? [...prev, value] : prev.filter((location) => location !== value)
    );
  };

  const handleViewMore = (job) => {
    setSelectedJob(job); // Set the selected job to be viewed in the floating div
  };

  const handleClose = () => {
    setSelectedJob(null); // Close the floating div
  };

  const handleApply = (jobId) => {
    setAppliedJobs([...appliedJobs, jobId]); // Add job to applied list
    navigate(`/apply/${jobId}`); // Navigate to the apply page with job ID
  };

  const filteredJobs = jobData.filter((job) =>
    selectedLocations.length > 0 ? selectedLocations.includes(job.location) : true
  );

  return (
    <div className="flex">
      {/* Left side filter */}
      <div className="container w-1/3 h-screen border-2 border-black p-4">
        <h3 className="text-xl font-bold mb-4">Filter by Location</h3>
        <FormGroup>
          {['Kolkata', 'Delhi', 'Mumbai', 'Bangalore'].map((location) => (
            <FormControlLabel
              key={location}
              control={
                <Checkbox
                  value={location}
                  onChange={handleLocationChange}
                  checked={selectedLocations.includes(location)}
                />
              }
              label={location}
            />
          ))}
        </FormGroup>
      </div>

      {/* Right side job cards */}
      <div className="container w-2/3 p-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="mb-4">
            <CardContent>
              <Typography variant="h5" component="div">
                {job.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {job.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {job.description}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Location: {job.location}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => handleViewMore(job)}>
                View More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floating div for job details */}
      {selectedJob && (
        <Dialog open={true} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>
            {selectedJob.title}
            <Button onClick={handleClose} style={{ position: 'absolute', right: 16, top: 16 }}>
              Close
            </Button>
          </DialogTitle>
          <DialogContent>
            <Typography variant="h6">Company: {selectedJob.company}</Typography>
            <Typography variant="body1">Job Type: {selectedJob.jobType}</Typography>
            <Typography variant="body1">Location: {selectedJob.location}</Typography>
            <Typography variant="body1">Job Description: {selectedJob.description}</Typography>
            <Typography variant="body1">Job Details: {selectedJob.details}</Typography>
            <Typography variant="body1">Required Skills: {selectedJob.skills}</Typography>
            <Typography variant="body1">Responsibilities: {selectedJob.responsibilities}</Typography>
            <Typography variant="body1">Posted On: {selectedJob.postedOn}</Typography>
            <Typography variant="body1">Salary: {selectedJob.salary}</Typography>
          </DialogContent>
          <DialogActions>
            {role === 'Student' && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleApply(selectedJob.id)}
                disabled={appliedJobs.includes(selectedJob.id)}
              >
                Apply Now
              </Button>
            )}
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Jobs;
