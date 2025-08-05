const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="relative w-12 h-12">
        {/* Outer circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-xl opacity-20"></div>
        
        {/* Main logo shape - abstract bridge/connection symbol */}
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            {/* Abstract W shape representing bridge/connection */}
            <path
              d="M4 10 L8 22 L12 14 L16 20 L20 14 L24 22 L28 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            />
            {/* Dots representing connection points */}
            <circle cx="4" cy="10" r="2" fill="currentColor" className="text-accent" />
            <circle cx="28" cy="10" r="2" fill="currentColor" className="text-accent" />
            <circle cx="16" cy="20" r="1.5" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </div>

      {/* Company Name */}
      <div>
        <h1 className="text-xl font-bold tracking-wider text-foreground">
          WEDESEN
        </h1>
        <p className="text-xs text-muted-foreground tracking-widest">
          德森国际商务
        </p>
      </div>
    </div>
  );
};

export default Logo;