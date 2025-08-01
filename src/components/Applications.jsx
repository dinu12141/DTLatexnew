import React, { useState } from 'react';
import { Car, Building, Heart, Wrench, Home, Plane, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Applications = () => {
  const [activeApplication, setActiveApplication] = useState(0);

  const applications = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Automotive Industry",
      description: "High-performance rubber components for automotive applications",
      details: "Our automotive rubber solutions provide exceptional durability and performance for critical vehicle components.",
      products: ["Engine Seals", "Gaskets", "Vibration Dampeners", "Hoses", "Weather Stripping"],
      benefits: ["Heat Resistance", "Oil Resistance", "Durability", "Precision Fit"],
      caseStudy: "Reduced maintenance costs by 30% for a major automotive manufacturer through our custom seal solutions.",
      color: "bg-blue-500"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Construction & Infrastructure",
      description: "Durable rubber solutions for construction and infrastructure projects",
      details: "Weather-resistant and long-lasting rubber products designed for demanding construction environments.",
      products: ["Bridge Bearings", "Expansion Joints", "Waterproof Membranes", "Flooring", "Insulation"],
      benefits: ["Weather Resistance", "Load Bearing", "Flexibility", "Longevity"],
      caseStudy: "Provided bridge bearing solutions for a major infrastructure project, ensuring 50+ year lifespan.",
      color: "bg-orange-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Medical & Healthcare",
      description: "Sterile, biocompatible rubber products for medical applications",
      details: "FDA-approved medical grade rubber products meeting the highest safety and quality standards.",
      products: ["Medical Gloves", "Catheters", "Surgical Equipment", "Seals", "Tubing"],
      benefits: ["Biocompatible", "Sterile", "FDA Approved", "Powder-Free"],
      caseStudy: "Supplied medical grade components to leading hospitals, achieving 99.9% quality compliance.",
      color: "bg-red-500"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Industrial Manufacturing",
      description: "Heavy-duty rubber solutions for industrial equipment and machinery",
      details: "Robust rubber components designed to withstand harsh industrial conditions and heavy usage.",
      products: ["Conveyor Belts", "Industrial Seals", "Gaskets", "Vibration Mounts", "Protective Covers"],
      benefits: ["Chemical Resistance", "High Tensile Strength", "Temperature Stability", "Wear Resistance"],
      caseStudy: "Increased equipment uptime by 25% for a manufacturing plant with our industrial seal solutions.",
      color: "bg-gray-600"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Furniture & Bedding",
      description: "Comfortable and durable latex products for furniture applications",
      details: "Natural latex solutions providing superior comfort and longevity for furniture and bedding.",
      products: ["Mattress Cores", "Cushions", "Pillows", "Toppers", "Furniture Padding"],
      benefits: ["Natural Materials", "Comfort", "Durability", "Hypoallergenic"],
      caseStudy: "Partnered with premium furniture brands to deliver luxury comfort solutions worldwide.",
      color: "bg-green-500"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Aerospace & Defense",
      description: "High-specification rubber components for aerospace applications",
      details: "Precision-engineered rubber solutions meeting stringent aerospace and defense requirements.",
      products: ["Aircraft Seals", "Gaskets", "Vibration Dampeners", "Fuel System Components", "Environmental Seals"],
      benefits: ["High Performance", "Extreme Temperature Resistance", "Precision Engineering", "Certified Quality"],
      caseStudy: "Certified supplier for aerospace components with zero-defect delivery record.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="applications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Applications & Industries
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how DTLatex rubber solutions serve diverse industries worldwide, 
            providing exceptional performance and reliability across critical applications.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {applications.map((app, index) => (
            <Card 
              key={index} 
              className={`card-hover cursor-pointer transition-all duration-300 ${
                activeApplication === index ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => setActiveApplication(index)}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${app.color} text-white mb-4`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed View */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${applications[activeApplication].color} text-white flex items-center justify-center`}>
                  {applications[activeApplication].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {applications[activeApplication].title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {applications[activeApplication].details}
              </p>

              {/* Products */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Products:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {applications[activeApplication].products.map((product, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {applications[activeApplication].benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Case Study */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Success Story</h4>
                <p className="text-gray-700 leading-relaxed italic">
                  "{applications[activeApplication].caseStudy}"
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Quality Rate</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get Industry-Specific Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full">
                  Download Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            BEYOND ALL BORDERS
          </h3>
          <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
            Our Global Reach
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5%</div>
              <div className="text-sm text-gray-600">of global demand for household and industrial gloves</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Leader</div>
              <div className="text-sm text-gray-600">in Sri Lanka's transportation and logistics industry</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">World's Largest</div>
              <div className="text-sm text-gray-600">manufacturer of coconut shell based activated carbon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.6%</div>
              <div className="text-sm text-gray-600">of Sri Lanka's tea and rubber output respectively</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;

