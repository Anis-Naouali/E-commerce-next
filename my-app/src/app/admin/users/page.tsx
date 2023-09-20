'use client'
import RootLayout from '@/app/layout';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";

interface User {
  id: number;
  name: string;
  LastName: string;
  email: string;
  role: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:3000/api/users") 
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  return (
    <RootLayout role="admin" >

    <div className="px-4 py-8">
    <button className=' mt-20 bg-black text-white font-bold top-[calc(50%_+_92px)] left-[calc(50%_-_51.5px)] w-40 rounded py-2 ml-10'>
        <Link href="/admin/dash">Dashboard</Link>
        </button>
      <Typography variant="h2" gutterBottom>
        User List
      </Typography>
      {users.map((user) => (
        <div key={user.id} className="mb-4">
          <Card className="border shadow-lg">
            <CardContent>
              <Typography variant="h4" component="div" className="text-xl font-bold">
                {user.name}
              </Typography>
              <Typography variant="h4" component="div" className="text-xl font-bold">
                {user.LastName}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="text-gray-600">
                Email: {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="text-gray-600">
                Role: {user.role}
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
    </RootLayout>
  );
};

export default UserList;
