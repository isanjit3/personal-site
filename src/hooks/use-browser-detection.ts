"use client"

import { useState, useEffect } from "react"

interface BrowserInfo {
  isSafari: boolean
  isChrome: boolean
  isFirefox: boolean
  isEdge: boolean
  isMobile: boolean
  isIOS: boolean
  isAndroid: boolean
}

export function useBrowserDetection(): BrowserInfo {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    isSafari: false,
    isChrome: false,
    isFirefox: false,
    isEdge: false,
    isMobile: false,
    isIOS: false,
    isAndroid: false,
  })

  useEffect(() => {
    const userAgent = navigator.userAgent

    setBrowserInfo({
      isSafari: /^((?!chrome|android).)*safari/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent),
      isChrome: /chrome|chromium|crios/i.test(userAgent) && !/edg/i.test(userAgent),
      isFirefox: /firefox|fxios/i.test(userAgent),
      isEdge: /edg/i.test(userAgent),
      isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent),
      isIOS: /iPad|iPhone|iPod/.test(userAgent),
      isAndroid: /android/i.test(userAgent),
    })
  }, [])

  return browserInfo
}

