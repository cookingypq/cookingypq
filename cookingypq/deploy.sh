#!/bin/bash

echo "🚀 开始部署到 Vercel..."

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装，正在安装..."
    npm install -g vercel
fi

# 清理之前的构建
echo "🧹 清理之前的构建..."
rm -rf dist

# 安装依赖
echo "📦 安装依赖..."
bun install

# 构建项目
echo "🔨 构建项目..."
bun run build

# 检查构建是否成功
if [ ! -d "dist" ]; then
    echo "❌ 构建失败，dist 目录不存在"
    exit 1
fi

# 检查 GIF 文件是否存在
echo "🔍 检查 GIF 文件..."
if [ ! -d "dist/gif" ]; then
    echo "❌ dist/gif 目录不存在"
    exit 1
fi

gif_count=$(ls dist/gif/*.gif 2>/dev/null | wc -l)
echo "✅ 找到 $gif_count 个 GIF 文件"

# 部署到 Vercel
echo "🌐 部署到 Vercel..."
vercel --prod

echo "✅ 部署完成！"
echo "📝 如果 GIF 文件仍然无法加载，请检查："
echo "   1. Vercel 项目设置中的环境变量"
echo "   2. 域名配置"
echo "   3. 缓存设置"
