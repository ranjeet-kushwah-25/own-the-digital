'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Save, Eye, Upload, X, Plus, Trash2 } from 'lucide-react'

export default function EditBlogPage() {
  const params = useParams()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    status: 'draft',
    tags: [],
    featuredImage: ''
  })
  const [tagInput, setTagInput] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [errors, setErrors] = useState({})
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    // Simulate fetching blog post data
    const fetchBlogPost = async () => {
      try {
        // Mock data - in a real app, you'd fetch from API
        const mockPost = {
          id: parseInt(params.id),
          title: 'Getting Started with Next.js 14',
          slug: 'getting-started-nextjs-14',
          excerpt: 'Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features and best practices.',
          content: `# Getting Started with Next.js 14

Next.js 14 brings exciting new features and improvements that make building web applications even more powerful and efficient.

## Key Features

### App Router
The new App Router provides improved routing capabilities with better performance and developer experience.

### Server Components
Server Components allow you to build highly performant applications with minimal client-side JavaScript.

### Enhanced Performance
With improved build times and runtime performance, Next.js 14 is faster than ever.

## Getting Started

To create a new Next.js 14 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 14 is a significant update that brings many improvements for developers. Start exploring these features today!`,
          status: 'published',
          tags: ['Next.js', 'React', 'Web Development', 'Tutorial'],
          featuredImage: 'https://example.com/nextjs-14-cover.jpg'
        }

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        if (mockPost.id === parseInt(params.id)) {
          setFormData(mockPost)
        } else {
          setNotFound(true)
        }
      } catch (error) {
        console.error('Error fetching blog post:', error)
        setNotFound(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogPost()
  }, [params.id])

  useEffect(() => {
    // Update slug when title changes (only if slug hasn't been manually edited)
    if (formData.title && !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }, [formData.title, formData.slug])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug is required'
    }
    
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required'
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required'
    }
    
    return newErrors
  }

  const handleSave = async (status = 'draft') => {
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSaving(true)
    const dataToSave = { ...formData, status }
    
    // Simulate API call
    setTimeout(() => {
      console.log('Updating blog post:', dataToSave)
      setIsSaving(false)
      
      // In a real app, you would update via API and then redirect
      alert(`Blog post ${status === 'published' ? 'published' : 'saved as draft'} successfully!`)
    }, 2000)
  }

  const handlePreview = () => {
    setShowPreview(!showPreview)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[url('/images/bgImage.jpg')] flex items-center justify-center px-4 relative">
        {/* Logo in top left corner */}
        <div className="absolute top-0 left-4">
          <Link href='/'>
            <img
              src="/images/logo_ownthedigital.png"
              alt="OwnTheDigital Logo"
              className="object-contain w-32 h-15 sm:w-36 sm:h-20 md:w-40 md:h-24 lg:w-44 lg:h-28"
            />
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-[url('/images/bgImage.jpg')] flex items-center justify-center px-4 relative">
        {/* Logo in top left corner */}
        <div className="absolute top-0 left-4">
          <Link href='/'>
            <img
              src="/images/logo_ownthedigital.png"
              alt="OwnTheDigital Logo"
              className="object-contain w-32 h-15 sm:w-36 sm:h-20 md:w-40 md:h-24 lg:w-44 lg:h-28"
            />
          </Link>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-300 mb-4">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/admin/blog"
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            Back to Blog Posts
          </Link>
        </div>
      </div>
    )
  }

  if (showPreview) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <button
              onClick={handlePreview}
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Editor
            </button>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{formData.title || 'Untitled Post'}</h1>
                <p className="text-gray-600">{formData.excerpt || 'No excerpt provided'}</p>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                formData.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {formData.status || 'draft'}
              </span>
            </div>
          </div>

          {formData.featuredImage && (
            <div className="mb-8">
              <img
                src={formData.featuredImage}
                alt="Featured"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {formData.content ? (
              <div dangerouslySetInnerHTML={{ __html: formData.content.replace(/\n/g, '<br>') }} />
            ) : (
              <p className="text-gray-500">No content yet...</p>
            )}
          </div>

          {formData.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[url('/images/bgImage.jpg')] px-4 relative">
      {/* Logo in top left corner */}
      <div className="absolute top-0 left-4">
        <Link href='/'>
          <img
            src="/images/logo_ownthedigital.png"
            alt="OwnTheDigital Logo"
            className="object-contain w-32 h-15 sm:w-36 sm:h-20 md:w-40 md:h-24 lg:w-44 lg:h-28"
          />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto pt-20 pb-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-balgin font-bold text-[#5545FF] mb-2 tracking-wider" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)', fontFamily: 'monospace' }}>
            Edit Blog Post
          </h1>
          <p className="text-white italic text-lg">Update your blog article</p>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className={`block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                  errors.title ? 'ring-2 ring-red-400' : ''
                }`}
                placeholder="Enter blog post title"
                required
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-400">{errors.title}</p>
              )}
            </div>

            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-white mb-2">
                URL Slug
              </label>
              <input
                id="slug"
                name="slug"
                type="text"
                value={formData.slug}
                onChange={handleChange}
                className={`block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                  errors.slug ? 'ring-2 ring-red-400' : ''
                }`}
                placeholder="url-friendly-slug"
                required
              />
              {errors.slug && (
                <p className="mt-1 text-sm text-red-400">{errors.slug}</p>
              )}
              <p className="mt-1 text-sm text-gray-300">
                This will be used in the URL: /blog/{formData.slug || 'your-slug'}
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-white mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className={`block w-full px-4 py-3 text-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none ${
                  errors.excerpt ? 'ring-2 ring-red-400' : ''
                }`}
                placeholder="Brief description of your blog post"
                required
              />
              {errors.excerpt && (
                <p className="mt-1 text-sm text-red-400">{errors.excerpt}</p>
              )}
              <p className="mt-1 text-sm text-gray-300">
                This will appear in blog listings and search results
              </p>
            </div>

            {/* Featured Image */}
            <div>
              <label htmlFor="featuredImage" className="block text-sm font-medium text-white mb-2">
                Featured Image URL
              </label>
              <input
                id="featuredImage"
                name="featuredImage"
                type="url"
                value={formData.featuredImage}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="https://example.com/image.jpg"
              />
              <p className="mt-1 text-sm text-gray-300">
                Optional: Add a featured image URL for your blog post
              </p>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  placeholder="Add a tag and press Enter"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="inline-flex items-center px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-2 text-gray-300 hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-white mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={15}
                className={`block w-full px-4 py-3 text-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none font-mono text-sm ${
                  errors.content ? 'ring-2 ring-red-400' : ''
                }`}
                placeholder="Write your blog post content here..."
                required
              />
              {errors.content && (
                <p className="mt-1 text-sm text-red-400">{errors.content}</p>
              )}
              <p className="mt-1 text-sm text-gray-300">
                You can use Markdown for formatting. Press Enter for new lines.
              </p>
            </div>
          </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={handlePreview}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 group"
            >
              <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Preview
            </button>
            <button
              onClick={() => handleSave('draft')}
              disabled={isSaving}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <Save className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              {isSaving ? 'Saving...' : 'Save Draft'}
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={isSaving}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSaving ? 'Publishing...' : 'Publish'}
            </button>
            <Link
              href="/admin/blog"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Back to Blog Posts
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
