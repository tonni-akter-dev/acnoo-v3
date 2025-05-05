'use client'
import Image from 'next/image';
import { useState } from 'react';
import logo from "/public/comment/acnoo.svg"
import profile from "/public/comment/profile.svg"


export default function Comment() {
  const [comments, setComments] = useState([
    {
      name: 'Esther Howard',
      message:
        "Hi I need help towards the angular, as we're to be frontend, and another to be backend for both, I need clearer understanding of what to do exactly, how will our logical structuring for both teams be, because you have it monorepo and shared only need two loggers, then how will it be guided and backend is monorepo, how can I achieve it?",
      isAdmin: false,
    },
    {
      name: 'Acmeo',
      message:
        'Thanks for your message. We are stuck in the next session so we are not sure but will be provided in near update on that moment.',
      isAdmin: true,
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    setComments([
      ...comments,
      {
        name: 'You',
        message: newComment.trim(),
        isAdmin: false,
      },
    ]);
    setNewComment('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleAddComment();
    }
  };


  return (
    <div className="max-w-xl mx-auto p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl text-primary font-bold">570 Comments found.</p>
        <select className="text-base font-bold border border-[#D9D9D9] rounded p-2 text-black">
          <option>Sort by Newer</option>
          <option>Sort by Older</option>
        </select>
      </div>

      <div className="rounded-[12px] bg-none px-5 py-4 border border-[#E5E7EB]">
  {comments.map((comment, index) => (
    <div key={index}>
      <div
        className={`flex items-center space-x-2 ${
          comment.isAdmin ? 'text-[#000D2B]' : 'text-primary bg-[#F5EFFF]'
        } font-bold text-[20px]`}
      >
        {comment.isAdmin && <Image src={logo} alt="" />}
        {!comment.isAdmin && <Image src={profile} alt="user profile" />}
       <div>
       <span>{comment.name}</span>
       {!comment.isAdmin && <p className='text-sm text-[#6B7280] font-medium'>8 days ago</p>}
       </div>
      </div>
      <p className="text-base text-[#6B7280] mt-3.5 mb-6 leading-relaxed">
        {comment.message}
      </p>
    </div>
  ))}
</div>

      <div className="mt-6 bg-white rounded-md border border-gray-200">
        <p className="text-[20px] font-bold text-primary mb-2 bg-[#F5EFFF] p-4">Add a comment</p>
       <div className='p-4'>
       <textarea
          className="w-full text-sm resize-none mt-9 border border-[#E5E5E5] rounded-[10px] px-3.5 py-6"
          rows={4}
          placeholder="Enter your Message*"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
       </div>
        <div className="flex items-center justify-between pl-4">
          <label className="text-base text-[#6B7280] mb-36">
            <input type="checkbox" className="mr-2" />
            Email me when this comment receives a reply
          </label>
        </div>
      </div>
    </div>
  );
}
