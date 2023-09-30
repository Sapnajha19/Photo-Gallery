"use client"
import Image from 'next/image'
import { CldUploadButton, CldImage } from 'next-cloudinary';
import {useState} from "react"
interface UploadImage{
  event: "success"
  info:{
    public_id: string
  } 
}
export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="ytldksnr" onUpload={(result) => { 
        let res=result as UploadImage
        setImageId(res.info.public_id)
      }}/>

      {imageId && <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />}
    </main>
  )
}
