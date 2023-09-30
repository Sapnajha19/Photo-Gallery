"use client"
import { CldImage } from "next-cloudinary"
const View = (src: string) => {
  return (
    <div>
      <CldImage
        width="960"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  )
}

export default View
