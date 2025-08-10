import React from 'react';
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Send } from "lucide-react";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = window.location.href,
  title = "WEDESEN德森 - 专业欧洲移民服务",
  description = "12年专业经验，提供荷兰技术移民、德国蓝卡申请、意大利投资移民等欧洲移民服务",
  className = ""
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "微信朋友圈",
      icon: <MessageCircle className="w-4 h-4" />,
      color: "bg-green-500 hover:bg-green-600",
      action: () => {
        // 微信分享需要特殊处理，这里提供复制链接功能
        navigator.clipboard.writeText(`${title} - ${url}`);
        alert("链接已复制，请在微信中粘贴分享");
      }
    },
    {
      name: "微博",
      icon: <Share2 className="w-4 h-4" />,
      color: "bg-red-500 hover:bg-red-600", 
      url: `https://service.weibo.com/share/share.php?url=${encodedUrl}&title=${encodedTitle}&pic=https://wedeseneu.com/og-image.jpg`
    },
    {
      name: "QQ空间",
      icon: <Share2 className="w-4 h-4" />,
      color: "bg-blue-500 hover:bg-blue-600",
      url: `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${encodedUrl}&title=${encodedTitle}&desc=${encodedDescription}&pics=https://wedeseneu.com/og-image.jpg`
    },
    {
      name: "LinkedIn",
      icon: <Share2 className="w-4 h-4" />,
      color: "bg-blue-700 hover:bg-blue-800",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      name: "Facebook",
      icon: <Share2 className="w-4 h-4" />,
      color: "bg-blue-600 hover:bg-blue-700",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name: "Twitter",
      icon: <Send className="w-4 h-4" />,
      color: "bg-sky-500 hover:bg-sky-600",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    }
  ];

  const handleShare = (shareLink: typeof shareLinks[0]) => {
    if (shareLink.action) {
      shareLink.action();
    } else if (shareLink.url) {
      window.open(shareLink.url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <span className="text-sm text-gray-600 self-center mr-2">分享到：</span>
      {shareLinks.map((shareLink, index) => (
        <Button
          key={index}
          size="sm"
          variant="outline"
          className={`${shareLink.color} text-white border-none hover:text-white transition-colors`}
          onClick={() => handleShare(shareLink)}
          title={`分享到${shareLink.name}`}
        >
          {shareLink.icon}
          <span className="ml-1 hidden sm:inline">{shareLink.name}</span>
        </Button>
      ))}
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          navigator.clipboard.writeText(url);
          alert("链接已复制到剪贴板");
        }}
        title="复制链接"
      >
        <Share2 className="w-4 h-4" />
        <span className="ml-1 hidden sm:inline">复制链接</span>
      </Button>
    </div>
  );
};

export default SocialShare;