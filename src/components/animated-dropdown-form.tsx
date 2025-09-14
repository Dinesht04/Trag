"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { X, Phone, Calendar, User, Mail, MessageSquare } from "lucide-react"

export function AnimatedDropdownForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setIsOpen(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-lg">Acme Corp</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            Book a Call
          </Button>
        </div>
      </nav>

      {/* Animated Dropdown Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Left String */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 200,
                delay: 0.1,
              }}
              className="fixed z-50"
              style={{
                top: "64px",
                right: "calc(50% - 160px)",
                width: "2px",
                height: "60px",
                background: "linear-gradient(to bottom, #3b82f6, #8b5cf6)",
                transformOrigin: "top",
              }}
            />

            {/* Right String */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 200,
                delay: 0.15,
              }}
              className="fixed z-50"
              style={{
                top: "64px",
                right: "calc(50% + 160px)",
                width: "2px",
                height: "60px",
                background: "linear-gradient(to bottom, #3b82f6, #8b5cf6)",
                transformOrigin: "top",
              }}
            />

            <motion.div
              initial={{
                y: -200,
                x: 100,
                opacity: 0,
                rotateX: -20,
                rotateZ: 5,
                scale: 0.8,
              }}
              animate={{
                y: 0,
                x: 0,
                opacity: 1,
                rotateX: 0,
                rotateZ: 0,
                scale: 1,
              }}
              exit={{
                y: -200,
                x: 100,
                opacity: 0,
                rotateX: -20,
                rotateZ: 5,
                scale: 0.8,
              }}
              transition={{
                type: "spring",
                damping: 18,
                stiffness: 250,
                mass: 1.5,
                duration: 0.8,
              }}
              className="fixed top-32 right-8 z-50 w-full max-w-sm"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div className="relative">
                {/* Left attachment point */}
                <div className="absolute -top-2 left-8 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg border-2 border-white z-10" />

                {/* Right attachment point */}
                <div className="absolute -top-2 right-8 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg border-2 border-white z-10" />

                <Card className="bg-white dark:bg-slate-800 shadow-2xl border-0 overflow-hidden transform hover:scale-[1.02] transition-transform duration-200">
                  {/* Header with gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 text-white hover:bg-white/20 h-8 w-8 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>

                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Book a Call</h3>
                        <p className="text-blue-100 text-sm">Let's discuss your project</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Form Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="p-6"
                  >
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Full Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.3 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                          rows={4}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.3 }}
                        className="flex space-x-3 pt-4"
                      >
                        <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Call
                        </Button>
                      </motion.div>
                    </form>
                  </motion.div>

                  {/* Decorative bottom accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  />
                </Card>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
