import { React, useState, useEffect } from 'react'
import ContactItem from './ContactItem'
import contactsDB from '../../contacts.json'

export default function ContactList() {

  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    setContacts(contactsDB.slice(0, 5));
    }, []);

    const handleRandomContact = () => {
      setContacts((prev) => {
        // Filter out already selected contacts
        const remainingContacts = contactsDB.filter(
          (contact) => !prev.some((c) => c.id === contact.id)
        );
  
        if (remainingContacts.length === 0) {
          alert('No more contacts to add!');
          return prev; // Return current state if no contacts are left
        }
  
        // Select a random contact from the remaining contacts
        const randomIndex = Math.floor(Math.random() * remainingContacts.length);
        const randomContact = remainingContacts[randomIndex];
  
        // Return a new array with the random contact added
        return [...prev, randomContact];
      });
    };

    const handleSortPopularity = () => {
      setContacts((prev) => {

      });
    };

    const handleSortAlphabetically = () => {
      setContacts((prev) => {
        const sortedByName = [...prev];
          return sortedByName.sort((a, b) => a.name.localeCompare(b.name))
      });
    };

  return (
    <div>
      <div>
        <button className='border rounded-lg my-4 py-2 px-6' onClick={handleRandomContact}>Add Random Contact</button>
        <button className='border rounded-lg my-4 py-2 px-6' onClick={handleSortPopularity}>Sort by popularity</button>
        <button className='border rounded-lg my-4 py-2 px-6' onClick={handleSortAlphabetically}>Sort by name</button>
      </div>
      
      <table className='mx-auto'>
        <thead className='text-2xl'>
          <tr className=''>
            <th scope="col" className='p-4'>Picture</th>
            <th scope="col" className='p-4'>Name</th>
            <th scope="col" className='p-4'>Popularity</th>
            <th scope="col" className='p-4'>Won <br /> Oscar</th>
            <th scope="col" className='p-4'>Won <br />Emmy</th>
          </tr>
        </thead>
        <tbody className=''>
          {contacts.map((contact) => ( <ContactItem key={contact.id} {...contact} />) )}
        </tbody>
      </table>
    </div>
  )
}
