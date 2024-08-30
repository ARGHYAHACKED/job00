import React from 'react';

const jobs = [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York, NY" },
    { id: 2, title: "Data Analyst", company: "Data Inc.", location: "San Francisco, CA" },
    { id: 3, title: "Product Manager", company: "Innovate LLC", location: "Boston, MA" },
    { id: 4, title: "UI/UX Designer", company: "Creative Studio", location: "Los Angeles, CA" },
    { id: 5, title: "Backend Developer", company: "Dev Solutions", location: "Austin, TX" },
    { id: 6, title: "Marketing Specialist", company: "Market Hub", location: "Chicago, IL" },
    { id: 7, title: "DevOps Engineer", company: "Cloud9", location: "Seattle, WA" },
    { id: 8, title: "Full Stack Developer", company: "WebWorks", location: "Miami, FL" },
    { id: 9, title: "QA Engineer", company: "TestPro", location: "Denver, CO" },
    { id: 10, title: "Business Analyst", company: "Biz Insight", location: "Phoenix, AZ" },
    { id: 11, title: "Graphic Designer", company: "DesignCo", location: "Portland, OR" },
    { id: 12, title: "Content Writer", company: "WriteNow", location: "Atlanta, GA" },
    { id: 13, title: "HR Specialist", company: "HR Experts", location: "Dallas, TX" },
    { id: 14, title: "Data Scientist", company: "DataPro", location: "New York, NY" },
    { id: 15, title: "Sales Manager", company: "SellMore", location: "San Diego, CA" },
    { id: 16, title: "Frontend Developer", company: "UIForge", location: "Las Vegas, NV" },
    { id: 17, title: "Operations Manager", company: "EfficientOps", location: "Houston, TX" },
    { id: 18, title: "Social Media Manager", company: "SocialFlow", location: "Orlando, FL" },
    { id: 19, title: "IT Support Specialist", company: "TechHelp", location: "Philadelphia, PA" },
    { id: 20, title: "Project Manager", company: "BuildIt", location: "San Antonio, TX" },
];

const JobSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Container for the job cards */}
            <div className="grid grid-cols-3 gap-4 relative">
                {jobs.slice(0, 9).map((job, index) => (
                    <div 
                        key={job.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden relative hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: `hsl(${index * 35}, 70%, 80%)` }} // Different background colors
                    >
                        {/* Job title and company */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="text-gray-500">{job.company}</p>
                            <p className="text-gray-400">{job.location}</p>
                        </div>

                        {/* Hidden div that shows on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            {/* Increased opacity for better visibility */}
                            <p className="mb-4">Detailed information about the job.</p>
                            <button className="bg-blue-500 px-4 py-2 rounded">Details</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Blur effect and See All button */}
            <div className="mt-8 bg-gradient-to-t from-white via-transparent to-transparent h-24">
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg block mx-auto">
                    See All Jobs
                </button>
            </div>
        </div>
    );
}

export default JobSection;
