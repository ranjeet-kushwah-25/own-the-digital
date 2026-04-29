'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle, ArrowUpRight } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleReset = () => {
    setEmail('')
    setIsSubmitted(false)
    setError('')
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/images/bgImage.jpg')] px-4 relative">
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

        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-balgin font-bold text-[#5545FF] mb-2 tracking-wider" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)', fontFamily: 'monospace' }}>Check Your Email</h1>
            <p className="text-white mb-6">
              We've sent a password reset link to<br />
              <span className="font-medium text-white">{email}</span>
            </p>
            <div className="space-y-4">
              <div className="text-sm text-gray-400">
                Didn't receive email? Check your spam folder or
              </div>
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition"
              >
                Try another email
              </button>
              <Link
                href="/login"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/bgImage.jpg')] px-4 relative">
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

      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
        <div className="mb-8">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-gray-400 hover:text-blue-300 mb-6 transition"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Sign In
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-balgin font-bold text-[#5545FF] mb-2 tracking-wider" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)', fontFamily: 'monospace' }}>Reset Password</h1>
            <p className="text-white italic text-lg">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto flex items-center justify-center px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                Sending reset link...
              </div>
            ) : (
                <button
                  className="text-white font-medium text-lg flex items-center gap-2 group transform transition-all duration-300 hover:scale-110 hover:text-[#7C3AED]"
                >
                  Send
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    <ArrowUpRight className="text-black w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" />
                  </div>
                </button>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <div className="text-sm text-gray-400">
            Remember your password?{' '}
            <Link
              href="/login"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
