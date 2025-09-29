import { Header } from '@/components/layout/header'
import { Footer } from '@/components/footer'

export default function ForumPage() {
  const categories = [
    {
      name: 'General Discussion',
      description: 'General league discussion and announcements',
      postCount: 156,
      lastPost: '2 hours ago',
      color: 'bg-blue-500'
    },
    {
      name: 'Trade Discussion',
      description: 'Discuss potential trades and player movements',
      postCount: 89,
      lastPost: '5 hours ago',
      color: 'bg-green-500'
    },
    {
      name: 'Game Discussion',
      description: 'Talk about recent games and matchups',
      postCount: 234,
      lastPost: '1 hour ago',
      color: 'bg-purple-500'
    },
    {
      name: 'Team Management',
      description: 'Strategies and tips for team management',
      postCount: 67,
      lastPost: '3 hours ago',
      color: 'bg-orange-500'
    },
    {
      name: 'Off-Topic',
      description: 'Non-hockey related discussions',
      postCount: 45,
      lastPost: '6 hours ago',
      color: 'bg-gray-500'
    },
    {
      name: 'Announcements',
      description: 'Official league announcements and updates',
      postCount: 23,
      lastPost: '1 day ago',
      color: 'bg-red-500'
    }
  ]

  const recentPosts = [
    {
      title: 'Trade Deadline Approaching - Who are you targeting?',
      author: 'HockeyFan23',
      category: 'Trade Discussion',
      replies: 15,
      lastReply: '2 hours ago',
      views: 234
    },
    {
      title: 'Amazing comeback win by the Bruins last night!',
      author: 'BruinsFan',
      category: 'Game Discussion',
      replies: 8,
      lastReply: '3 hours ago',
      views: 156
    },
    {
      title: 'New league rules for next season announced',
      author: 'LeagueAdmin',
      category: 'Announcements',
      replies: 23,
      lastReply: '1 day ago',
      views: 445
    },
    {
      title: 'Best strategies for managing salary cap?',
      author: 'TeamManager',
      category: 'Team Management',
      replies: 12,
      lastReply: '4 hours ago',
      views: 189
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Forum</h1>
          <p className="text-muted-foreground">
            Connect with other league members and discuss hockey
          </p>
        </div>

        {/* Forum Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {category.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{category.postCount} posts</span>
                      <span>Last: {category.lastPost}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Recent Posts</h2>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              New Post
            </button>
          </div>
          
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
                  {recentPosts.map((post, index) => (
                    <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <div className="font-semibold hover:text-primary cursor-pointer">
                          {post.title}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {post.author.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <span className="text-sm">{post.author}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {post.category}
                        </span>
                      </td>
                      <td className="p-4 text-center">{post.replies}</td>
                      <td className="p-4 text-center">{post.views}</td>
                      <td className="p-4 text-sm text-muted-foreground">{post.lastReply}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
      </main>

      <Footer />
    </div>
  )
}
