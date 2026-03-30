import { auth } from '@clerk/nextjs/server'

export default async function StudioPage() {
  const { userId } = await auth()

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600">Please sign in to access the studio.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Studio</h1>
        <p className="text-gray-600">Welcome to your creative workspace</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
          <p className="text-gray-600 mb-4">Start a new creative project from scratch</p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
            New Project
          </button>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
          <p className="text-gray-600 mb-4">Continue working on your recent projects</p>
          <div className="space-y-2">
            <div className="text-sm text-gray-500">No recent projects</div>
          </div>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Templates</h2>
          <p className="text-gray-600 mb-4">Browse and use project templates</p>
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90">
            Browse Templates
          </button>
        </div>
      </div>
    </div>
  )
}