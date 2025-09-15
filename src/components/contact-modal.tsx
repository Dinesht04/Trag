"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Calendar } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-mobile"

interface ContactModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function ContactModal({ isOpen, setIsOpen }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus("")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Email sent successfully:", data)
        setSubmissionStatus("success")
        setIsOpen(false)
        setFormData({ fullName: "", email: "", phone: "", message: "" })
      } else {
        console.error("Failed to send email:", data)
        setSubmissionStatus("error")
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error)
      setSubmissionStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="px-4 pb-4">
          <DrawerHeader>
            <DrawerTitle>Schedule a Call</DrawerTitle>
          </DrawerHeader>
          <FormContent
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setIsOpen={setIsOpen}
          />

        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md max-w-[95vw] rounded-lg">
        <DialogHeader>
          <DialogTitle>Schedule a Call</DialogTitle>
        </DialogHeader>
        <div className="mt-2">
          <FormContent
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setIsOpen={setIsOpen}
          />

        </div>
      </DialogContent>
    </Dialog>
  )
}

interface FormContentProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
  };
  handleInputChange: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  setIsOpen: (open: boolean) => void;
}


const FormContent = ({ formData, handleInputChange, handleSubmit, setIsOpen }:FormContentProps) => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Tell us about your project or requirements"
          rows={4}
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-gray-800 hover:bg-gray-500 hover:cursor-pointer text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Call
        </Button>
      </div>
    </form>
  )
