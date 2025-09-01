import React from 'react';
import { Users, Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import directorImage1 from '../assets/WhatsAppImage2025-01-21at15.49.53_6686986b.jpg';
import directorImage2 from '../assets/dinu-removebg-preview.png';

const About = () => {
  const directors = [
    {
      name: "Tharindu C HERATH",
      position: "Chairman,CEO, Director – Engineering",
      image: directorImage1,
      bio: "At DTLatex (Pvt) Ltd, we are committed to setting new standards in the rubber industry by delivering superior quality, innovation, and sustainability. With a strong foundation in ethical practices in our mission is to contribute to the global market with products that reflect excellence and reliability.

As Chairman, I take pride in leading a dedicated team that shares a common vision—to uplift local resources to international heights, while empowering communities and preserving our environment. We are not just building a business, we are shaping a legacy.

Together, let’s create a future where Sri Lankan rubber stands tall on the world stage."
    },
    {
      name: "Dinusha M Rathnayake",
      position: "Director",
      image: directorImage2,
      bio: "At DTLatex (Pvt) Ltd, we believe that progress is driven by purpose, people, and passion. As a Director, my commitment lies in steering our company towards continuous growth through strategic thinking, ethical leadership, and innovative solutions that elevate our products and processes.

We aim to position DTLatex as a leader in the global rubber industry by maintaining uncompromised quality, adopting sustainable practices, and investing in local talent. Our focus is not only on manufacturing excellence, but also on building long-lasting partnerships and creating a positive impact across every level of the value chain.

Together, we are shaping the future of rubber—proudly from Sri Lanka to the world."
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our business, from product quality to customer service."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Continuous innovation drives our development of cutting-edge rubber solutions and sustainable practices."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Sustainability",
      description: "Committed to environmental responsibility and sustainable manufacturing processes for a better future."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our relationships."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Image Section */}
        <div className="mb-16 relative">
          <img 
            src="/images/hayleys_hero_image.webp" 
            alt="DTLatex Manufacturing Facility" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            About DTLatex
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            DTLatex is a pioneering rubber company dedicated to delivering premium latex products and innovative rubber solutions. 
            With a commitment to excellence, sustainability, and cutting-edge technology, we serve diverse industries worldwide, 
            providing high-quality products that meet the evolving needs of our global customers.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our state-of-the-art manufacturing facilities and experienced team enable us to maintain the highest standards of quality 
            while implementing sustainable practices that protect our environment for future generations.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover">
            <CardContent className="p-8 text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in sustainable rubber solutions, driving innovation and excellence 
                while contributing to a more sustainable future for industries worldwide.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver exceptional rubber products and services through innovative technology, 
                sustainable practices, and unwavering commitment to quality and customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Director Board */}
        <div>
          <h3 className="text-3xl font-bold text-center text-primary mb-12">Company Director Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={director.image} 
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{director.name}</h4>
                  <p className="text-secondary font-semibold mb-4">{director.position}</p>
                  <p className="text-gray-600 leading-relaxed">{director.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

