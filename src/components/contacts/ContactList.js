import { React, useState, useEffect } from 'react'
import ContactItem from './ContactItem'
import contactsDB from '../../contacts.json'

export default function ContactList() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsDB.slice(0, 5));
    }, []);


  return (
    <div>
      <button className='border rounded-lg my-4 py-2 px-6'>Add Random Contact</button>
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
