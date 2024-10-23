import React, { useState, useEffect } from "react";


const NotificationItem = ({
  image,
  initials,
  title,
  description,
  date,
  isNew,
  isRead,
}) => (
  <div
    className={`flex items-start p-4 ${
      isRead ? "bg-gray-100" : "bg-white"
    } border-b border-gray-200`}
  >
    {isRead && (
      <div className="ml-3">
        <button className="text-gray-400 hover:text-gray-600">
          <img src="/src/assets/Icons/x.png" alt="" />
        </button>
      </div>
    )}
    <div className="ml-3 flex-1">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        {isNew && (
          <span className="text-xs text-white bg-purple-600 rounded-full px-2 py-1">
            New
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{date}</p>
    </div>
    <div className="flex-shrink-0">
      {image ? (
        <img
          className="w-10 h-10 rounded-full"
          src={image}
          alt="User profile"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-bold">
          {initials}
        </div>
      )}
    </div>
    
  </div>
);

const Notifications = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 max-h-36">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 space-x-reverse">
          <img src="/src/assets/Icons/mail-opened.png" alt="" />
          <span className="text-xs text-blue-500 bg-blue-100 rounded-md px-2 py-1">
            8 New
          </span>
        </div>
        <h2 className="text-lg font-semibold">Notifications</h2>
      </div>
      <NotificationItem
        image="https://placehold.co/40x40"
        title="Congratulation Flora! 🎉"
        description="Won the monthly best seller gold badge"
        date="Today"
        isNew={true}
      />
      <NotificationItem
        initials="VU"
        title="New user registered."
        description="Accepted your connection"
        date="Yesterday"
        isNew={false}
      />
      <NotificationItem
        image="https://placehold.co/40x40"
        title="New message received 👋"
        description="You have new message from Natalie"
        date="11 Aug"
        isNew={false}
        isRead={true}
      />
      <NotificationItem
        image="https://placehold.co/40x40"
        title="Paypal"
        description="ACME Inc. made new order $1,154"
        date="25 May"
        isNew={false}
      />
      <NotificationItem
        image="https://placehold.co/40x40"
        title="Application has been approved 🚀"
        description="Your ABC project application has been approved."
        date="19 Mar"
        isNew={false}
      />
      <div className="p-4 bg-white">
        <button className="w-full text-center text-white bg-menu rounded-lg py-2">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default Notifications;
