import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  Eye, Users, MousePointer, Clock, Globe, Smartphone, 
  Desktop, Calendar, TrendingUp, Download, RefreshCw, Lock
} from "lucide-react";
import { analytics, PageView, AnalyticsEvent, UserSession } from "@/lib/analytics";
import SEOHead from "@/components/SEOHead";

interface AnalyticsStats {
  totalPageViews: number;
  uniqueVisitors: number;
  totalSessions: number;
  avgSessionDuration: number;
  bounceRate: number;
  topPages: { page: string; views: number; }[];
  deviceStats: { device: string; count: number; percentage: number; }[];
  browserStats: { browser: string; count: number; }[];
  countryStats: { country: string; count: number; }[];
  hourlyData: { hour: string; views: number; }[];
  dailyData: { date: string; views: number; sessions: number; }[];
  recentEvents: AnalyticsEvent[];
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [selectedDateRange, setSelectedDateRange] = useState('7d');

  // 简单的密码验证
  const ADMIN_PASSWORD = "wedesen2024"; // 生产环境应使用更安全的认证

  useEffect(() => {
    if (isAuthenticated) {
      loadAnalyticsData();
    }
  }, [isAuthenticated, selectedDateRange]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("密码错误");
    }
  };

  const loadAnalyticsData = () => {
    const { pageViews, events, sessions } = analytics.getAnalyticsData();
    
    // 根据时间范围过滤数据
    const now = Date.now();
    const timeRanges = {
      '1d': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000,
    };
    
    const timeLimit = now - timeRanges[selectedDateRange as keyof typeof timeRanges];
    const filteredPageViews = pageViews.filter((pv: PageView) => pv.timestamp > timeLimit);
    const filteredEvents = events.filter((e: AnalyticsEvent) => e.timestamp > timeLimit);
    const filteredSessions = sessions.filter((s: UserSession) => s.startTime > timeLimit);

    // 计算统计数据
    const uniqueVisitors = new Set(filteredSessions.map(s => s.id)).size;
    const totalSessions = filteredSessions.length;
    const avgSessionDuration = totalSessions > 0 
      ? filteredSessions.reduce((sum, s) => sum + (s.duration || 0), 0) / totalSessions / 1000 
      : 0;

    // 跳出率 (单页面会话的百分比)
    const singlePageSessions = filteredSessions.filter(s => s.pageViews <= 1).length;
    const bounceRate = totalSessions > 0 ? (singlePageSessions / totalSessions) * 100 : 0;

    // 页面访问统计
    const pageViewCounts: { [key: string]: number } = {};
    filteredPageViews.forEach(pv => {
      pageViewCounts[pv.path] = (pageViewCounts[pv.path] || 0) + 1;
    });
    const topPages = Object.entries(pageViewCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // 设备统计
    const deviceCounts: { [key: string]: number } = {};
    filteredPageViews.forEach(pv => {
      deviceCounts[pv.device] = (deviceCounts[pv.device] || 0) + 1;
    });
    const totalViews = filteredPageViews.length;
    const deviceStats = Object.entries(deviceCounts).map(([device, count]) => ({
      device,
      count,
      percentage: totalViews > 0 ? Math.round((count / totalViews) * 100) : 0
    }));

    // 浏览器统计
    const browserCounts: { [key: string]: number } = {};
    filteredPageViews.forEach(pv => {
      browserCounts[pv.browser] = (browserCounts[pv.browser] || 0) + 1;
    });
    const browserStats = Object.entries(browserCounts).map(([browser, count]) => ({ browser, count }));

    // 国家统计
    const countryCounts: { [key: string]: number } = {};
    filteredPageViews.forEach(pv => {
      if (pv.country && pv.country !== 'Unknown') {
        countryCounts[pv.country] = (countryCounts[pv.country] || 0) + 1;
      }
    });
    const countryStats = Object.entries(countryCounts).map(([country, count]) => ({ country, count }));

    // 按小时分组数据
    const hourlyData: { [key: string]: number } = {};
    filteredPageViews.forEach(pv => {
      const hour = new Date(pv.timestamp).getHours().toString().padStart(2, '0') + ':00';
      hourlyData[hour] = (hourlyData[hour] || 0) + 1;
    });
    const hourlyChartData = Object.entries(hourlyData).map(([hour, views]) => ({ hour, views }));

    // 按日期分组数据
    const dailyData: { [key: string]: { views: number; sessions: Set<string> } } = {};
    filteredPageViews.forEach(pv => {
      const date = new Date(pv.timestamp).toISOString().split('T')[0];
      if (!dailyData[date]) {
        dailyData[date] = { views: 0, sessions: new Set() };
      }
      dailyData[date].views++;
      dailyData[date].sessions.add(pv.sessionId);
    });
    const dailyChartData = Object.entries(dailyData).map(([date, data]) => ({ 
      date, 
      views: data.views, 
      sessions: data.sessions.size 
    })).sort((a, b) => a.date.localeCompare(b.date));

    // 最近事件
    const recentEvents = filteredEvents
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 20);

    setStats({
      totalPageViews: filteredPageViews.length,
      uniqueVisitors,
      totalSessions,
      avgSessionDuration,
      bounceRate,
      topPages,
      deviceStats,
      browserStats,
      countryStats,
      hourlyData: hourlyChartData,
      dailyData: dailyChartData,
      recentEvents,
    });
  };

  const exportData = () => {
    if (!stats) return;
    
    const data = {
      exportTime: new Date().toISOString(),
      dateRange: selectedDateRange,
      stats,
      rawData: analytics.getAnalyticsData()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1'];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <SEOHead title="管理后台登录 - WEDESEN" />
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Lock className="w-5 h-5 mr-2" />
              管理后台登录
            </CardTitle>
            <CardDescription>请输入管理员密码访问数据统计</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                登录
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>加载数据中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="数据统计后台 - WEDESEN" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-light mb-2">数据统计后台</h1>
            <p className="text-muted-foreground">WEDESEN 网站访问量与用户行为分析</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="1d">过去24小时</option>
              <option value="7d">过去7天</option>
              <option value="30d">过去30天</option>
            </select>
            <Button onClick={exportData} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              导出数据
            </Button>
            <Button onClick={loadAnalyticsData} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              刷新
            </Button>
          </div>
        </div>

        {/* 概览卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总访问量</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPageViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                页面浏览次数
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">独立访客</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.uniqueVisitors.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                唯一用户数
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">会话数量</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSessions.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                访问会话总数
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">平均停留时间</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(stats.avgSessionDuration / 60)}分{Math.round(stats.avgSessionDuration % 60)}秒
              </div>
              <p className="text-xs text-muted-foreground">
                跳出率: {stats.bounceRate.toFixed(1)}%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* 访问趋势图 */}
          <Card>
            <CardHeader>
              <CardTitle>访问趋势</CardTitle>
              <CardDescription>每日访问量和会话数变化</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={stats.dailyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="views" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="sessions" stackId="2" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 小时访问分布 */}
          <Card>
            <CardHeader>
              <CardTitle>访问时段分布</CardTitle>
              <CardDescription>24小时访问量分布</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats.hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* 详细统计 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* 热门页面 */}
          <Card>
            <CardHeader>
              <CardTitle>热门页面</CardTitle>
              <CardDescription>访问量最高的页面</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stats.topPages.map((page, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm truncate flex-1 mr-2">{page.page || '首页'}</span>
                    <Badge variant="secondary">{page.views}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 设备统计 */}
          <Card>
            <CardHeader>
              <CardTitle>设备分布</CardTitle>
              <CardDescription>访客使用的设备类型</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stats.deviceStats.map((device, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                      {device.device === 'mobile' ? <Smartphone className="w-4 h-4 mr-2" /> :
                       device.device === 'desktop' ? <Desktop className="w-4 h-4 mr-2" /> :
                       <Globe className="w-4 h-4 mr-2" />}
                      <span className="text-sm capitalize">{device.device}</span>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">{device.percentage}%</Badge>
                      <span className="text-sm text-muted-foreground">{device.count}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={stats.deviceStats}
                      dataKey="count"
                      nameKey="device"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                    >
                      {stats.deviceStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* 地理位置 */}
          <Card>
            <CardHeader>
              <CardTitle>访客地区</CardTitle>
              <CardDescription>访客所在国家/地区</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stats.countryStats.slice(0, 10).map((country, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{country.country}</span>
                    <Badge variant="secondary">{country.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 最近活动 */}
        <Card>
          <CardHeader>
            <CardTitle>最近活动</CardTitle>
            <CardDescription>用户最新的交互事件</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {stats.recentEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div className="flex items-center space-x-2">
                    <Badge variant={event.type === 'click' ? 'default' : 'secondary'}>
                      {event.type}
                    </Badge>
                    <span className="text-sm">{event.element || event.page}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(event.timestamp).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;