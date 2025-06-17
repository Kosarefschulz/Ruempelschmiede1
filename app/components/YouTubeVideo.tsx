'use client'

export default function YouTubeVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
        src="https://www.youtube.com/embed/sgLGNo1OOKs?autoplay=1&mute=1&loop=1&playlist=sgLGNo1OOKs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3"
        title="Rümpel Schmiede Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 pointer-events-none"></div>
    </div>
  )
}
