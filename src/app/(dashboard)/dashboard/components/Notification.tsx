import React from 'react'
import acnoo from "/public/icon/acnoo.png";
import Image from 'next/image';

interface NotificationType {
  id: number;
  message: string;
  time: string;
}

interface NotificationProps {
  notification: NotificationType;
}


const Notification = ({ notification }: NotificationProps) => {
  return (
    <div className="notification overflow-y-auto max-h-96">
      <div key={notification.id} className="flex gap-3 items-center p-2 border-b border-[#2E2E3E33]">
        <Image src={acnoo} alt="" />
        <div>
          <div className='flex justify-between items-center'>
            <p className="acnoo">Acnoo, Support</p>
            <p className="text-xs text-gray-500">{notification.time}</p>
          </div>
          <p className="text-sm text-gray-600">{notification.message}</p>

        </div>
      </div>
    </div>
  )
}

export default Notification