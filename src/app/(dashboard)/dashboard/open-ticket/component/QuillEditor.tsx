'use client'

import dynamic from 'next/dynamic'
import { useEffect, useMemo, useState } from 'react'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(
  () => import('react-quill').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => <p>Loading editor...</p>
  }
)

export default function QuillEditor() {
  const [value, setValue] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setValue(`
      <p><strong>Hi.</strong></p>
      <p>I need to update my website...</p>
    `)
  }, [])

  const modules = useMemo(() => ({
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  }), [])

  if (!mounted) return <div className="h-[200px] bg-gray-100 animate-pulse rounded" />

  return (
    <div className="quill-container">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        className="h-[300px] mb-8"
      />
    </div>
  )
}