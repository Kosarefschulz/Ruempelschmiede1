'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../components/Icon'

export default function FranchisePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<'standortleiter' | 'franchisepartner' | 'lizenzpartner'>('franchisepartner')

  return (
    <div className="bg-white">
      <h1>Test</h1>
    </div>
  )
}