import React from 'react';

export const Test: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-pixel text-green-500 mb-4">
          ✅ 部署成功！
        </h1>
        <p className="text-xl mb-4">
          如果你能看到这个页面，说明部署配置正确
        </p>
        <div className="space-y-2 text-sm text-gray-400">
          <p>✅ React 组件渲染正常</p>
          <p>✅ CSS 样式加载正常</p>
          <p>✅ 字体加载正常</p>
          <p>✅ 路由配置正常</p>
        </div>
        <a 
          href="/" 
          className="inline-block mt-6 px-6 py-3 bg-white text-black font-pixel hover:bg-gray-200"
        >
          返回主页
        </a>
      </div>
    </div>
  );
}; 