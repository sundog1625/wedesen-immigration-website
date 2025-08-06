export interface PageView {
  id: string;
  timestamp: number;
  path: string;
  referrer: string;
  userAgent: string;
  sessionId: string;
  userId?: string;
  country?: string;
  city?: string;
  device: 'mobile' | 'desktop' | 'tablet';
  browser: string;
  os: string;
}

export interface AnalyticsEvent {
  id: string;
  timestamp: number;
  type: 'click' | 'form_submit' | 'scroll' | 'download' | 'contact';
  element?: string;
  page: string;
  sessionId: string;
  userId?: string;
  data?: Record<string, any>;
}

export interface UserSession {
  id: string;
  startTime: number;
  endTime?: number;
  pageViews: number;
  events: number;
  referrer: string;
  entryPage: string;
  exitPage?: string;
  duration?: number;
  device: string;
  browser: string;
  country?: string;
}

class AnalyticsManager {
  private sessionId: string;
  private userId?: string;
  private startTime: number;
  private currentPath: string = '';

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.startTime = Date.now();
    this.initializeSession();
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  private getDeviceType(): 'mobile' | 'desktop' | 'tablet' {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }

  private getBrowser(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    if (ua.includes('Opera')) return 'Opera';
    return 'Unknown';
  }

  private getOS(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS')) return 'iOS';
    return 'Unknown';
  }

  private async getLocation() {
    try {
      // 使用免费的IP定位服务
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        country: data.country_name,
        city: data.city,
      };
    } catch {
      return { country: 'Unknown', city: 'Unknown' };
    }
  }

  private saveToLocalStorage(key: string, data: any) {
    try {
      const existing = localStorage.getItem(key);
      const items = existing ? JSON.parse(existing) : [];
      items.push(data);
      
      // 保持最近1000条记录
      if (items.length > 1000) {
        items.splice(0, items.length - 1000);
      }
      
      localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.warn('Failed to save analytics data:', error);
    }
  }

  private async initializeSession() {
    const location = await this.getLocation();
    const session: UserSession = {
      id: this.sessionId,
      startTime: this.startTime,
      pageViews: 0,
      events: 0,
      referrer: document.referrer,
      entryPage: window.location.pathname,
      device: this.getDeviceType(),
      browser: this.getBrowser(),
      country: location.country,
    };
    
    this.saveToLocalStorage('analytics_sessions', session);
  }

  async trackPageView(path?: string): Promise<void> {
    const currentPath = path || window.location.pathname;
    this.currentPath = currentPath;
    
    const location = await this.getLocation();
    const pageView: PageView = {
      id: `pv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      path: currentPath,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      sessionId: this.sessionId,
      userId: this.userId,
      country: location.country,
      city: location.city,
      device: this.getDeviceType(),
      browser: this.getBrowser(),
      os: this.getOS(),
    };

    this.saveToLocalStorage('analytics_pageviews', pageView);
    
    // 更新会话
    this.updateSession();
  }

  trackEvent(type: AnalyticsEvent['type'], element?: string, data?: Record<string, any>): void {
    const event: AnalyticsEvent = {
      id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      type,
      element,
      page: this.currentPath,
      sessionId: this.sessionId,
      userId: this.userId,
      data,
    };

    this.saveToLocalStorage('analytics_events', event);
    this.updateSession();
  }

  private updateSession() {
    try {
      const sessions = JSON.parse(localStorage.getItem('analytics_sessions') || '[]');
      const currentSession = sessions.find((s: UserSession) => s.id === this.sessionId);
      
      if (currentSession) {
        currentSession.pageViews += 1;
        currentSession.endTime = Date.now();
        currentSession.duration = currentSession.endTime - currentSession.startTime;
        currentSession.exitPage = this.currentPath;
        
        localStorage.setItem('analytics_sessions', JSON.stringify(sessions));
      }
    } catch (error) {
      console.warn('Failed to update session:', error);
    }
  }

  // 设置用户ID（登录后调用）
  setUserId(userId: string) {
    this.userId = userId;
  }

  // 获取统计数据
  getAnalyticsData() {
    try {
      const pageViews = JSON.parse(localStorage.getItem('analytics_pageviews') || '[]');
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      const sessions = JSON.parse(localStorage.getItem('analytics_sessions') || '[]');
      
      return { pageViews, events, sessions };
    } catch {
      return { pageViews: [], events: [], sessions: [] };
    }
  }

  // 清除数据（可选）
  clearAnalyticsData() {
    localStorage.removeItem('analytics_pageviews');
    localStorage.removeItem('analytics_events');
    localStorage.removeItem('analytics_sessions');
  }
}

// 创建全局实例
export const analytics = new AnalyticsManager();

// React Hook
export const useAnalytics = () => {
  const trackPageView = (path?: string) => analytics.trackPageView(path);
  const trackEvent = (type: AnalyticsEvent['type'], element?: string, data?: Record<string, any>) => 
    analytics.trackEvent(type, element, data);
  
  return { trackPageView, trackEvent };
};