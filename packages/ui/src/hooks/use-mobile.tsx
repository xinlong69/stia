import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  return React.useSyncExternalStore(
    // 1. The subscribe function
    (callback) => {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      mql.addEventListener("change", callback)
      return () => mql.removeEventListener("change", callback)
    },
    // 2. How to get the snapshot on the client
    () => window.innerWidth < MOBILE_BREAKPOINT,
    // 3. How to get the snapshot on the server (Optional: defaults to false for SSR)
    () => false 
  )
}