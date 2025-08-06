import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics, useAnalytics } from '@/lib/analytics';

export const usePageTracking = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // 跟踪页面访问
    trackPageView(location.pathname + location.search);
  }, [location, trackPageView]);

  useEffect(() => {
    // 跟踪页面停留时间
    const startTime = Date.now();
    
    return () => {
      const duration = Date.now() - startTime;
      if (duration > 1000) { // 只记录停留超过1秒的
        analytics.trackEvent('scroll', 'page_exit', { 
          duration,
          page: location.pathname 
        });
      }
    };
  }, [location.pathname]);
};