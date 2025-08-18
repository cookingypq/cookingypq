import React from 'react';

export const Test: React.FC = () => {
  const gifFiles = [
    { src: '/gif/tesla-asr-black.gif', alt: 'Tesla-asr-black' },
    { src: '/gif/nockchain-shovel.gif', alt: 'Nockchain Shovel' },
    { src: '/gif/porsche-museum.gif', alt: 'Porsche Museum' },
    { src: '/gif/darksoul-white.gif', alt: 'Dark Souls 3' },
    { src: '/gif/blood-white.png', alt: 'Bloodborne' },
    { src: '/gif/sekiro.gif', alt: 'Sekiro' },
    { src: '/gif/ring.gif', alt: 'Elden Ring' },
    { src: '/gif/GutsVsGriffithBerserk-ezgif.com-loop-count.gif', alt: 'Berserk' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">GIF 文件测试页面</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gifFiles.map((file, index) => (
          <div key={index} className="border border-white p-4 rounded">
            <h3 className="text-lg mb-2">{file.alt}</h3>
            <img 
              src={file.src} 
              alt={file.alt}
              className="w-full h-auto max-w-xs mx-auto"
              onLoad={() => console.log(`✅ ${file.alt} 加载成功`)}
              onError={(e) => {
                console.error(`❌ ${file.alt} 加载失败:`, e);
                e.currentTarget.style.border = '2px solid red';
              }}
            />
            <p className="text-sm mt-2 text-center">{file.src}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 