import Link from "next/link";

export default function Account() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">

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
          <div className="left-[80px] top-[40px] absolute text-red-500 text-xl font-medium leading-7">
            Edit Your Profile
          </div>
          <div className="left-[80px] top-[84px] absolute justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black text-base font-normal leading-normal">
                First Name
              </p>
              <input
                placeholder="Your First Name"
                className="pl-4 w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <p className="text-black text-base font-normal leading-normal">
                Last Name
              </p>
              <input
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
                placeholder="Current Password"
                type="password"
                className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
              />
            </div>
            <input
              placeholder="New Password"
              type="password"
              className="pl-4 w-[690px] h-12 left-0 top-0 relative bg-neutral-100 rounded"
            />
            <input
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
        </div>
      </div>

    </main>
  );
}