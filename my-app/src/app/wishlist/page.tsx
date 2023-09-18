'use client'



import React,{useEffect, useState} from "react";

const Wishlist = () => {



  return (

    <div className="relative bg-bg w-full h-[75.63rem] overflow-hidden text-left text-[0.88rem] text-text2 font-title-20px-regular">
      <div className="absolute top-[5.88rem]  left-1/2 transform -translate-x-1/2 flex flex-col items-start justify-start gap-[5rem] text-center text-[1.25rem]">
        <div className="flex flex-col items-start justify-start gap-[3.75rem]">
          <div className="flex flex-row items-center justify-start gap-[52.19rem]">
            <div className="text-center text-black text-xl font-normal leading-relaxed">Wishlist</div>
            <button className="w-56 h-14 px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">Move All To Bag</div>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4 items-start justify-start gap-[1.88rem] text-left text-[0.75rem] text-bg">

    
                <div className="flex flex-col items-center justify-center gap-[1rem] text-text">
                  <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                    <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />
                    <div className="absolute top-[0.94rem] left-[2.5rem] w-[11.88rem] h-[11.25rem] overflow-hidden">
                      <img
                        className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                        alt=""
                        src=""
                      />
                    </div>
                    <div className=" absolute top-[calc(50%_+_92px)] left-[calc(50%_-_51.5px)] w-35 flex flex-row items-center justify-start gap-[0.5rem] text-bg">
                      <button className="bg-black text-white font-bold  justify-center py-1 px-3 rounded">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[0.5rem] text-[1rem] text-text2">
                    <div className="relative leading-[1.5rem] font-medium">
                      title
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0.75rem] text-secondary-2">
                      <div className="relative leading-[1.5rem] font-medium">
$$$                      </div>
                    </div>
                  </div>
                </div>
              
          </div>
        </div>




























        <div className="relativeflex flex-col items-start justify-start gap-[3.75rem]">
          <div className="flex flex-row items-center justify-start gap-[54rem]">
            <div className="flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-5 h-10 relative">
                <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
              </div>
              <div className="text-center text-black text-xl font-normal leading-relaxed">Just For You</div>
            </div>
            <div className="rounded flex flex-row py-[1rem] px-[3rem] items-center justify-center text-left text-[1rem] border-[1px] border-solid border-black">
              <div className="text-black text-base font-medium leading-normal">
                See All
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.88rem] text-left text-[0.75rem] text-text">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start">

                </div>

                <div className="absolute top-[13.63rem] left-[5.31rem] flex flex-row items-center justify-start gap-[0.5rem] text-bg">

                  <button className="bg-black text-white font-bold py-2 px-4 rounded">
                    Add to cart
                  </button>                </div>
                <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_95px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://www.akunapearls.com.au/cdn/shop/products/image_f10e2728-7f62-46a2-8079-b2f371ee6ac6_1200x.jpg?v=1651655738"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                  Classic Freshwater Pearl Necklace
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-secondary-2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $2960
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $4160
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (42)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem] text-bg">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start">

                </div>
                <div className="absolute top-[13.63rem] left-[5.31rem] flex flex-row items-center justify-start gap-[0.5rem]">

                  <button className="bg-black text-white font-bold py-2 px-4 rounded">
                    Add to cart
                  </button>                </div>
                <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_95px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://www.jewelegance.com/cdn/shop/products/JGS-2106-01262.jpg?v=1675710253"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                  22k Plain Gold Earrings
                </div>
                <div className="flex flex-row items-start justify-start text-secondary-2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $1860
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (35)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start">

                </div>

                <div className="absolute top-[13.63rem] left-[5.31rem] flex flex-row items-center justify-start gap-[0.5rem] text-bg">

                  <button className="bg-black text-white font-bold py-2 px-4 rounded">
                    Add to cart
                  </button>                </div>
                <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_95px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://www.whpjewellers.in/images/products/DBR002835.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                  Diamond Bracelet                </div>
                <div className="flex flex-row items-start justify-start text-secondary-2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $2560
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem] text-bg">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start">

                </div>
                <div className="absolute top-[13.63rem] left-[5.31rem] flex flex-row items-center justify-start gap-[0.5rem]">

                  <button className="bg-black text-white font-bold py-2 px-4 rounded">
                    Add to cart
                  </button>                </div>
                <div className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_95px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://5.imimg.com/data5/SELLER/Default/2021/12/DV/DC/RU/999893/new-product.jpeg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                  Bridal Wear Diamond Necklace                 </div>
                <div className="flex flex-row items-start justify-start text-secondary-2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $22650
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1005px-Star_full.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (7)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist