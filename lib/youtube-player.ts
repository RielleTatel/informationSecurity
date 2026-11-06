export interface YouTubePlayer {
  playVideo(): void
  pauseVideo(): void
  mute(): void
  unMute(): void
  isMuted(): boolean
  setVolume(volume: number): void
  getPlayerState(): number
  getIframe(): HTMLIFrameElement
  destroy(): void
}

interface PlayerOptions {
  videoId: string
  width: string
  height: string
  host: string
  playerVars: Record<string, string | number>
  events: {
    onReady(event: { target: YouTubePlayer }): void
    onStateChange(event: { data: number }): void
    onError(event: { data: number }): void
    onAutoplayBlocked(): void
  }
}

interface YouTubeAPI {
  Player: new (element: HTMLElement, options: PlayerOptions) => YouTubePlayer
}

declare global {
  interface Window {
    YT?: YouTubeAPI
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiPromise: Promise<YouTubeAPI> | undefined

export function loadYouTubePlayer(): Promise<YouTubeAPI> {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (apiPromise) return apiPromise

  apiPromise = new Promise<YouTubeAPI>((resolve, reject) => {
    const script = document.createElement('script')
    const previousCallback = window.onYouTubeIframeAPIReady
    const fail = () => {
      clearTimeout(timeout)
      script.remove()
      window.onYouTubeIframeAPIReady = previousCallback
      apiPromise = undefined
      reject(new Error('The music player could not load.'))
    }
    window.onYouTubeIframeAPIReady = () => {
      clearTimeout(timeout)
      previousCallback?.()
      if (window.YT?.Player) resolve(window.YT)
      else fail()
    }
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    script.onerror = fail
    const timeout = setTimeout(fail, 15000)
    document.head.appendChild(script)
  })
  return apiPromise
}
