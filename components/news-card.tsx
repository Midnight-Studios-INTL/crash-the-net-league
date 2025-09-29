import type { NewsWithAuthor } from '@/lib/types'

interface NewsCardProps {
  article: NewsWithAuthor
}

export function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        {article.image_url ? (
          <img 
            src={article.image_url} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white text-center">
            <div className="text-4xl font-bold mb-2">🏒</div>
            <div className="text-sm opacity-80">Crash the Net League</div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-muted-foreground mb-2">
          {formatDate(article.created_at)}
          {article.author && (
            <span className="ml-2">• {article.author.gamer_tag || article.author.username}</span>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {article.excerpt || article.content.substring(0, 150) + '...'}
        </p>
        <button className="text-primary hover:underline text-sm font-medium">
          Read More →
        </button>
      </div>
    </div>
  )
}


