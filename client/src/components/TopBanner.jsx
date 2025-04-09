const TopBanner = () => {
    const messages = Array(20).fill("Never-before offers - Upto 25% OFF!");
  
    return (
      <div className="bg-gradient-to-r from-pink-500 to-yellow-400 py-2 overflow-hidden relative">
        <div className="flex w-max animate-marquee whitespace-nowrap text-sm font-medium text-white tracking-wide">
          {messages.map((text, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-4">{text}</span>
              {index !== messages.length - 1 && (
                <span className="text-white/70 text-lg">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TopBanner;
  