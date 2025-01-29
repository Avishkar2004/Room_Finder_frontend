import React from 'react';

// Function to get a random image from an array of URLs
const getRandomImage = () => {
    const images = [
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/45.jpg',
        'https://randomuser.me/api/portraits/women/68.jpg',
        'https://randomuser.me/api/portraits/men/71.jpg',
    ];
    return images[Math.floor(Math.random() * images.length)];
};

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Shubham Raibhandar',
            review: 'Helps us to find good properties',
            text: 'The site really helps us to find good properties in the least amount of time without any headache of brokerage...',
        },
        {
            name: 'Lisa Das',
            review: "It's a nice experience",
            text: 'It was a nice experience with NoBroker. They helped me to find a new home to stay as it was difficult for me...',
        },
        {
            name: 'Kishore',
            review: 'Found Great Place to Stay via NoBroker',
            text: 'NoBroker provides a great place to stay with safe environment. If they show you something about property...',
        },
    ];

    return (
        <div className="bg-[#334a5c] py-16 px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Our Customers Love Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ScMzIvxBSi4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg max-w-full"
                        ></iframe>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={getRandomImage()}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                        <div className="text-teal-500 flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 fill-current text-teal-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 .587l3.668 7.429 8.215 1.176-5.938 5.684 1.425 8.125L12 18.896 4.63 22.971l1.425-8.125L0 9.192l8.215-1.176z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-md font-medium text-gray-800 mb-2">{testimonial.review}</h4>
                                <p className="text-sm text-gray-600">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
