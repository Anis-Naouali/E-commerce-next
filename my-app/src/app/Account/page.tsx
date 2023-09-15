'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


export default function Account() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userId,setuserId]=useState(0)
const mail = localStorage.getItem("mail")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users', {
          params: { ID: userId },
        });
        
        console.log(response); 
        const userData = response.data
        const filtered = userData.filter((e:any)=>{
         return e.email === mail
        })        
        setFirstName(filtered[0].name);
        setLastName(filtered[0].LastName);
        setEmail(filtered[0].email);
        setAddress(filtered[0].adresse);
        setuserId(filtered[0].id)
        
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };    
  
    fetchUserData();
  }, [userId]);

  const handleFormSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/users?ID=${userId}`, {
        name: firstName,
        LastName: lastName,
        email: email,
        adresse: address,
      });
      console.log(response);
      alert('User data updated successfully!');
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Failed to update user data. Please try again later.')
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="inline-flex gap-10">
        <div className="w-48 h-72 relative">
          <p className="left-0 top-0 absolute text-black text-base font-medium leading-normal">
            Manage My Account
          </p>
          <p className="left-0 top-[152px] absolute text-black text-base font-medium leading-normal">
            My Orders
          </p>
          <Link
            href="/Wishlist"
            className="w-24 h-6 left-0 top-[264px] absolute text-black text-base font-medium leading-normal"
          >
            My WishList
          </Link>
          <div className="w-40 h-20 left-[35px] top-[40px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <Link
              href="/Account"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Profile
            </Link>
            <Link
              href="/Account"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              Address Book
            </Link>
            <Link
              href="/Account"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Payment Options
            </Link>
          </div>
          <div className="w-36 h-14 left-[35px] top-[192px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <Link
              href="/Cart"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Returns
            </Link>
            <Link
              href="/Cart"
              className="opacity-50 text-black text-base font-normal leading-normal hover:text-red-500 hover:opacity-100"
            >
              My Cancellations
            </Link>
          </div>
        </div>

        <div className="w-[870px] h-[630px] relative bg-white rounded shadow">
          <form onSubmit={handleFormSubmit}>
            <div className="left-[80px] top-[40px] absolute text-red-500 text-xl font-medium leading-7">
              Edit Your Profile
            </div>
            <div className="left-[80px] top-[84px] absolute justify-start items-start gap-12 inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <p className="text-black text-base font-normal leading-normal">
                  First Name
                </p>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your First Name"
                  className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                />
              </div>
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <p className="text-black text-base font-normal leading-normal">
                  Last Name
                </p>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Your Last Name"
                  className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                />
              </div>
            </div>
            <div className="left-[80px] top-[190px] absolute justify-start items-start gap-12 inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <p className="text-black text-base font-normal leading-normal">
                  Email
                </p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  type="email"
                  className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                />
              </div>
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <p className="text-black text-base font-normal leading-normal">
                  Address
                </p>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Kingston, 5236, United State"
                  className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
                />
              </div>
            </div>
            <div className="left-[80px] top-[296px] absolute flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <p className="text-black text-base font-normal leading-normal">
                  Password Changes
                </p>
                <input
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current Password"
                  type="password"
                  className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
                />
              </div>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                type="password"
                className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
              />
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                type="password"
                className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
              />
            </div>
            <div className="left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
              <Link
                href="/"
                className="text-black text-base font-normal leading-normal"
              >
                Cancel
              </Link>
              <button className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex text-neutral-50 text-base font-medium leading-normal hover:bg-red-600">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}