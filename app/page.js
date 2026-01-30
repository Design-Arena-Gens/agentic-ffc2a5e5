'use client'

import { useState } from 'react'

export default function Home() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('玉米')

  const searchImages = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)
      const data = await response.json()
      setImages(data.images || [])
    } catch (error) {
      console.error('搜索失败:', error)
    }
    setLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchImages()
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '48px',
          marginBottom: '40px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          🌽 玉米图片搜索
        </h1>

        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '40px',
          justifyContent: 'center'
        }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="输入搜索词..."
            style={{
              padding: '15px 20px',
              fontSize: '18px',
              border: 'none',
              borderRadius: '25px',
              width: '400px',
              maxWidth: '100%',
              outline: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
          <button
            onClick={searchImages}
            disabled={loading}
            style={{
              padding: '15px 40px',
              fontSize: '18px',
              background: loading ? '#ccc' : '#FFD700',
              color: '#333',
              border: 'none',
              borderRadius: '25px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => !loading && (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {loading ? '搜索中...' : '搜索'}
          </button>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', color: 'white', fontSize: '20px' }}>
            正在搜索图片...
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={img.url}
                alt={img.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="250" height="200"%3E%3Crect fill="%23ddd" width="250" height="200"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E图片加载失败%3C/text%3E%3C/svg%3E'
                }}
              />
              <div style={{ padding: '15px' }}>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  color: '#333',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {img.title}
                </p>
                {img.source && (
                  <p style={{
                    margin: '5px 0 0 0',
                    fontSize: '12px',
                    color: '#666',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    来源: {img.source}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {!loading && images.length === 0 && (
          <div style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '20px',
            marginTop: '60px'
          }}>
            点击搜索按钮开始查找图片
          </div>
        )}
      </div>
    </div>
  )
}
