import { useEffect, useRef } from 'react';

const Story = () => {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

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

    if (imgRef.current) observer.observe(imgRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-amber-100 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-900 max-w-3xl mx-auto">
            The journey of Kumarran Vilas is a tale of passion, perseverance, and artistic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={imgRef}
            className="relative opacity-0 translate-y-10 transition-all duration-1000"
          >
            <div className="relative h-96 sm:h-[32rem] rounded-2xl overflow-hidden">
              <img 
                src="/images/artisan.jpg" // Add your own image
                alt="Master artisan crafting a piece" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white border-opacity-50 max-w-xs">
              <p className="text-amber-900 italic font-serif text-lg">
                "We don't just make products; we create heirlooms meant to be passed down through generations."
              </p>
              <p className="text-amber-800 font-medium mt-2">
                — Rajiv Kumar, Master Craftsman
              </p>
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl border border-white border-opacity-50 p-8 shadow-xl opacity-0 translate-y-10 transition-all duration-1000"
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-6">
              Crafting Excellence Since 1965
            </h3>
            
            <div className="space-y-6 text-amber-800">
              <p>
                "Palani Kumarran vilas viboothi store" was established in this year 1940 by (late) Thiru. K.sivagnana Nadar.The Pooja Products manufactured by Palani Kumarran vilas viboothi store such as Viboothi, Sandal Scented Pooja Powder, Sandal Scented Pooja Tablets,Thattu Villai (Idly Kalabam), Javvathu Powder, Dasangam, Instant Benzoin Sambirani, Panchamirtham have been sent to many states in and around India for the past 81 years at reasonable price and produced at good quality.
              </p>
              
              <p>
                Our products are aptly suitable for use in pooja purposes, religious purposes and other etc. At every production and quality testing stage, our personnel follow international quality norms, thereby ensuring the production of goods that are flawless in all respects and perfect in every application. We are a 100% pure and original, and have established a firm base of clients all over the world.
              </p>
              
              <p>
                What sets us apart is our unwavering commitment to authenticity. We source only the finest materials, ethically obtained and carefully selected to ensure that each creation meets our exacting standards of quality and beauty.
              </p>
              
              <p>
                Today, under the leadership of the second and third generations of the Vilas family, we continue to honor our heritage while embracing innovation. Our designs blend timeless aesthetics with contemporary sensibilities, creating pieces that are both traditional and relevant.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <StoryHighlight number="75+" text="Years of Excellence" />
              <StoryHighlight number="35+" text="Master Artisans" />
              <StoryHighlight number="100+" text="Unique Products" />
              <StoryHighlight number="1L+" text="Happy Customers" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const StoryHighlight = ({ number, text }) => {
  return (
    <div className="bg-amber-800 text-white p-4 rounded-lg flex flex-col items-center justify-center w-32 h-32">
      <span className="text-2xl font-bold">{number}</span>
      <span className="text-xs text-center mt-1">{text}</span>
    </div>
  );
};

export default Story;