'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { useState, useRef } from 'react'
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaParagraph,
  FaPaperclip,
  FaFileImage,
  FaFilePdf,
  FaFileArchive,
  FaTimes
} from 'react-icons/fa'
import Image from 'next/image'
import send from "/public/img/send-icon.svg"

export default function TextEditor() {
  const [attachments, setAttachments] = useState([
    { id: 1, name: 'Image.jpg', size: '410 KB', type: 'image' },
    { id: 2, name: 'Image.jpg', size: '410 KB', type: 'image' }
  ])
  const fileInputRef = useRef(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: `<p><strong>Hi.</strong></p><p>I need to update my website...</p>`,
  })

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const newAttachments = Array.from(files).map(file => ({
        id: Date.now(),
        name: file.name,
        size: `${(file.size / 1024).toFixed(0)} KB`,
        type: file.type.split('/')[0] === 'image' ? 'image' : 
              file.type === 'application/pdf' ? 'pdf' : 'zip'
      }))
      setAttachments([...attachments, ...newAttachments])
    }
  }

  const removeAttachment = (id: number) => {
    setAttachments(attachments.filter(file => file.id !== id))
  }

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'image': return <FaFileImage className="text-blue-500" />
      case 'pdf': return <FaFilePdf className="text-red-500" />
      case 'zip': return <FaFileArchive className="text-yellow-500" />
      default: return <FaPaperclip className="text-gray-500" />
    }
  }

  if (!editor) return null

  return (
    <div className="p-4 rounded-lg">
      <div className="bg-[#FAFAFA] flex flex-wrap items-center gap-1 mb-4 border-b border-[#ECECEC]">
        <div className="flex items-center border-r pr-2 mr-2">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
            title="Heading 1"
          >
            <span className="font-bold">H1</span>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
            title="Heading 2"
          >
            <span className="font-bold">H2</span>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
            title="Heading 3"
          >
            <span className="font-bold">H3</span>
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`p-2 rounded ${editor.isActive('paragraph') ? 'bg-gray-200' : ''}`}
            title="Paragraph"
          >
            <FaParagraph className="text-gray-700" />
          </button>
        </div>

        {/* Text Formatting */}
        <div className="flex items-center border-r pr-2 mr-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
            title="Bold"
          >
            <FaBold className="text-gray-700" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
            title="Italic"
          >
            <FaItalic className="text-gray-700" />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200' : ''}`}
            title="Strikethrough"
          >
            <FaStrikethrough className="text-gray-700" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={`p-2 rounded ${editor.isActive('highlight') ? 'bg-gray-200' : ''}`}
            title="Highlight"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 3L2 12l3 3 1-1v5h5l1-1 3 3 9-10m0-3l3 3-9 10-3-3 1-1H6v-5l-1 1-3-3"></path>
            </svg>
          </button>
        </div>

        {/* Text Alignment */}
        <div className="flex items-center border-r pr-2 mr-2">
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''}`}
            title="Align Left"
          >
            <FaAlignLeft className="text-gray-700" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''}`}
            title="Align Center"
          >
            <FaAlignCenter className="text-gray-700" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''}`}
            title="Align Right"
          >
            <FaAlignRight className="text-gray-700" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'justify' }) ? 'bg-gray-200' : ''}`}
            title="Justify"
          >
            <FaAlignJustify className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Editor content */}
      <EditorContent
        editor={editor}
        className="min-h-[150px] p-2 focus:outline-none"
      />

      {/* Attachments section */}
      {attachments.length > 0 && (
        <div className="mt-4">
          <div className="text-sm font-medium mb-2">{attachments.length} Attachment{attachments.length !== 1 ? 's' : ''}</div>
          <div className="flex flex-wrap gap-3 mb-3">
            {attachments.map(file => (
              <div key={file.id} className="flex items-center bg-gray-50 rounded-lg py-2 border">
                <div className="mt-2 mr-2">
                  {getFileIcon(file.type)}
                </div>
                <div className="text-sm">
                  <span className="font-medium text-gray-800">{file.name}</span>
                  <span className="text-gray-500 ml-1">({file.size})</span>
                </div>
                <button 
                  onClick={() => removeAttachment(file.id)}
                  className="text-gray-400 hover:text-red-500 ml-3"
                  aria-label="Remove attachment"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <label htmlFor="file-upload" className="d-flex gap-2 items-center text-sm text-gray-500 cursor-pointer">
            
            <p   className='flex items-center gap-2 rounded-lg bg-[#EAEAEA] p-2'><FaPaperclip className="mr-2" /> Upload file</p>
            <span> File type: Image, PDF, Zip, (maximum 100MB)</span>
            <input
              type="file"
              id="file-upload"
              ref={fileInputRef}
              className="hidden"
              accept="image/*,.pdf,.zip"
              onChange={handleFileUpload}
              multiple
            />
          </label>
        </div>

        <button className="download-btn flex gap-2 items-center justify-center submit-btn bg-blue-500 text-white px-4 py-2 rounded">
          Send <Image src={send} alt="Send" width={16} height={16} />
        </button>
      </div>
    </div>
  )
}