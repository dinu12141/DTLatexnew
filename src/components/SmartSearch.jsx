import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';

const SmartSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    'Natural latex foam',
    'Industrial rubber sheets',
    'Medical grade products'
  ]);
  const [trendingSearches] = useState([
    'Sustainable rubber solutions',
    'Custom latex products',
    'Automotive rubber components',
    'Quality certifications',
    'Latex foam mattress cores'
  ]);
  const inputRef = useRef(null);

  const searchData = [
    {
      type: 'product',
      title: 'Natural Latex Foam Mattress Cores',
      description: 'Premium 100% natural latex foam cores for mattresses',
      category: 'Products',
      url: '#latex-foam'
    },
    {
      type: 'product',
      title: 'Industrial Rubber Sheets',
      description: 'High-quality rubber sheets for industrial applications',
      category: 'Products',
      url: '#rubber-sheets'
    },
    {
      type: 'page',
      title: 'About DTLatex',
      description: 'Learn about our company history and mission',
      category: 'Company',
      url: '#about'
    },
    {
      type: 'page',
      title: 'Quality & Sustainability',
      description: 'Our commitment to quality and environmental responsibility',
      category: 'Company',
      url: '#quality'
    },
    {
      type: 'service',
      title: 'Custom Rubber Solutions',
      description: 'Tailored rubber solutions for specific requirements',
      category: 'Services',
      url: '#custom'
    },
    {
      type: 'info',
      title: 'ISO Certifications',
      description: 'Quality management and environmental certifications',
      category: 'Quality',
      url: '#certifications'
    },
    {
      type: 'product',
      title: 'Medical Grade Latex Products',
      description: 'Sterile, medical-grade latex products',
      category: 'Products',
      url: '#medical'
    },
    {
      type: 'product',
      title: 'Automotive Rubber Components',
      description: 'Precision-engineered rubber components for automotive',
      category: 'Products',
      url: '#automotive'
    }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 0) {
      const filteredResults = searchData.filter(item => {
        const searchText = `${item.title} ${item.description} ${item.category}`.toLowerCase();
        const queryWords = query.toLowerCase().split(' ');
        
        // Smart search: match any word or partial word
        return queryWords.some(word => 
          searchText.includes(word) || 
          searchText.split(' ').some(searchWord => 
            searchWord.startsWith(word) || word.startsWith(searchWord)
          )
        );
      });
      
      // Sort by relevance (exact matches first, then partial matches)
      filteredResults.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const queryLower = query.toLowerCase();
        
        if (aTitle.includes(queryLower) && !bTitle.includes(queryLower)) return -1;
        if (!aTitle.includes(queryLower) && bTitle.includes(queryLower)) return 1;
        return 0;
      });
      
      setResults(filteredResults.slice(0, 6));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim()) {
      // Add to recent searches
      setRecentSearches(prev => {
        const updated = [searchQuery, ...prev.filter(s => s !== searchQuery)];
        return updated.slice(0, 5);
      });
      
      // Simulate navigation
      console.log('Searching for:', searchQuery);
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      handleSearch(query);
    }
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Input */}
        <div className="p-6 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search products, services, or information..."
              className="w-full pl-10 pr-10 py-3 text-lg border-0 focus:outline-none focus:ring-0"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.length > 0 ? (
            <div className="p-4">
              {results.length > 0 ? (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    Search Results ({results.length})
                  </h3>
                  {results.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => handleSearch(result.title)}
                      className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Search className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {result.title}
                          </h4>
                          <p className="text-sm text-gray-500 truncate">
                            {result.description}
                          </p>
                          <span className="inline-block mt-1 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                            {result.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
                  <p className="text-gray-500">
                    Try searching for products, services, or company information
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Recent Searches
                  </h3>
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setQuery(search)}
                        className="block w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm text-gray-700">{search}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trending Searches
                </h3>
                <div className="space-y-1">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(search)}
                      className="block w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="text-sm text-gray-700">{search}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Tips */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Search Tips</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Try searching for product names like "latex foam" or "rubber sheets"</li>
                  <li>• Look for company information like "about us" or "certifications"</li>
                  <li>• Search for services like "custom solutions" or "quality testing"</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartSearch;

