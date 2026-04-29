'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, FileText, Plus, Settings, LogOut } from 'lucide-react'

export default function AdminNav() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <Link
              href="/admin"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Home className="h-5 w-5 mr-2" />
              Dashboard
            </Link>
            <Link
              href="/admin/blog"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <FileText className="h-5 w-5 mr-2" />
              Blogs
            </Link>
            <Link
              href="/blog/create"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
