'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Eye, Upload, X, Plus, Trash2 } from 'lucide-react'

export default function CreateBlogPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    introduction: '',
    summary: '',
    sections: [],
    conclusion: '',
    category: '',
    tags: [],
    status: 'draft',
    heroImage: '',
    thumbnailImage: ''
  })
  const [tagInput, setTagInput] = useState('')
  const [currentSection, setCurrentSection] = useState({
    section_number: 1,
    section_title: '',
    section_content: {
      why_it_works: '',
      how_to_implement: []
    }
  })
  const [implementationInput, setImplementationInput] = useState('')
  const [isAuthLoading, setIsAuthLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [errors, setErrors] = useState({})
  const [userRole, setUserRole] = useState(null)

  // Check authentication and admin role on page load
  useEffect(() => {
    const checkAuth = async () => {
      // Check if token exists
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('accessToken='))
        ?.split('=')[1];

      if (!token) {
        router.push('/login')
        return
      }

      try {
        // Verify user role
        const response = await fetch('/api/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          // Token invalid, redirect to login
          router.push('/login')
          return
        }

        const userData = await response.json()

        if (userData.role !== 'admin') {
          // Not admin, redirect to home or unauthorized page
          router.push('/')
          return
        }

        setUserRole(userData.role)
      } catch (error) {
        console.error('Auth check failed:', error)
        router.push('/login')
      } finally {
        setIsAuthLoading(false)
      }
    }

    checkAuth()
  }, [router])

  // if (isAuthLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-white">Loading...</div>
  //     </div>
  //   )
  // }

  useEffect(() => {
    // Update section number when sections change
    setCurrentSection(prev => ({
      ...prev,
      section_number: formData.sections.length + 1
    }))
  }, [formData.sections.length])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSectionChange = (field, value) => {
    if (field === 'how_to_implement') {
      setCurrentSection(prev => ({
        ...prev,
        section_content: {
          ...prev.section_content,
          [field]: [...prev.section_content[field], value]
        }
      }))
    } else if (field.startsWith('section_content.')) {
      const contentField = field.replace('section_content.', '')
      setCurrentSection(prev => ({
        ...prev,
        section_content: {
          ...prev.section_content,
          [contentField]: value
        }
      }))
    } else {
      setCurrentSection(prev => ({ ...prev, [field]: value }))
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

  const handleAddSection = () => {
    if (currentSection.section_title.trim() && currentSection.section_content.why_it_works.trim()) {
      setFormData(prev => {
        const newSection = { ...currentSection }
        return {
          ...prev,
          sections: [...prev.sections, newSection]
        }
      })
      setCurrentSection({
        section_number: formData.sections.length + 2,
        section_title: '',
        section_content: {
          why_it_works: '',
          how_to_implement: []
        }
      })
    }
  }

  const handleRemoveSection = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter((_, index) => index !== indexToRemove)
    }))
  }

  const handleRemoveImplementation = (indexToRemove) => {
    setCurrentSection(prev => ({
      ...prev,
      section_content: {
        ...prev.section_content,
        how_to_implement: prev.section_content.how_to_implement.filter((_, index) => index !== indexToRemove)
      }
    }))
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

    if (!formData.introduction.trim()) {
      newErrors.introduction = 'Introduction is required'
    }

    if (!formData.summary.trim()) {
      newErrors.summary = 'Summary is required'
    }

    if (formData.sections.length === 0) {
      newErrors.sections = 'At least one section is required'
    }

    if (!formData.conclusion.trim()) {
      newErrors.conclusion = 'Conclusion is required'
    }

    if (!formData.category.trim()) {
      newErrors.category = 'Category is required'
    }

    return newErrors
  }

  const handleSave = async (status) => {
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSaving(true)
    const dataToSave = { ...formData, status }

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      });

      const result = await response.json()

      if (response.ok) {
        console.log('Blog post saved successfully:', result)
        setIsSaving(false)

        // Redirect to blog listing or show success message
        alert(`Blog post ${status === 'published' ? 'published' : 'saved as draft'} successfully!`)

        // Optionally redirect to blog listing
        window.location.href = '/blogs'
      } else {
        throw new Error(result.message || 'Failed to save blog post')
      }
    } catch (error) {
      console.error('Error saving blog post:', error)
      setIsSaving(false)
      alert(`Error: ${error.message}`)
    }
  }

  const handlePreview = () => {
    setShowPreview(!showPreview)
  }

  const loadSampleData = () => {
    const sampleData = {
      title: "Doing Strategies That Work",
      introduction: "In today's fast-paced digital world, marketing strategies have evolved dramatically from traditional methods to innovative online techniques...",
      summary: "In this blog post, we'll explore some of the most effective digital marketing strategies that can help your business thrive.",
      sections: [
        {
          section_number: 1,
          section_title: "Content Marketing",
          section_content: {
            why_it_works: "Content marketing builds trust and authority by providing valuable and relevant information to users.",
            how_to_implement: [
              "Write SEO-friendly blog posts",
              "Create long-form guides and articles"
            ]
          }
        },
        {
          section_number: 2,
          section_title: "Search Engine Optimization",
          section_content: {
            why_it_works: "SEO increases visibility on search engines, bringing organic traffic to your website.",
            how_to_implement: [
              "Perform keyword research",
              "Optimize on-page elements like meta tags"
            ]
          }
        },
        {
          section_number: 3,
          section_title: "Social Media Marketing",
          section_content: {
            why_it_works: "Social media helps in building brand awareness and engaging directly with customers.",
            how_to_implement: [
              "Post consistently on social platforms",
              "Engage with audience comments and messages"
            ]
          }
        },
        {
          section_number: 4,
          section_title: "Email Marketing",
          section_content: {
            why_it_works: "Email marketing delivers personalized messages and has high ROI compared to other channels.",
            how_to_implement: [
              "Build an email subscriber list",
              "Send newsletters and promotional emails"
            ]
          }
        },
        {
          section_number: 5,
          section_title: "Pay-Per-Click Advertising",
          section_content: {
            why_it_works: "PPC generates immediate traffic and allows precise audience targeting.",
            how_to_implement: [
              "Run Google Ads campaigns",
              "Optimize ad copy and landing pages"
            ]
          }
        },
        {
          section_number: 6,
          section_title: "Affiliate Marketing",
          section_content: {
            why_it_works: "Affiliate marketing expands reach by leveraging third-party promoters.",
            how_to_implement: [
              "Partner with influencers or affiliates",
              "Offer commission-based incentives"
            ]
          }
        },
        {
          section_number: 7,
          section_title: "Influencer Marketing",
          section_content: {
            why_it_works: "Influencers already have a loyal audience, making it easier to build trust quickly.",
            how_to_implement: [
              "Collaborate with niche influencers",
              "Run sponsored campaigns"
            ]
          }
        },
        {
          section_number: 8,
          section_title: "Video Marketing",
          section_content: {
            why_it_works: "Videos are more engaging and help explain complex ideas easily.",
            how_to_implement: [
              "Create YouTube videos",
              "Use short-form content like reels"
            ]
          }
        },
        {
          section_number: 9,
          section_title: "Conversion Rate Optimization",
          section_content: {
            why_it_works: "CRO improves the percentage of visitors who take desired actions.",
            how_to_implement: [
              "A/B test landing pages",
              "Optimize call-to-action buttons"
            ]
          }
        },
        {
          section_number: 10,
          section_title: "Analytics and Tracking",
          section_content: {
            why_it_works: "Data-driven decisions improve marketing performance and ROI.",
            how_to_implement: [
              "Use Google Analytics",
              "Track user behavior and conversions"
            ]
          }
        }
      ],
      conclusion: "Implementing these digital marketing strategies can significantly boost your online presence and drive business growth.",
      category: "digital marketing",
      tags: [
        "marketing",
        "digital",
        "strategy"
      ],
      status: "draft",
      heroImage: "https://example.com/hero-image.jpg",
      thumbnailImage: "https://example.com/thumbnail.jpg"
    }

    setFormData(sampleData)
    setCurrentSection({
      section_number: sampleData.sections.length + 1,
      section_title: '',
      section_content: {
        why_it_works: '',
        how_to_implement: []
      }
    })
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
                <h1 className="text-3xl font-bold text-gray-900">{formData.title || 'Untitled Post'}</h1>
                <p className="text-gray-600">{formData.summary || 'No summary provided'}</p>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${formData.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                {formData.status || 'draft'}
              </span>
            </div>
          </div>

          {formData.heroImage && (
            <div className="mb-8">
              <img
                src={formData.heroImage}
                alt="Featured"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {formData.introduction && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p>{formData.introduction}</p>
              </div>
            )}

            {formData.sections.length > 0 && (
              <div className="mb-6">
                {formData.sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{section.section_title}</h3>
                    <p className="mb-2">{section.section_content.why_it_works}</p>
                    {section.section_content.how_to_implement.length > 0 && (
                      <ul className="list-disc pl-6">
                        {section.section_content.how_to_implement.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {formData.conclusion && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p>{formData.conclusion}</p>
              </div>
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
            Create New Blog Post
          </h1>
          <p className="text-white italic text-lg">Write and publish your new blog article</p>
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
                className={`block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.title ? 'ring-2 ring-red-400' : ''
                  }`}
                placeholder="Enter blog post title"
                required
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-400">{errors.title}</p>
              )}
            </div>

            {/* Introduction */}
            <div>
              <label htmlFor="introduction" className="block text-sm font-medium text-white mb-2">
                Introduction
              </label>
              <textarea
                id="introduction"
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                rows={4}
                className={`block w-full px-4 py-3 text-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none ${errors.introduction ? 'ring-2 ring-red-400' : ''
                  }`}
                placeholder="Write an engaging introduction..."
                required
              />
              {errors.introduction && (
                <p className="mt-1 text-sm text-red-400">{errors.introduction}</p>
              )}
            </div>

            {/* Summary */}
            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-white mb-2">
                Summary
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows={3}
                className={`block w-full px-4 py-3 text-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none ${errors.summary ? 'ring-2 ring-red-400' : ''
                  }`}
                placeholder="Brief summary of your blog post"
                required
              />
              {errors.summary && (
                <p className="mt-1 text-sm text-red-400">{errors.summary}</p>
              )}
              <p className="mt-1 text-sm text-gray-300">
                This will appear in blog listings and search results
              </p>
            </div>


            {/* Hero Image */}
            <div>
              <label htmlFor="heroImage" className="block text-sm font-medium text-white mb-2">
                Hero Image URL
              </label>
              <input
                id="heroImage"
                name="heroImage"
                type="url"
                value={formData.heroImage}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="https://example.com/hero-image.jpg"
              />
              <p className="mt-1 text-sm text-gray-300">
                Optional: Add a hero image URL for your blog post
              </p>
            </div>

            {/* Thumbnail Image */}
            <div>
              <label htmlFor="thumbnailImage" className="block text-sm font-medium text-white mb-2">
                Thumbnail Image URL
              </label>
              <input
                id="thumbnailImage"
                name="thumbnailImage"
                type="url"
                value={formData.thumbnailImage}
                onChange={handleChange}
                className="block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="https://example.com/thumbnail.jpg"
              />
              <p className="mt-1 text-sm text-gray-300">
                Optional: Add a thumbnail image URL for blog listings
              </p>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${errors.category ? 'ring-2 ring-red-400' : ''
                  }`}
                required
              >
                <option value="">Select a category</option>
                <option value="digital marketing">Digital Marketing</option>
                <option value="web development">Web Development</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="seo">SEO</option>
                <option value="social media">Social Media</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-400">{errors.category}</p>
              )}
            </div>
            <label className="block text-sm font-medium text-white mb-2">
              Blog Sections
            </label>
            {errors.sections && (
              <p className="mb-2 text-sm text-red-400">{errors.sections}</p>
            )}

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 mb-4">
              <h4 className="text-sm font-medium text-white mb-3">
                Section {currentSection.section_number}
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Section Title
                  </label>
                  <input
                    type="text"
                    value={currentSection.section_title}
                    onChange={(e) => handleSectionChange('section_title', e.target.value)}
                    className="block w-full px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    placeholder="Enter section title"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Why It Works
                  </label>
                  <textarea
                    value={currentSection.section_content.why_it_works}
                    onChange={(e) => handleSectionChange('section_content.why_it_works', e.target.value)}
                    rows={3}
                    className="block w-full px-4 py-3 text-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                    placeholder="Explain why this strategy works"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    How to Implement
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={implementationInput}
                      onChange={(e) => setImplementationInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          if (implementationInput.trim()) {
                            handleSectionChange('how_to_implement', implementationInput.trim())
                            setImplementationInput('')
                          }
                        }
                      }}
                      className="flex-1 px-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      placeholder="Add implementation step and press Enter"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (implementationInput.trim()) {
                          handleSectionChange('how_to_implement', implementationInput.trim())
                          setImplementationInput('')
                        }
                      }}
                      className="inline-flex items-center px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentSection.section_content.how_to_implement.map((item, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30"
                      >
                        {item}
                        <button
                          type="button"
                          onClick={() => handleRemoveImplementation(index)}
                          className="ml-1 text-gray-300 hover:text-white"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddSection}
                disabled={!currentSection.section_title.trim() || !currentSection.section_content.why_it_works.trim()}
                className="mt-3 inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Plus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Add Section
              </button>
            </div>

            {formData.sections.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-white mb-2">Added Sections:</h4>
                {formData.sections.map((section, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl">
                    <div>
                      <div className="font-medium text-white">{section.section_number}. {section.section_title}</div>
                      <div className="text-sm text-gray-300">{section.section_content.how_to_implement.length} implementation steps</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveSection(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

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

          {/* Conclusion */}
          <div>
            <label htmlFor="conclusion" className="block text-sm font-medium text-white mb-2">
              Conclusion
            </label>
            <textarea
              id="conclusion"
              name="conclusion"
              value={formData.conclusion}
              onChange={handleChange}
              rows={4}
              className={`block w-full px-4 py-3 text-black bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none ${errors.conclusion ? 'ring-2 ring-red-400' : 'border-white/20'
                }`}
              placeholder="Write a compelling conclusion..."
              required
            />
            {errors.conclusion && (
              <p className="mt-1 text-sm text-red-400">{errors.conclusion}</p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={loadSampleData}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 group"
            >
              <Upload className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Load Sample Data
            </button>
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
              href="/blogs"
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
