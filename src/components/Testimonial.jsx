import React, { useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { gsap } from 'gsap';

const testimonials = [
    { name: "John Doe", review: "Amazing experience!" },
    { name: "Jane Smith", review: "Loved the service!" },
    { name: "Michael Brown", review: "Highly recommended!" },
    { name: "Emily White", review: "Will come back again!" },
    { name: "David Johnson", review: "Best service ever!" },
    { name: "Sarah Davis", review: "Exceeded expectations!" },
    { name: "James Wilson", review: "Fantastic quality!" },
    { name: "Olivia Miller", review: "Very satisfied!" },
    { name: "Daniel Taylor", review: "A+ experience!" },
    { name: "Sophia Anderson", review: "Unmatched service!" },
];

const TestimonialSlider = () => {
    const sliderRef = useRef();

    useEffect(() => {
        const sliderElement = sliderRef.current;
        const totalWidth = sliderElement.scrollWidth;
        const viewportWidth = sliderElement.clientWidth;

        gsap.to(sliderElement, {
            x: -(totalWidth - viewportWidth),
            duration: 20,
            repeat: -1,
            ease: "none",
            onComplete: () => gsap.set(sliderElement, { x: 0 }),
        });
    }, []);

    return (
        <Box overflow="hidden">
            <Box display="flex" ref={sliderRef}>
                {testimonials.map((testimonial, index) => (
                    <Card 
                        key={index} 
                        sx={{
                            minWidth: 275, 
                            mx: 2, 
                            p: 2,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                                color: '#1976d2',
                                transform: 'scale(1.05)',
                            }
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {testimonial.name}
                            </Typography>
                            <Typography variant="body2">
                                {testimonial.review}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default TestimonialSlider;
