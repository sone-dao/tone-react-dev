'use client'

import { win } from '@sone-dao/sone-react-utils'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

interface IDevProviderProps {
  children: React.ReactNode
}

export default function DevProvider({ children }: IDevProviderProps) {
  const searchParams = useSearchParams()

  useEffect(() => {
    searchParams.has('debug') && changeDebugStatus(searchParams.get('debug'))

    searchParams.has('api') && changeApiRemote(searchParams.get('api'))
  }, [searchParams])

  return <>{children}</>

  function changeDebugStatus(status: string | null) {
    if (!status) return

    if (status === 'true') {
      win.TONE_DEBUG = {}

      console.log('Debug Mode: Activated')
    } else {
      win.TONE_DEBUG = null

      console.log('Debug Mode: Deactivated')
    }
  }

  function changeApiRemote(url: string | null) {
    if (!url) return

    win.TONE_DEBUG = { ...win.TONE_DEBUG, api: url }

    console.log('Tone API set to: ' + url)
  }
}
