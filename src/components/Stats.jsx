import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Users, Globe } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    revenue: 0,
    ebitda: 0,
    profit: 0,
    pbt: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      label: "Revenue",
      value: 125.5,
      unit: "M USD",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      label: "EBITDA",
      value: 18.2,
      unit: "M USD",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Users className="h-8 w-8" />,
      label: "Operating Profit",
      value: 15.8,
      unit: "M USD",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      label: "PBT",
      value: 12.4,
      unit: "M USD",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        let currentStep = 0;
        const increment = stat.value / steps;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(increment * currentStep, stat.value);
          
          setCounts(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: currentValue
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            EXCELLING IN EVERYTHING WE DO
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Our Latest Numbers
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            DTLatex strives for financial transparency as part of our promise to our stakeholders. 
            View our annual performance highlights below:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center card-hover border">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className="mb-2">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} stats-counter`}>
                  {Object.values(counts)[index].toFixed(1)}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.unit}</div>
              </div>
              <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
              
              {/* Simple chart representation */}
              <div className="mt-4 flex items-end justify-center space-x-1 h-12">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 ${stat.bgColor} rounded-t`}
                    style={{
                      height: `${Math.random() * 80 + 20}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

