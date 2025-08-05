const ProfessionalBanner = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
        
        {/* Geometric shapes for professional look */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/10 to-transparent rounded-full transform -translate-x-16 translate-y-16"></div>
        
        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-grid-white/10 bg-[size:20px_20px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-between px-8">
        {/* Left side - Text content */}
        <div className="flex-1">
          <div className="text-white/90 text-sm font-medium tracking-wider mb-2">
            PROFESSIONAL SERVICES
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
            <span className="font-normal">欧洲商务</span>
            <span className="text-accent block">专业之选</span>
          </h2>
          <p className="text-white/70 text-sm max-w-md leading-relaxed">
            12年专业经验，为您的欧洲梦想提供全方位支持
          </p>
        </div>

        {/* Right side - Professional icons/elements */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Achievement badges */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="text-white text-xs">认证服务</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-white text-xs">专业团队</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <div className="text-white text-xs">全球服务</div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </div>
  );
};

export default ProfessionalBanner;