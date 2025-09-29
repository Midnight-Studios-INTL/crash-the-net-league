import { Footer } from '@/components/footer'
import { getForumCategories, getForumPosts } from '@/lib/database'
import type { ForumCategory, ForumPostWithAuthor } from '@/lib/types'

export default async function ForumPage() {
  const categories = await getForumCategories()
  const recentPosts = await getForumPosts()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    if (diffInHours < 48) return '1 day ago'
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <>
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Forum</h1>
            <p className="text-muted-foreground">
              Connect with other league members and discuss hockey
            </p>
          </div>

          {/* Forum Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Categories</h2>
            {categories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div key={category.id} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {category.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{category.description || 'No description available'}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>0 posts</span>
                          <span>Last: Never</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-card border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No Forum Categories</h3>
                <p className="text-muted-foreground">
                  Forum categories will be available once they are created.
                </p>
              </div>
            )}
          </div>

          {/* Recent Posts */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Recent Posts</h2>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                New Post
              </button>
            </div>
            
            {recentPosts.length > 0 ? (
              <div className="bg-card border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Topic</th>
                        <th className="text-left p-4 font-semibold">Author</th>
                        <th className="text-left p-4 font-semibold">Category</th>
                        <th className="text-center p-4 font-semibold">Replies</th>
                        <th className="text-center p-4 font-semibold">Views</th>
                        <th className="text-left p-4 font-semibold">Last Reply</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPosts.map((post) => (
                        <tr key={post.id} className="border-t hover:bg-muted/50 transition-colors">
                          <td className="p-4">
                            <div className="font-semibold hover:text-primary cursor-pointer">
                              {post.title}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  U
                                </span>
                              </div>
                              <span className="text-sm">
                                User {post.author_id?.substring(0, 8) || 'Unknown'}
                              </span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                              {post.category_id || 'General'}
                            </span>
                          </td>
                          <td className="p-4 text-center">{post.reply_count || 0}</td>
                          <td className="p-4 text-center">{post.view_count || 0}</td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {formatDate(post.created_at)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-card border rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No Recent Posts</h3>
                <p className="text-muted-foreground">
                  Be the first to start a discussion in the forum!
                </p>
              </div>
            )}
          </div>

          {/* Forum Rules */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Forum Rules</h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">General Guidelines:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Be respectful to all members</li>
                  <li>Stay on topic in each category</li>
                  <li>No spam or excessive posting</li>
                  <li>Use appropriate language</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Posting Guidelines:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Search before creating new topics</li>
                  <li>Use descriptive titles</li>
                  <li>Provide context for discussions</li>
                  <li>Report inappropriate content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}