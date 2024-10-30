'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Link, Youtube, Instagram, Facebook, Twitter, Menu, X, CheckCircle, Shield, Zap, Clock, HelpCircle, CheckCircle2, Video, FileVideo, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const VideoDownloader = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowOptions(true);
    }, 1500);
  };

  const getQualityIcon = (quality) => {
    if (quality === '1080p') return <FileVideo className="h-5 w-5 text-purple-500" />;
    if (quality === '720p') return <Video className="h-5 w-5 text-pink-500" />;
    if (quality === '480p') return <FileVideo className="h-5 w-5 text-blue-500" />;
    return <Music className="h-5 w-5 text-green-500" />;
  }

  const downloadOptions = [
    { quality: '1080p', size: '245MB', format: 'MP4' },
    { quality: '720p', size: '180MB', format: 'MP4' },
    { quality: '480p', size: '120MB', format: 'MP4' },
    { quality: 'Audio Only', size: '45MB', format: 'MP3' }
  ];

  const steps = [
    "Copy the video URL from YouTube or Instagram",
    "Paste the URL in the input field above",
    "Click the Download button",
    "Choose your preferred quality and format"
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Download videos in seconds with our optimized servers"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "100% Safe",
      description: "Secure downloads without any ads or malware"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "High Quality",
      description: "Download videos in highest available quality"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "24/7 Available",
      description: "Our service is available round the clock"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-400 via-pink-100 to-blue-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-48 -right-48 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-48 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar with glass effect */}
      <nav className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
        {/* Rest of the navbar code remains the same */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <motion.span
                className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                VideoGrab
              </motion.span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">How to Use</Button>
              <Button variant="ghost">FAQ</Button>
              <Button variant="ghost">Contact</Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col space-y-2">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">How to Use</Button>
                <Button variant="ghost">FAQ</Button>
                <Button variant="ghost">Contact</Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content with glass effects */}
      <main className="flex-grow p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.5
              }}
              className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4 leading-tight"
            >
              Download Any Video
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 max-w-2xl mx-auto"
            >
              Fast, free, and secure video downloads from your favorite platforms
            </motion.p>
          </div>

          {/* URL Input Section with glass effect */}
          <Card className="mb-8 bg-white/60 backdrop-blur-lg border-white/20 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="relative flex-1">
                    <Input
                      type="url"
                      placeholder="Paste video URL here..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="pl-10 bg-white/80 backdrop-blur-sm"
                    />
                    <Link className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  <Button
                    type="submit"
                    disabled={!url || isLoading}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Download className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      "Download"
                    )}
                  </Button>
                </div>
              </form>

              {/* Rest of the component remains the same */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Youtube className="h-5 w-5" />
                  <span>YouTube</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Options with glass effect */}
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  Download Options
                </h2>
                <Badge variant="outline" className="text-gray-500 bg-white/50 backdrop-blur-sm">
                  Choose Quality
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {downloadOptions.map((option, index) => (
                  <motion.div
                    key={option.quality}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 hover:border-purple-200 bg-white/60 backdrop-blur-lg border-white/20">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            {getQualityIcon(option.quality)}
                            <div>
                              <h3 className="font-semibold text-gray-800">{option.quality}</h3>
                              <p className="text-sm text-gray-500">
                                {option.format} • {option.size}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="gap-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features Section with glass effect */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white/60 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Usage Instructions with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Card className="bg-white/60 backdrop-blur-lg border-white/20 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    How to Download
                  </h3>
                </div>
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-pink-600 shrink-0" />
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
                <AlertDescription className="mt-4 text-sm text-gray-600">
                  Our service supports high-quality downloads from YouTube and Instagram. All downloads are processed securely and quickly.
                </AlertDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>


      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-lg mt-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  VideoGrab
                </span>
              </motion.div>
              <p className="text-sm text-gray-600">
                The fastest and safest way to download videos from your favorite platforms.
                Experience premium quality downloads without compromises.
              </p>
              <div className="pt-4">
                <div className="flex space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Terms of Service', 'Privacy Policy'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-600 hover:text-purple-600 cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Support
              </h3>
              <ul className="space-y-3">
                {['FAQ', 'Contact Us', 'Help Center', 'Report Issue'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-600 hover:text-purple-600 cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Newsletter
              </h3>
              <p className="text-sm text-gray-600">
                Subscribe to our newsletter for updates and exclusive offers.
              </p>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/80 backdrop-blur-sm border-white/20"
                />
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <p className="text-sm text-gray-600 text-center md:text-left">
                © 2024 VideoGrab. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ color: '#9333ea' }}
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoDownloader;