const Simple = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>简单测试页面</h1>
      <p>当前时间: {new Date().toLocaleString()}</p>
      <p>如果你能看到这个页面，说明部署成功了！</p>
      <hr />
      <h2>新页面链接：</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="/why-dutch-immigration">荷兰移民优势页面</a></li>
        <li><a href="/why-dutch-education">荷兰留学优势页面</a></li>
      </ul>
    </div>
  );
};

export default Simple;