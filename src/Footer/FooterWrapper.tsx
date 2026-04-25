'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export const FooterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  if (pathname === '/') return null
  return <>{children}</>
}
