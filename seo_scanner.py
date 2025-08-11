#!/usr/bin/env python3
"""
SEO URL Scanner for wedeseneu.com
Scans website for SEO-unfriendly URLs and generates optimization recommendations
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, parse_qs, unquote
import csv
import re
from collections import deque
import time
import json

class SEOUrlScanner:
    def __init__(self, base_url):
        self.base_url = base_url
        self.visited_urls = set()
        self.url_issues = []
        self.to_visit = deque([base_url])
        
    def is_unfriendly_url(self, url):
        """Detect SEO-unfriendly URLs and return issues"""
        issues = []
        parsed = urlparse(url)
        path = parsed.path
        
        # Check for query parameters
        if parsed.query:
            params = parse_qs(parsed.query)
            issues.append(f"Query parameters: {parsed.query}")
            
        # Check for underscores in path
        if '_' in path:
            issues.append("Contains underscores")
            
        # Check for special characters (excluding standard URL chars)
        special_chars = re.findall(r'[^a-zA-Z0-9\-/.]', unquote(path))
        if special_chars:
            issues.append(f"Special characters: {','.join(set(special_chars))}")
            
        # Check for non-Latin characters (Chinese, etc.)
        if re.search(r'[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u309f\u30a0-\u30ff]', unquote(url)):
            issues.append("Contains non-Latin characters")
            
        # Check for deep path structure (more than 3 levels)
        path_parts = [p for p in path.split('/') if p]
        if len(path_parts) > 3:
            issues.append(f"Deep path structure ({len(path_parts)} levels)")
            
        # Check for multiple consecutive hyphens
        if '--' in path or path.count('-') > 3:
            issues.append("Too many hyphens")
            
        return issues
    
    def suggest_friendly_url(self, original_url):
        """Generate SEO-friendly URL suggestion"""
        parsed = urlparse(original_url)
        path = parsed.path
        query = parsed.query
        
        # Handle consultation URLs with service parameter
        if '/consultation' in path and query:
            params = parse_qs(query)
            if 'service' in params:
                service = params['service'][0]
                service_map = {
                    '通用咨询': 'general',
                    '移民咨询': 'immigration',
                    '荷兰移民咨询': 'netherlands-immigration',
                    '德国移民咨询': 'germany-immigration',
                    '意大利移民咨询': 'italy-immigration',
                    '欧洲留学服务': 'europe-education',
                    '荷兰移民服务': 'netherlands-services',
                    '德国移民服务': 'germany-services',
                    '移民资格评估': 'eligibility-assessment',
                    '免费评估': 'free-assessment'
                }
                service_slug = service_map.get(service, 
                    re.sub(r'[^a-z0-9]+', '-', service.lower()))
                return f"{parsed.scheme}://{parsed.netloc}/consultation/{service_slug}"
        
        # Clean up path
        clean_path = path
        
        # Remove underscores
        clean_path = clean_path.replace('_', '-')
        
        # Handle multiple hyphens
        clean_path = re.sub(r'-+', '-', clean_path)
        
        # Restructure deep paths
        if 'immigration-guide' in clean_path:
            country = clean_path.split('-')[0].replace('/', '')
            clean_path = f"/guides/{country}-immigration"
        elif 'why-dutch' in clean_path:
            topic = clean_path.split('-')[-1].replace('/', '')
            clean_path = f"/netherlands/{topic}-benefits"
        elif 'ai-' in clean_path:
            if 'recommended' in clean_path:
                clean_path = '/tools/immigration-recommendations'
            elif 'optimized' in clean_path:
                clean_path = '/guides/smart-immigration'
                
        return f"{parsed.scheme}://{parsed.netloc}{clean_path}"
    
    def crawl_website(self):
        """Crawl website and detect URL issues"""
        session = requests.Session()
        session.headers.update({
            'User-Agent': 'Mozilla/5.0 SEO Scanner Bot'
        })
        
        while self.to_visit:
            current_url = self.to_visit.popleft()
            
            if current_url in self.visited_urls:
                continue
                
            print(f"Scanning: {current_url}")
            self.visited_urls.add(current_url)
            
            try:
                response = session.get(current_url, timeout=10)
                if response.status_code != 200:
                    continue
                    
                # Check current URL for issues
                issues = self.is_unfriendly_url(current_url)
                if issues:
                    suggested_url = self.suggest_friendly_url(current_url)
                    self.url_issues.append({
                        'original_url': current_url,
                        'issues': '; '.join(issues),
                        'suggested_url': suggested_url
                    })
                
                # Parse page for more URLs
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Find all links
                for tag in soup.find_all(['a', 'link']):
                    href = tag.get('href')
                    if href:
                        absolute_url = urljoin(current_url, href)
                        parsed = urlparse(absolute_url)
                        
                        # Only follow internal links
                        if parsed.netloc == urlparse(self.base_url).netloc:
                            if absolute_url not in self.visited_urls:
                                self.to_visit.append(absolute_url)
                
                # Be respectful - add delay
                time.sleep(0.5)
                
            except Exception as e:
                print(f"Error scanning {current_url}: {e}")
                continue
    
    def export_to_csv(self, filename='url_audit.csv'):
        """Export findings to CSV"""
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['Original URL', 'Issues', 'Suggested New URL']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            
            writer.writeheader()
            for issue in self.url_issues:
                writer.writerow({
                    'Original URL': issue['original_url'],
                    'Issues': issue['issues'],
                    'Suggested New URL': issue['suggested_url']
                })
        
        print(f"\nScan complete! Found {len(self.url_issues)} URLs with issues.")
        print(f"Results exported to {filename}")
        return filename
    
    def generate_redirect_rules(self):
        """Generate redirect rules for all problematic URLs"""
        redirects = []
        for issue in self.url_issues:
            original = urlparse(issue['original_url']).path
            suggested = urlparse(issue['suggested_url']).path
            query = urlparse(issue['original_url']).query
            
            if original != suggested:
                redirect_rule = {
                    'source': original,
                    'destination': suggested,
                    'permanent': True
                }
                
                # Handle query parameters
                if query:
                    params = parse_qs(query)
                    if 'service' in params:
                        redirect_rule['has'] = [{
                            'type': 'query',
                            'key': 'service',
                            'value': params['service'][0]
                        }]
                
                redirects.append(redirect_rule)
        
        return redirects
    
    def export_vercel_config(self, filename='vercel_redirects.json'):
        """Export Vercel redirect configuration"""
        redirects = self.generate_redirect_rules()
        config = {
            'redirects': redirects,
            'rewrites': [
                {
                    'source': '/(.*)',
                    'destination': '/index.html'
                }
            ]
        }
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        
        print(f"Vercel redirect config exported to {filename}")
        return filename

# Usage
if __name__ == "__main__":
    print("=" * 60)
    print("SEO URL Scanner for wedeseneu.com")
    print("=" * 60)
    
    scanner = SEOUrlScanner("https://wedeseneu.com")
    
    print("\nStarting SEO URL scan...")
    print("This may take a few minutes...\n")
    
    scanner.crawl_website()
    
    # Export results
    csv_file = scanner.export_to_csv()
    vercel_config = scanner.export_vercel_config()
    
    # Generate redirect rules
    redirects = scanner.generate_redirect_rules()
    
    # Print summary
    print("\n" + "=" * 60)
    print("SCAN SUMMARY")
    print("=" * 60)
    print(f"Total URLs scanned: {len(scanner.visited_urls)}")
    print(f"URLs with SEO issues: {len(scanner.url_issues)}")
    
    if scanner.url_issues:
        print("\nTop URL issues found:")
        print("-" * 60)
        for issue in scanner.url_issues[:10]:
            print(f"\n📍 {issue['original_url']}")
            print(f"   ⚠️  Issues: {issue['issues']}")
            print(f"   ✅ Suggested: {issue['suggested_url']}")
    
    print("\n" + "=" * 60)
    print("FILES GENERATED:")
    print("=" * 60)
    print(f"1. CSV Report: {csv_file}")
    print(f"2. Vercel Config: {vercel_config}")
    print("\nUse these files to implement the SEO improvements.")