'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';

const cart: React.FC = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState("");
  const [cartData, setCartData] = useState<any[]>([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/cart");
        if (response.data.success) {
          setCartData(response.data.cartItems);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("An error occurred while fetching the cart data");
      }
    };

    fetchCartData();
  }, []);
  const handleCheckoutClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, checkout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the checkout process here (e.g., make an API request)
        
        // After successful checkout, empty the cart
        setCartData([]);
        
        Swal.fire(
          'Checked Out!',
          'Your cart has been emptied.',
          'success'
        );
      }
    });
  };
  const calculateSubtotal = (item: any) => {
    const quantity = item.quantity;
    const price = parseFloat(item.product.price.replace("$", ""));
    return (quantity * price).toFixed(2);
  };
  return (
    <div className="flex flex-col items-center justify-start gap-[1.5rem] mb-20 mt-20">
      <div className="absolute top-[13.88rem] left-[8.44rem] flex flex-row items-center justify-start gap-[0.75rem]">
        <div className="relative leading-[1.31rem] opacity-[0.5]">Home</div>
        <img
          className="relative w-[0.43rem] h-[0.76rem]"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Draw-1-black-line.svg/1200px-Draw-1-black-line.svg.png"
        />
        <div className="relative leading-[1.31rem]">Cart</div>
      </div>

      <div className="flex flex-col items-start justify-start gap-[2.5rem]">
        <div className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[73.13rem] h-[4.5rem] overflow-hidden shrink-0">
          <div className="absolute top-[1.5rem] left-[2.5rem] flex flex-row items-center justify-start gap-[17.75rem]">
            <div className="relative leading-[1.5rem]">Product</div>
            <div className="relative leading-[1.5rem]">Price</div>
            <div className="relative leading-[1.5rem]">Quantity</div>
            <div className="relative leading-[1.5rem]">Subtotal</div>
          </div>
        </div>
        
        {cartData.map((item) => (
          <div
            key={item.id}
            className="relative rounded bg-bg shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] w-[73.13rem] h-[6.38rem] overflow-hidden shrink-0"
          >
            <div className="absolute top-[2.44rem] left-[24.19rem] leading-[1.5rem]">
              {item.product.price}
            </div>
            <div className="absolute top-[2.44rem] left-[66.44rem] leading-[1.5rem]">
              {item.quantity}
            </div>
            <div className="absolute top-[1.72rem] left-[44.28rem] rounded box-border w-[4.69rem] h-[2.94rem] overflow-hidden border-[1.5px] border-solid border-gray-200">
              <div className="absolute top-[0.38rem] left-[0.75rem] w-[3rem] flex flex-row items-center justify-start gap-[1rem]">
                <div className="relative leading-[1.5rem]">{item.quantity}</div>
                <div className="flex flex-col items-start justify-start">
                </div>
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_545px)] w-[3.38rem] h-[3.38rem] overflow-hidden">
              <img
                className="absolute h-[72.22%] w-[92.59%] top-[14.81%] right-[3.7%] bottom-[12.96%] left-[3.7%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src={item.product.image_url}
              />
            </div>
            <div className="absolute top-[2.44rem] left-[7.13rem] leading-[1.5rem]">
              {item.product.title}
            </div>
            <img
              className="absolute top-[1.25rem] left-[1.88rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="https://cdn.iconscout.com/icon/free/png-256/free-delete-4095676-3389247.png?f=webp"
            />
          </div>
        ))}
      </div>
      <div className="items-start gap-[757px] inline-flex relative">
      <button className="w-50 h-14 px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 inline-flex" onClick={() => router.push('/')}>
      <div className="text-black text-base font-medium leading-normal">
        Return to shop
      </div>
    </button>
        <button className="w-50 h-14 px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 inline-flex">
          <div className="text-black text-base font-medium leading-normal">
            Update Cart
          </div>
        </button>
      </div>

      <div className="flex flex-row items-start justify-start gap-[10.81rem]">
        <div className="flex flex-row items-end justify-start gap-[1rem]">
          <div className="relative rounded box-border w-[18.75rem] h-[3.5rem] overflow-hidden shrink-0 border-[1px] border-solid border-text2">
            <div className="absolute top-[calc(50%_-_12px)] left-[1.5rem] leading-[1.5rem] opacity-[0.5]">
              Coupon Code
            </div>
          </div>
          <div className="w-52 h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-base font-medium leading-normal">
              Apply Coupon
            </div>
          </div>
        </div>
        <div className="relative rounded box-border w-[29.38rem] h-[20.25rem] overflow-hidden shrink-0 border-[1.5px] border-solid border-text2">
          <div className="absolute top-[2rem] left-[1.5rem] text-[1.25rem] leading-[1.75rem] font-medium">
            Cart Total
          </div>
          <div className="absolute top-[5.25rem] left-[1.5rem] flex flex-row items-start justify-start gap-[19.19rem]">
            <div className="relative leading-[1.5rem]">Subtotal:</div>
            <div className="relative leading-[1.5rem]">$1750</div>
          </div>
          <div className="absolute top-[8.75rem] left-[1.5rem] flex flex-row items-start justify-start gap-[19.63rem]">
            <div className="relative leading-[1.5rem]">Shipping:</div>
            <div className="relative leading-[1.5rem]">Free</div>
          </div>
          <div className="absolute top-[12.25rem] left-[1.5rem] flex flex-row items-start justify-start gap-[20.94rem]">
            <div className="relative leading-[1.5rem]">Total:</div>
            <div className="relative leading-[1.5rem]">$1750</div>
          </div>
          <button className="absolute top-[14.75rem] left-[5.56rem] rounded bg-button2 flex flex-row py-[1rem] px-[3rem] items-center justify-center text-text" onClick={handleCheckoutClick}>
            <div className="w-64 h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-50 text-base font-medium leading-normal">
                Procees to checkout
              </div>
            </div>
          </button>
          <img
            className="absolute top-[7.69rem] left-[1.5rem] w-[26.38rem] h-[0.06rem] opacity-[0.4]"
            alt=""
            src="/underline.svg"
          />
          <img
            className="absolute top-[11.19rem] left-[1.5rem] w-[26.38rem] h-[0.06rem] opacity-[0.4]"
            alt=""
            src="/underline1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default cart;
