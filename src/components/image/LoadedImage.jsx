import { useState } from 'react'

const LoadedImage = ({ className, src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={className}>
      <img src={src} alt={alt}
        onLoad={() => setLoaded(true)}
        style={ !loaded ? { display: "none" } : { width: "100%" } }
      />
      <p
        style={  loaded ? { display: "none" } : { alignSelf: "center", textAlign: "center", margin: 0 } }
      >
        loading...
      </p>
    </div>
  )
}

export default LoadedImage
