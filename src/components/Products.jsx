import React, { useState } from 'react';
import { ArrowRight, Filter, Search } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'latex-foam', name: 'Latex Foam' },
    { id: 'rubber-sheets', name: 'Rubber Sheets' },
    { id: 'industrial', name: 'Industrial Rubber' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'medical', name: 'Medical Grade' }
  ];

  const products = [
    {
      id: 1,
      name: "Natural Latex Foam Mattress Cores",
      category: "latex-foam",
      description: "Premium 100% natural latex foam cores for mattresses, offering superior comfort and durability.",
      features: ["100% Natural", "Hypoallergenic", "Breathable", "Durable"],
      applications: ["Mattresses", "Pillows", "Cushions"],
      image: "/images/latex_foam.jpg"
    },
    {
      id: 2,
      name: "Industrial Rubber Sheets",
      category: "rubber-sheets",
      description: "High-quality rubber sheets for various industrial applications with excellent chemical resistance.",
      features: ["Chemical Resistant", "High Tensile Strength", "Temperature Stable", "Custom Sizes"],
      applications: ["Gaskets", "Seals", "Flooring", "Insulation"],
      image: "/images/rubber_sheets.jpg"
    },
    {
      id: 3,
      name: "Automotive Rubber Components",
      category: "automotive",
      description: "Precision-engineered rubber components for automotive industry applications.",
      features: ["Heat Resistant", "Oil Resistant", "Precision Molded", "Quality Tested"],
      applications: ["Seals", "Gaskets", "Hoses", "Vibration Dampeners"],
      image: "/images/rubber_manufacturing.jpg"
    },
    {
      id: 4,
      name: "Medical Grade Latex Products",
      category: "medical",
      description: "Sterile, medical-grade latex products meeting international healthcare standards.",
      features: ["Sterile", "Biocompatible", "FDA Approved", "Powder-Free"],
      applications: ["Medical Gloves", "Catheters", "Surgical Equipment"],
      image: "/images/rubber_manufacturing.jpg"
    },
    {
      id: 5,
      name: "Custom Rubber Solutions",
      category: "industrial",
      description: "Tailored rubber solutions designed to meet specific industrial requirements.",
      features: ["Custom Formulation", "Engineered Design", "Quality Assured", "Technical Support"],
      applications: ["Custom Applications", "Specialized Equipment", "Unique Requirements"],
      image: "/images/rubber_manufacturing.jpg"
    },
    {
      id: 6,
      name: "Latex Foam Toppers",
      category: "latex-foam",
      description: "Comfortable latex foam toppers that enhance sleep quality and mattress longevity.",
      features: ["Pressure Relief", "Temperature Regulation", "Natural Materials", "Various Densities"],
      applications: ["Mattress Enhancement", "Comfort Improvement", "Sleep Quality"],
      image: "/images/rubber_manufacturing.jpg"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Products & Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium rubber and latex products, 
            engineered to meet the highest standards of quality and performance across diverse industries.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} className="card-hover overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-6xl text-primary/20">🔧</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Applications:</h4>
                  <div className="text-sm text-gray-600">
                    {product.applications.join(', ')}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert team can develop tailored rubber solutions to meet your specific requirements. 
            Contact us to discuss your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

