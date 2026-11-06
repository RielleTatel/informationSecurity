# Reflection collection: sleeve notes

The audience is a reader of Gabrielle Tatel's Information Security papers. Each paper connects a song's emotional premise to a course lesson. The design gives each song a recognisable opening and keeps the long reading experience quiet.

Base tokens: cool paper #F4F6F8, ink #202120, plum #67435E, rose #E6C8D5, mist #D9E8EE, lake #265C77. Song-specific additions: Robbers red #B73644; Thick And Thin deep blue #153C59 and pale gold #E7D6A4.

Type: Cormorant Garamond for the song titles and reflective headings; Manrope for paper text, navigation, and controls. The expressive serif belongs to the essay's personal voice; the quiet sans-serif supports sustained reading and clear controls. Body measures remain below 80 characters.

Layout considered:

```
A. Centered title / two dark columns / fixed bottom audio bar
B. Song sleeve / light paper + listening sidebar / next paper
```

Choose B. A repeats the previous pages' oversized centered introductions and would place playback controls over the essay. B places the boldest treatment in the song title, gives each paper a distinct palette, and leaves text left-aligned. On narrow screens, listening tools move above the paper; an open player remains visible while reading and can be stopped to reclaim space.

Brief review: decorative section numbering implies a sequence that the essays do not have. Remove it, along with repeated uppercase labels, radial glows, ornamental circles, and duplicate hero pull quotes. Use a single sleeve treatment per song: an offset inset for Backburner, an interrupted frame for Robbers, translucent layers for Delicate, and paired bands for Thick And Thin. The four reflections themselves are a real sequence, so their navigation retains its numbers.

Music uses the official YouTube IFrame Player API. Load it only after a reader requests playback. Provide play/pause, mute/unmute, stop, an external listening link, loading/error feedback, and visible native controls. Keep the embedded video at least 200 by 200 pixels, do not conceal it during playback, and destroy it on route changes. Reading must work if the provider is unavailable. No audio files are downloaded or extracted from the videos.

Sources: https://developers.google.com/youtube/iframe_api_reference and https://developers.google.com/youtube/terms/required-minimum-functionality

## Verification and playback limitation

All four reflection routes passed browser checks at 1440px, 768px, 390px, and 320px without horizontal overflow. The first two papers' original content blocks were compared against their new rendering. All four Markdown papers were checked against the page text. Screenshots of the desktop and mobile layouts, including the open mobile listening panel, were inspected.

Player controls were tested against an explicit provider test double: play, pause, mute, unmute, stop, minimum visible player dimensions, and destruction on client-side navigation. Blocking the external API verified the loading failure, direct-song fallback, and reset behavior. These tests verify the controls, not actual media delivery.

Live YouTube checks in this environment returned unavailable/embedding-restricted responses for the original videos. Robbers' explicit music video also returned an age restriction, so the player uses The 1975's alternate official upload (https://www.youtube.com/watch?v=wjHgiSx0RNQ). Official lyric/audio alternatives and the standard YouTube host were also tested; they returned error 150 here. Audible embedded playback therefore remains unverified and may be restricted by the provider. The interface reports that limitation and provides a direct listening link. No restriction was bypassed and no copyrighted audio was copied into the repository.
