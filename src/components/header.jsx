"use client";

import React, { useState, useEffect } from 'react';
import EventFormModal from '@/app/dashboard/modal';
import Modal from 'react-modal';


export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOnEventPage, setIsOnEventPage] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsOnEventPage(currentPath === '/events');
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex justify-between py-4">
      <div className="text-2xl font-bold">Synergia.</div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/events" className="hover:underline">
              Events
            </a>
          </li>
          {/* <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li> */}
          <li>
            <a href="#" className="hover:underline">
              Dashboard
            </a>
          </li>
          {isOnEventPage && ( 
            <li>
            <button onClick={handleOpenModal} className="bg-black text-white px-4 py-2 rounded">
              Create Event
            </button>
          </li>
          )}
        </ul>
      </nav>
      <EventFormModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </header>
  );
};
