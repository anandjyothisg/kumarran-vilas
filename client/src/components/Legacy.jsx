import { useEffect, useRef } from 'react';

const Legacy = () => {
  const fadeInRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeInRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Add refs to the array
  const addToRefs = (el) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  return (
    <section id="legacy" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-amber-100 relative overflow-hidden font-['Murecho']">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-700 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-amber-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={addToRefs} 
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-4xl font-['Murecho'] font-bold text-amber-800 mb-4">
            Our Legacy
          </h2>
          
          {/* Ribbon badge image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src="/images/85_years.png" 
                alt="85 Years of Excellence" 
                className="h-56 w-auto mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-900 max-w-3xl mx-auto">
            Discover the heritage of Kumarran Vilas, a story of craftsmanship passed down through generations.
          </p>
        </div>

        {/* Legacy Cards with enhanced styling based on your example */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Legacy Card 1 - Founded in 1965 */}
          <div 
            ref={addToRefs}
            className="relative bg-gradient-to-b from-red-900 to-red-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 opacity-0 translate-y-10 group hover:-translate-y-2"
          >
            <div className="p-6 pb-4">
              <h3 className="text-2xl font-['Murecho'] font-bold text-amber-300 mb-2">Founded in 1965</h3>
              <div className="border-b border-amber-300/30 w-16 mb-4"></div>
            </div>
            
            {/* Image below heading */}
            <div className="px-6">
              <div className="relative rounded-lg overflow-hidden border-2 border-amber-300/30">
                <img 
                  src="/images/1940_image.png" 
                  alt="Kumarran Vilas in 1965" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="p-4 pt-4 text-amber-100 text-sm">
                <p className="mb-4">
                  "Palani Kumaran vilas viboothi store" was established in this year 1940 by (late) Thiru. K. Sivagnana Nadar.
                </p>
              </div>
              
              <div className="px-6 py-6 mt-2 bg-red-950/50 border-t border-amber-200/20">
                <div className="flex items-center justify-center">
                  <div className="text-amber-300 mr-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-amber-200 font-medium">85 years of excellence</p>
                </div>
              </div>
              
              {/* Gold border effect on hover */}
              <div className="absolute inset-0 border-2 border-amber-300/0 rounded-xl transition-all duration-300 group-hover:border-amber-300/70"></div>
            </div>
          </div>

          {/* Legacy Card 2 - Traditional Methods */}
          <div 
            ref={addToRefs}
            className="relative bg-gradient-to-b from-red-900 to-red-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 opacity-0 translate-y-10 group hover:-translate-y-2"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="p-6 pb-4">
              <h3 className="text-2xl font-['Murecho'] font-bold text-amber-300 mb-2">Traditional Methods</h3>
              <div className="border-b border-amber-300/30 w-16 mb-4"></div>
            </div>
            
            {/* Image below heading */}
            <div className="px-6">
              <div className="relative rounded-lg overflow-hidden border-2 border-amber-300/30">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="Traditional crafting techniques" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="p-4 pt-4 text-amber-100 text-sm">
                <p className="mb-4">
                  Our products are aptly suitable for use in pooja purposes, religious purposes and other etc. At every production and quality testing stage, our personnel follow international quality norms, thereby ensuring the production of goods that are flawless in all respects and perfect in every application. We are a 100% pure and original, and have established a firm base of clients all over the world.
                </p>
              </div>
              
              <div className="px-6 py-6 mt-2 bg-red-950/50 border-t border-amber-200/20">
                <div className="flex items-center justify-center">
                  <div className="text-amber-300 mr-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <p className="text-amber-200 font-medium">Ancient artistry preserved</p>
                </div>
              </div>
              
              {/* Gold border effect on hover */}
              <div className="absolute inset-0 border-2 border-amber-300/0 rounded-xl transition-all duration-300 group-hover:border-amber-300/70"></div>
            </div>
          </div>

          {/* Legacy Card 3 - Award Winning */}
          <div 
            ref={addToRefs}
            className="relative bg-gradient-to-b from-red-900 to-red-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 opacity-0 translate-y-10 group hover:-translate-y-2"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="p-6 pb-4">
              <h3 className="text-2xl font-['Murecho'] font-bold text-amber-300 mb-2">Award Winning</h3>
              <div className="border-b border-amber-300/30 w-16 mb-4"></div>
            </div>
            
            {/* Image below heading */}
            <div className="px-6">
              <div className="relative rounded-lg overflow-hidden border-2 border-amber-300/30">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="Award winning craftsmanship" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="p-4 pt-4 text-amber-100 text-sm">
                <p className="mb-4">
                  Recognized for excellence in craftsmanship and design, our creations have earned national and international accolades for their artistry.
                </p>
              </div>
              
              <div className="px-6 py-6 mt-2 bg-red-950/50 border-t border-amber-200/20">
                <div className="flex items-center justify-center">
                  <div className="text-amber-300 mr-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-amber-200 font-medium">National recognition</p>
                </div>
              </div>

              
              
              {/* Gold border effect on hover */}
              <div className="absolute inset-0 border-2 border-amber-300/0 rounded-xl transition-all duration-300 group-hover:border-amber-300/70"></div>
            </div>
          </div>
        </div>

        {/* Timeline with enhanced styling */}
        <div 
          ref={addToRefs}
          className="mt-24 relative opacity-0 translate-y-10 transition-all duration-1000"
          style={{ transitionDelay: '600ms' }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* First milestone */}
            <div className="md:text-right md:pr-12 pb-12 relative group">
              <div className="absolute right-0 md:right-0 top-0 w-4 h-4 rounded-full bg-amber-600 md:mr-0 mr-auto md:ml-0 transform md:translate-x-6 translate-y-1.5 ring-4 ring-amber-200 group-hover:ring-amber-300 transition-all duration-300"></div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">1965: Humble Beginnings</h3>
              <p className="text-amber-800">
                Kumarran Vilas opened its doors as a small boutique in the heart of the city, focusing on handcrafted jewelry.
              </p>
              <div className="hidden md:block mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">58 years ago</div>
              </div>
            </div>
            <div className="md:pl-12 pb-12 md:block hidden"></div>

            {/* Second milestone */}
            <div className="md:pl-12 pb-12 md:block hidden"></div>
            <div className="md:text-left md:pl-12 pb-12 relative group">
              <div className="absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full bg-amber-600 md:ml-0 ml-auto md:mr-0 transform md:-translate-x-6 translate-y-1.5 ring-4 ring-amber-200 group-hover:ring-amber-300 transition-all duration-300"></div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">1985: Expansion</h3>
              <p className="text-amber-800">
                After two decades of success, we expanded our offerings to include a wider range of artisanal products.
              </p>
              <div className="hidden md:block mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">40 years ago</div>
              </div>
            </div>

            {/* Third milestone */}
            <div className="md:text-right md:pr-12 pb-12 relative group">
              <div className="absolute right-0 md:right-0 top-0 w-4 h-4 rounded-full bg-amber-600 md:mr-0 mr-auto md:ml-0 transform md:translate-x-6 translate-y-1.5 ring-4 ring-amber-200 group-hover:ring-amber-300 transition-all duration-300"></div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">2005: National Recognition</h3>
              <p className="text-amber-800">
                Our dedication to quality was recognized with prestigious national awards for craftsmanship excellence.
              </p>
              <div className="hidden md:block mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">20 years ago</div>
              </div>
            </div>
            <div className="md:pl-12 pb-12 md:block hidden"></div>

            {/* Fourth milestone */}
            <div className="md:pl-12 pb-12 md:block hidden"></div>
            <div className="md:text-left md:pl-12 relative group">
              <div className="absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full bg-amber-600 md:ml-0 ml-auto md:mr-0 transform md:-translate-x-6 translate-y-1.5 ring-4 ring-amber-200 group-hover:ring-amber-300 transition-all duration-300"></div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Today: A Living Heritage</h3>
              <p className="text-amber-800">
                Now a household name, Kumarran Vilas continues to blend traditional craftsmanship with contemporary designs.
              </p>
              <div className="hidden md:block mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Present day</div>
              </div>
            </div>
          </div>
        </div>



        {/* Quote section */}
        <div
          ref={addToRefs}
          className="mt-24 text-center opacity-0 translate-y-10 transition-all duration-1000"
          style={{ transitionDelay: '800ms' }}
        >
          <div className="relative max-w-4xl mx-auto p-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg border border-amber-200 shadow-lg">
            <div className="text-amber-400 opacity-20 absolute top-4 left-4">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl italic font-medium text-amber-900">
              "True craftsmanship is a bridge between generations. At Kumarran Vilas, we don't just create products; we preserve traditions and pass them on as living heritage."
            </blockquote>
            <div className="mt-4 text-amber-800">
              <span className="font-serif font-bold">Palani Kumarran Vilas</span>
              <span className="mx-2">|</span>
              <span>Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;