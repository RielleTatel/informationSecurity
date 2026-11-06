'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Music2, Pause, Play, Square, Volume2, VolumeX } from 'lucide-react'
import { loadYouTubePlayer, type YouTubePlayer } from '@/lib/youtube-player'
import styles from './song-player.module.css'

type Status = 'idle' | 'loading' | 'ready' | 'error'

export function SongPlayer({ title, artist, videoId }: { title: string; artist: string; videoId: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const toggleButton = useRef<HTMLButtonElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [notice, setNotice] = useState('')
  const host = useRef<HTMLDivElement>(null)
  const player = useRef<YouTubePlayer | null>(null)
  const preference = useRef(false)

  useEffect(() => {
    if (!enabled || !host.current) return
    let disposed = false
    let instance: YouTubePlayer | undefined
    let sync: ReturnType<typeof setInterval> | undefined
    let readyTimeout: ReturnType<typeof setTimeout> | undefined
    let observer: IntersectionObserver | undefined
    const container = host.current
    const unavailable = () => {
      if (disposed) return
      setStatus('error')
      setPlaying(false)
      setNotice('This song could not load here. Try again or open it on YouTube.')
    }
    const pauseWhenHidden = () => {
      if (document.hidden) instance?.pauseVideo()
    }

    loadYouTubePlayer().then(api => {
      if (disposed) return
      const mount = document.createElement('div')
      container.replaceChildren(mount)
      readyTimeout = setTimeout(unavailable, 20000)
      instance = new api.Player(mount, {
        videoId,
        width: '100%',
        height: '200',
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          origin: window.location.origin,
          playsinline: 1,
          controls: 1,
          autoplay: 0,
          loop: 1,
          playlist: videoId,
          rel: 0,
        },
        events: {
          onReady: ({ target }) => {
            if (disposed) return
            clearTimeout(readyTimeout)
            player.current = target
            target.getIframe().title = `${title} by ${artist} — YouTube music player`
            target.getIframe().setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
            target.setVolume(25)
            if (preference.current) target.mute()
            else target.unMute()
            setMuted(preference.current)
            setStatus('ready')
            setNotice('')
            target.playVideo()
            // Native YouTube volume controls and our mute button stay in sync.
            sync = setInterval(() => {
              const isMuted = target.isMuted()
              preference.current = isMuted
              setMuted(isMuted)
            }, 500)
            observer = new IntersectionObserver(entries => {
              if (entries[0].intersectionRatio < 0.5 && target.getPlayerState() === 1) target.pauseVideo()
            }, { threshold: [0, 0.5, 1] })
            observer.observe(container)
          },
          onStateChange: ({ data }) => {
            if (disposed) return
            setPlaying(data === 1)
            if (data === 1) setNotice('')
          },
          onError: ({ data }) => {
            clearTimeout(readyTimeout)
            unavailable()
            if (!disposed && (data === 101 || data === 150)) {
              setNotice('YouTube has restricted this video’s embedded playback. Open the song on YouTube to listen.')
            }
          },
          onAutoplayBlocked: () => {
            if (disposed) return
            setPlaying(false)
            setNotice('Press play in the video to start listening.')
          },
        },
      })
      document.addEventListener('visibilitychange', pauseWhenHidden)
    }).catch(unavailable)

    return () => {
      disposed = true
      clearTimeout(readyTimeout)
      clearInterval(sync)
      observer?.disconnect()
      document.removeEventListener('visibilitychange', pauseWhenHidden)
      instance?.destroy()
      player.current = null
      container.replaceChildren()
    }
  }, [enabled, videoId, title, artist])

  function start() {
    setStatus('loading')
    setNotice('')
    setEnabled(true)
  }

  function stop() {
    setEnabled(false)
    setStatus('idle')
    setPlaying(false)
    setNotice('')
  }

  // Hiding the panel pauses the video, so it is never playing out of sight.
  function hide() {
    player.current?.pauseVideo()
    setOpen(false)
    toggleButton.current?.focus()
  }

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      player.current?.pauseVideo()
      setOpen(false)
      toggleButton.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function togglePlayback() {
    if (!player.current) return
    if (playing) player.current.pauseVideo()
    else player.current.playVideo()
  }

  function toggleMute() {
    if (!player.current) return
    const next = !player.current.isMuted()
    if (next) player.current.mute()
    else player.current.unMute()
    preference.current = next
    setMuted(next)
  }

  return (
    <div className={styles.dock}>
      <section id={panelId} className={styles.player} hidden={!open} data-active={enabled} aria-label={`Music player: ${title} by ${artist}`}>
        <div className={styles.heading}>
          <Music2 size={16} aria-hidden="true" />
          <p>Listen while you read</p>
          <button className={styles.close} type="button" onClick={hide} aria-label="Hide music player" title="Hide player"><ChevronDown size={18} aria-hidden="true" /></button>
        </div>
        <div className={styles.track}>
          <strong>{title}</strong><span>{artist}</span>
        </div>
        {!enabled ? (
          <button className={styles.start} type="button" onClick={start} aria-label={`Play ${title} by ${artist}`}><Play size={16} aria-hidden="true" />Play song</button>
        ) : (
          <>
            <div className={styles.video} ref={host} />
            <div className={styles.controls}>
              <button type="button" onClick={togglePlayback} disabled={status !== 'ready'} aria-label={playing ? 'Pause song' : 'Play song'}>
                {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
                {playing ? 'Pause' : 'Play'}
              </button>
              <button type="button" onClick={toggleMute} disabled={status !== 'ready'} aria-label={muted ? 'Unmute song' : 'Mute song'}>
                {muted ? <VolumeX size={16} aria-hidden="true" /> : <Volume2 size={16} aria-hidden="true" />}
                {muted ? 'Unmute' : 'Mute'}
              </button>
              <button type="button" onClick={stop} aria-label="Stop the song and close the video">
                <Square size={14} aria-hidden="true" />Stop
              </button>
            </div>
            <p className={styles.status} role="status">{status === 'loading' ? 'Loading the song…' : notice || (status === 'ready' ? (muted ? 'Sound is muted.' : playing ? 'Playing.' : 'Paused.') : '')}</p>
            {status === 'error' && <button type="button" className={styles.retry} onClick={stop}>Reset player to try again</button>}
          </>
        )}
        <a className={styles.external} href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener">Open song on YouTube</a>
      </section>
      <button
        ref={toggleButton}
        type="button"
        className={styles.toggle}
        data-playing={playing}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Hide music player' : `Open music player: ${title} by ${artist}`}
        title={open ? 'Hide music player' : `Listen to ${title}`}
        onClick={() => (open ? hide() : setOpen(true))}
      >
        {playing ? <span className={styles.bars} aria-hidden="true"><i /><i /><i /></span> : <Music2 size={18} aria-hidden="true" />}
      </button>
    </div>
  )
}
