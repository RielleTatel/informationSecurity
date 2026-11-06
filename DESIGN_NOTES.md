# Design notes

All four reflections share the original dark, cinematic vibe and the Robbers page structure (full-height hero, 720px reading column, one full-bleed feature band, big closing lines, sign-off, previous/next). Each page takes its own palette and signature element from its song:

- **Backburner (NIKI)**: love left on low heat. Soot #0d0b08, ember #d4a574, gas-flame blue #5b7fa6. Italic Cormorant title over a small flickering burner ring; the CIA triad set as a three-column band; closes on "Protect first. Recover later—if you have to."
- **Robbers (The 1975)**: unchanged burgundy and crimson theme with the twelve-threat panel.
- **Delicate (Taylor Swift)**: fragile, glassy, after midnight. Midnight #0c0d1c, lilac #c7b6ef, blush #e7b8d0. Light-weight title on a frosted pane with a hairline crack, faint stars, and the section path drawn as a beaded thread.
- **Thick And Thin (LANY)**: LA dusk, steady through everything. Night blue #0f1630, sunset pink #f3a8b8, haze blue #9cc0e6. Left-aligned Playfair title on a dusk gradient, a thick band and a thin line running together across the hero and repeated as section markers.

The music player is a small round button fixed to the bottom-right corner. It opens a compact panel; hiding the panel pauses the video so it never plays out of sight.

## Enhancements on top of the original

- Papers render from `content/reflections/*.md` (`## section`, `### subheading`, `> quote`, `*centred statement*`, numbered list).
- All four reflections are live and linked in the navigation, with the current page marked.
- The song player loads YouTube only after the reader presses play (official IFrame API, nocookie host, visible controls, Escape to hide, direct-link fallback, destroyed on navigation).
- Skip link, visible focus states, reduced-motion support, larger small text, accurate reading time, previous/next links.
- Fixed the doubled closing quote in the Backburner lyric and restored the Robbers quote that had gone missing from the Markdown.

## Playback limitation

Audible embedded playback is unverified: YouTube returned embedding-restricted, age-restricted or error 150 responses from the test environment. Robbers uses The 1975's alternate official upload for the embed. The player reports the failure and links to the song directly.

Sources: https://developers.google.com/youtube/iframe_api_reference and https://developers.google.com/youtube/terms/required-minimum-functionality
