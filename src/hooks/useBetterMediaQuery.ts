import { useEffect, useState } from 'react'

export function useBetterMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<null | boolean>(null)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)

    const listener = () => setMatches(!!mediaQueryList.matches)
    mediaQueryList.addListener(listener)

    listener()

    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [mediaQueryString])

  return matches
}
