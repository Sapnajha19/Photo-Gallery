"use client"
import Upload from './upload'

const page = () => {
    return (
        <div className='flex items-center justify-between py-4 px-5'>
            <h2 className="text-3xl font-semibold tracking-tight">
                Gallery
            </h2>
            <Upload/>
        </div>
    )
}

export default page
