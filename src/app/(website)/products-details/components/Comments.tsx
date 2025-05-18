'use client'
import Image from 'next/image';
import { useState } from 'react';
import profile from "/public/comment/profile.svg"
import commenticon from "/public/commenticon.svg"
import { motion } from 'framer-motion';

const commentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export default function Comments({
    companyName = "Acnoo",
    companyResponse = "Thank you for your valuable feedback. Our support team has already replied you before sometime. Please review it and feel free to share more details with support team so they can help you. Your patience will be highly appreciated. Hope you will consider changing your rating soon.\n\nThank you",
}) {
    const [comments, setComments] = useState([
        {
            name: 'Esther Howard',
            message:
                "Hi I need help towards the angular, as we're to be frontend, and another to be backend for both, I need clearer understanding of what to do exactly, how will our logical structuring for both teams be, because you have it monorepo and shared only need two loggers, then how will it be guided and backend is monorepo, how can I achieve it?",
            isAdmin: false,
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
   <div className="">
  <div className="flex items-center justify-between mb-4">
    <p className="text-base lg:text-2xl text-primary font-bold">570 Comments found.</p>
    <select className="text-base font-bold border border-[#D9D9D9] rounded p-2 text-black">
      <option>Sort by Newer</option>
      <option>Sort by Older</option>
    </select>
  </div>

  <div className="rounded-[12px] bg-none border border-[#E5E7EB]">
    {comments.map((comment, index) => (
      <motion.div
        key={index}
        variants={commentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-4"
      >
        <div
          className={`flex items-center space-x-2 pt-4 px-5 pb-4 text-primary bg-[#F5EFFF] rounded-t-[12px] font-bold text-[20px]`}
        >
          {!comment.isAdmin && <Image src={profile} alt="user profile" />}
          <div>
            <span>{comment.name}</span>
            <p className='text-sm text-[#6B7280] font-medium'>8 days ago</p>
          </div>
        </div>
        <p className="px-5 pb-4 text-[#6B7280] font-medium mt-3.5 leading-relaxed">
          {comment.message}
        </p>
        <div className='border-t border-[#E5E7EB]'>
          <div className="rounded-md p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={commenticon} alt="Logo" />
              </div>
              <span className="font-bold text-xl">{companyName}</span>
            </div>
            <p className="text-[#6B7280] font-medium">
              {companyResponse.split("\n\n").map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  {index < companyResponse.split("\n\n").length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  <motion.div
    className="mt-6 bg-white rounded-md border border-gray-200"
    variants={commentVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
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
  </motion.div>
</div>

    );
}
