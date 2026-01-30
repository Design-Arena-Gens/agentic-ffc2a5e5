export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q') || '玉米'

  // Simulated image search results with diverse corn images
  const cornImages = [
    {
      url: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500',
      title: '新鲜玉米棒',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1603048588665-791ca8ffe39e?w=500',
      title: '金黄玉米',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500',
      title: '玉米粒特写',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1571490005229-58d35aae7743?w=500',
      title: '烤玉米',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=500',
      title: '玉米田',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1605711285791-5319d39f47b5?w=500',
      title: '有机玉米',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500',
      title: '玉米收获',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1623036868529-e94df1b0e985?w=500',
      title: '甜玉米',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500',
      title: '玉米美食',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1583596635040-8e20dc1b5f2c?w=500',
      title: '玉米饼',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=500',
      title: '爆米花玉米',
      source: 'Unsplash'
    },
    {
      url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500',
      title: '彩色玉米',
      source: 'Unsplash'
    }
  ]

  return Response.json({
    images: cornImages,
    query: query
  })
}
