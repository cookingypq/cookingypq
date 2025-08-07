import { useState, useEffect } from 'react';

/**
 * 检测字体是否已加载完成的 Hook
 * @param fontFamily 字体名称
 * @param timeout 超时时间（毫秒）
 * @returns 字体是否已加载
 */
export const useFontLoaded = (fontFamily: string = 'Press Start 2P', timeout: number = 3000): boolean => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // 如果浏览器不支持 FontFace API，直接返回 true
    if (!('fonts' in document)) {
      setFontLoaded(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const checkFont = async () => {
      try {
        // 使用 document.fonts.check() 检查字体是否可用
        const isFontAvailable = document.fonts.check(`12px "${fontFamily}"`);
        
        if (isFontAvailable) {
          setFontLoaded(true);
          return;
        }

        // 如果字体不可用，等待字体加载
        await document.fonts.ready;
        
        // 再次检查字体是否可用
        const isNowAvailable = document.fonts.check(`12px "${fontFamily}"`);
        setFontLoaded(isNowAvailable);
        
      } catch (error) {
        console.warn('Font loading check failed:', error);
        // 发生错误时，设置为已加载以避免无限等待
        setFontLoaded(true);
      }
    };

    // 设置超时，避免无限等待
    timeoutId = setTimeout(() => {
      console.warn(`Font loading timeout for ${fontFamily}`);
      setFontLoaded(true);
    }, timeout);

    checkFont();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [fontFamily, timeout]);

  return fontLoaded;
};
