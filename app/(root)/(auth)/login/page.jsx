'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Eye, EyeOff, Mail, Lock, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useAuthStore } from '@/store/auth.store'

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading, error, isAuthenticated, clearError } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])

  // Clear error when user starts typing
  useEffect(() => {
    if (error) {
      clearError()
    }
  }, [email, password, error, clearError])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await login({ email, password })

    if (result.success) {
      router.push('/landing-page')
    }
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
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-balgin font-bold text-[#5545FF] mb-2 tracking-wider" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)', fontFamily: 'monospace' }}>
            Welcome Back
          </h1>
          <p className="text-white italic text-lg">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-300 text-sm text-center">{error}</p>
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-12 py-3 text-black bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-600 hover:text-gray-800" />
                ) : (
                    <Eye className="h-5 w-5 text-gray-600 hover:text-gray-800" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-white">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-400 hover:text-blue-300 font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto flex items-center justify-center px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                Signing in...
              </div>
            ) : (
                <button
                  className="text-white font-medium text-lg flex items-center gap-2 group transform transition-all duration-300 hover:scale-110 hover:text-[#7C3AED]"
                >
                Sign In
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                    <ArrowUpRight className="text-black w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" />
                  </div>
                </button>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <div className="text-sm text-gray-400">
            Don't have an account?{' '}
            <Link
              href="/register"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
