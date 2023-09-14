"use client"
import Link from 'next/link';
import RootLayout from '@/app/layout';
const AdminDashboard = () => {
  return (
    <RootLayout role="admin">
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/admin/users">Users
              
            </Link>
          </li>
          <li>
            <Link href="/admin/products">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is a basic example of an admin dashboard.</p>
      </div>
    </div>
    </RootLayout>
  );
};

export default AdminDashboard;
