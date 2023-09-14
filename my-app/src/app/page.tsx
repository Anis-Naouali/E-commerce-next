'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState<data[]>([]);


useEffect(() => {
    axios
      .get("http://localhost:3000/api/product")
      .then((res) => {
        setdata(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err,"err");
      });
  }, []);

  console.log(data);


//   interface data {
//    images: { id: number; url: string; productId: number }[] & {
//     id: number,
//      title: string,
//      description: string,
//      category: string,
//      rating: number,
//      price: number,
//      num_reviews: number,
//   }[];
// }

const data1 = data.slice(0,8)
console.log(data1);
















  return (


    <main className="">
      <div className="relative bg-bg w-full h-[274.88rem] overflow-hidden text-left text-[1rem] text-text font-title-12px-medium">
        <div className="absolute top-[83.42rem] left-[8.42rem] box-border w-[73.16rem] h-[0.03rem] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
        <div className="absolute top-[112.36rem] left-[8.42rem] box-border w-[73.16rem] h-[0.03rem] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
        <div className="absolute top-[8.86rem] left-[22.98rem] box-border w-[0.03rem] h-[24.03rem] opacity-[0.3] border-r-[0.5px] border-solid border-text2" />
        <div className="absolute top-[6.38rem] left-[8.44rem] flex flex-col items-start justify-start gap-[1rem] text-center text-text2">

          <div className="relative leading-[1.5rem]">Ring</div>
          <div className="relative leading-[1.5rem]">Bracelet</div>
          <div className="relative leading-[1.5rem]">Necklace</div>
          <div className="relative leading-[1.5rem]">Earrings</div>

        </div>
        <div className="absolute top-[2.38rem] left-[20.81rem] bg-text2 w-[60.75rem] h-[21.5rem] overflow-hidden text-center text-text">
          <img
            className="absolute top-[1rem] left-[24.75rem] w-[35rem] h-[22rem] object-cover"
            alt=""
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55a98463374771.5d68ee0ebc90f.jpg"
          />
          <div className="absolute top-[3.63rem] left-[4rem] flex flex-row items-center justify-start gap-[1.5rem]">
            <img
              className="relative w-[2.5rem] h-[3.06rem] object-cover"
              alt=""
              src="https://previews.123rf.com/images/anatolymas/anatolymas1507/anatolymas150700010/43335631-a-beautiful-sparkling-diamond-on-a-light-reflective-surface-3d-image-isolated-white-background.jpg"
            />
            <div className="relative leading-[1.5rem] inline-block w-[9.88rem] h-[2.25rem] shrink-0">
              Exclusive jewellery
            </div>
          </div>
          <div className="absolute top-[7.94rem] left-[4rem] text-[3rem] tracking-[0.04em] leading-[3.75rem] font-semibold font-heading-24px-semibold text-left inline-block w-[18.38rem]">
            Up to 10% off Voucher
          </div>

          <div className="absolute top-[19.94rem] left-[22.06rem] flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="relative rounded-[50%] bg-bg w-[0.75rem] h-[0.75rem] opacity-[0.5]" />
            <div className="relative rounded-[50%] bg-bg w-[0.75rem] h-[0.75rem] opacity-[0.5]" />
            <img
              className="relative w-[0.88rem] h-[0.88rem] object-cover"
              alt=""
              src="/undefined5.png"
            />
            <div className="relative rounded-[50%] bg-bg w-[0.75rem] h-[0.75rem] opacity-[0.5]" />
            <div className="relative rounded-[50%] bg-bg w-[0.75rem] h-[0.75rem] opacity-[0.5]" />
          </div>
        </div>







        <div className="absolute top-[28.63rem] left-[8.44rem] flex flex-col items-start justify-start gap-[2.5rem]">
          <div className="flex flex-row items-end justify-start gap-[29.38rem]">
            <div className="flex flex-row items-end justify-start gap-[5.44rem]">
              <div className="h-[6.44rem] flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-center justify-start gap-[1rem]">
                  <div className="relative w-[1.25rem] h-[2.5rem]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
                  </div>
                  <div className="w-24 h-10 justify-start items-center gap-4 inline-flex">
                    <div className="w-5 h-10 relative">
                      <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                    </div>
                    <div className="text-red-500 text-base font-semibold leading-tight">Today’s</div>
                  </div>
                </div>
                <div className="relative text-[2.25rem] tracking-[0.04em] leading-[3rem] font-semibold font-heading-24px-semibold text-text2">
                  Flash Sales
                </div>
              </div>
              <div className="relative w-[18.88rem] h-[3.13rem] text-[0.75rem] text-text2">
                <div className="absolute h-full w-[15.23%] top-[0%] right-[84.77%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative leading-[1.13rem] font-medium inline-block w-[1.94rem]">
                    Days
                  </div>
                  <b className="relative text-[2rem] tracking-[0.04em] leading-[1.88rem] inline-block font-heading-24px-semibold w-[2.88rem] h-[1.75rem] shrink-0">
                    03
                  </b>
                </div>
                <div className="absolute h-full w-[13.91%] top-[0%] right-[58.28%] bottom-[0%] left-[27.81%] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative leading-[1.13rem] font-medium inline-block w-[2.19rem]">
                    Hours
                  </div>
                  <b className="relative text-[2rem] tracking-[0.04em] leading-[1.88rem] font-heading-24px-semibold">
                    23
                  </b>
                </div>
                <div className="absolute h-full w-[16.23%] top-[0%] right-[29.47%] bottom-[0%] left-[54.3%] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative leading-[1.13rem] font-medium inline-block w-[3.06rem]">
                    Minutes
                  </div>
                  <b className="relative text-[2rem] tracking-[0.04em] leading-[1.88rem] inline-block font-heading-24px-semibold w-[2.44rem] h-[1.75rem] shrink-0">
                    19
                  </b>
                </div>
                <div className="absolute h-full w-[16.89%] top-[0%] right-[0%] bottom-[0%] left-[83.11%] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative leading-[1.13rem] font-medium inline-block w-[3.25rem]">
                    Seconds
                  </div>
                  <b className="relative text-[2rem] tracking-[0.04em] leading-[1.88rem] font-heading-24px-semibold">
                    56
                  </b>
                </div>
                <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[77.81%] bottom-[16%] left-[20.86%] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="relative rounded-[50%] bg-hover-button w-[0.25rem] h-[0.25rem]" />
                  <div className="relative rounded-[50%] bg-hover-button w-[0.25rem] h-[0.25rem]" />
                </div>
                <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[51.32%] bottom-[16%] left-[47.35%] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="relative rounded-[50%] bg-hover-button w-[0.25rem] h-[0.25rem]" />
                  <div className="relative rounded-[50%] bg-hover-button w-[0.25rem] h-[0.25rem]" />
                </div>
                <div className="absolute h-[32%] w-[1.32%] top-[52%] right-[22.52%] bottom-[16%] left-[76.16%] flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="relative rounded-[50%] bg-hover-button w-[0.25rem] h-[0.25rem]" />
                  <div className="relative rounded-[50%] bg-hover-button w-[0.25rem] h-[0.25rem]" />
                </div>
              </div>
            </div>




            {/* <div className="flex flex-row items-start justify-start gap-[0.5rem]">
              <img
                className="relative w-[2.88rem] h-[2.88rem] object-cover"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
              />
              <img
                className="relative w-[2.88rem] h-[2.88rem] object-cover"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              />
            </div> */}
          </div>
          <div className="w-[81.75rem]  flex flex-row items-start justify-start gap-[1.88rem] text-[0.75rem] text-text">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] left-[0.75rem] rounded bg-button2 flex flex-row py-[0.25rem] px-[0.75rem] items-center justify-center">
                  <div className="w-14 h-5 px-3 py-1 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal leading-none">-40%</div>
                  </div>
                </div>

                <div className="absolute top-[calc(50%_-_70px)] left-[calc(50%_-_145px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://www.candere.com/media/jewellery/images/GR01988__1.jpeg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                  Emerging Royalty Ring                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $2400
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $4000
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (18)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] left-[0.75rem] rounded bg-button2 flex flex-row py-[0.25rem] px-[0.75rem] items-center justify-center">
                  <div className="w-14 h-5 px-3 py-1 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal leading-none">-20%</div>
                  </div>                </div>
                <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />

                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start gap-[0.5rem]">


                </div>
                <div className="absolute top-[calc(50%_-_70px)] left-[calc(50%_-_145px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://img.freepik.com/premium-photo/diamond-bracelet-white-background_81048-17013.jpg?w=2000"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                  Diamond bracelet
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $1000
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $750
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover opacity-[0.25]"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (11)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] left-[0.75rem] rounded bg-button2 flex flex-row py-[0.25rem] px-[0.75rem] items-center justify-center">
                  <div className="w-14 h-5 px-3 py-1 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal leading-none">-30%</div>
                  </div>                </div>
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start gap-[0.5rem]">

                </div>
                <div className="absolute top-[calc(50%_-_70px)] left-[calc(50%_-_155px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://sothebys-md.brightspotcdn.com/09/45/201f071e4fd6972e3a509b4ae228/ge2302-cnj5d-t1-01.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                  Diamonds Necklace
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $5600
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $8000
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (3)
                  </div>
                </div>
              </div>
            </div>









            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] left-[0.75rem] rounded bg-button2 flex flex-row py-[0.25rem] px-[0.75rem] items-center justify-center">
                  <div className="w-14 h-5 px-3 py-1 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-50 text-xs font-normal leading-none">-25%</div>
                  </div>                </div>
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start gap-[0.5rem]">

                </div>
                <div className="absolute top-[calc(50%_-_70px)] left-[calc(50%_-_145px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://img.freepik.com/premium-photo/golden-earrings-fashion-stylish-isolated-white-background_179493-497.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">Golden earrings fashion stylish</div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $600
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $800
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (17)
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>
        <div className="absolute top-[68.44rem] left-[8.44rem] flex flex-col items-center justify-start gap-[3.75rem]">
          <div className="flex flex-row items-end justify-start gap-[43.19rem]">
            <div className="flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="relative w-[1.25rem] h-[2.5rem]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
                </div>
                <div className="w-32 h-10 justify-start items-center gap-4 inline-flex">
                  <div className="w-5 h-10 relative">
                    <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                  </div>
                  <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
                </div>
              </div>
              <div className="relative text-[2.25rem] tracking-[0.04em] leading-[3rem] font-semibold font-heading-24px-semibold text-text2">
                Browse By Category
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.5rem]">
              <img
                className="relative w-[2.88rem] h-[2.88rem] object-cover"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/60/60775.png"
              />
              <img
                className="relative w-[2.88rem] h-[2.88rem] object-cover"
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.88rem] text-text2">
            <div className="relative rounded box-border w-[10.63rem] h-[9.06rem] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
              <div className="absolute bottom-0 left-0 right-0 text-center pb-[1.5rem]">
                Gold
              </div>
              <img
                className="absolute top-[1.56rem] left-[calc(50%_-_28px)] w-[3.5rem] h-[3.5rem] overflow-hidden object-cover"
                alt=""
                src="https://img.freepik.com/free-photo/yellow-wall-texture-with-scratches_1249-77.jpg?w=2000"
              />
            </div>
            <div className="relative rounded box-border w-[10.63rem] h-[9.06rem] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
              <div className="absolute bottom-0 left-0 right-0 text-center pb-[1.5rem]">
                Silver
              </div>
              <img
                className="absolute top-[1.56rem] left-[calc(50%_-_27px)] w-[3.5rem] h-[3.5rem] overflow-hidden object-cover"
                alt=""
                src="https://d1pra95f92lrn3.cloudfront.net/media/thumb/8253_fit512.jpg"
              />
            </div>

            <div className="relative rounded box-border w-[10.63rem] h-[9.06rem] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
              <div className="absolute bottom-0 left-0 right-0 text-center pb-[1.5rem]">
                Diamond
              </div>
              <img
                className="absolute top-[1.56rem] left-[calc(50%_-_27px)] w-[3.5rem] h-[3.5rem] overflow-hidden object-cover"
                alt=""
                src="https://st.depositphotos.com/1516544/4759/i/950/depositphotos_47594879-stock-photo-diamond-on-white-background-high.jpg"
              />
            </div>

            <div className="relative rounded box-border w-[10.63rem] h-[9.06rem] overflow-hidden shrink-0 border-[1px] border-solid border-gray-300">
              <div className="absolute bottom-0 left-0 right-0 text-center pb-[1.5rem] ">
                Pearls
              </div>
              <img
                className="absolute top-[1.56rem] left-[calc(50%_-_28px)] w-[3.5rem] h-[3.5rem] overflow-hidden object-cover"
                alt=""
                src="https://www.mygemologist.com/wp-content/uploads/2013/07/singile-white-round-pearl.jpg"
              />
            </div>

          </div>
        </div>
        <div className="absolute top-[96.75rem] left-[8.44rem] flex flex-col items-start justify-start gap-[3.75rem]">
          <div className="flex flex-row items-end justify-start gap-[38.19rem]">
            <div className="flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="relative w-[1.25rem] h-[2.5rem]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
                </div>
                <div className="w-32 h-10 justify-start items-center gap-4 inline-flex">
                  <div className="w-5 h-10 relative">
                    <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                  </div>
                  <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">This Month</div>
                </div>
              </div>
              <div className="relative text-[2.25rem] tracking-[0.04em] leading-[3rem] font-semibold font-heading-24px-semibold text-text2">
                Best Selling Products
              </div>
            </div>

          </div>
          <div className="flex flex-row items-start justify-start gap-[1.88rem] text-text2">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start gap-[0.5rem]">

                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_145px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://muchmore.co.in/pub/media/catalog/product/cache/77256aaac947d94e5c0b30b852b005f6/b/r/br-924_1_copy_eye_design_sapphire_blue_silver_polish_diamond_bracelet.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-medium">
                  Diamond Bracelet
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $2200
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $2400
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (61)
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start gap-[0.5rem]">

                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_145px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcbc20efb/images/hi-res/513018BTSAA00.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-medium">
                  Dual Toned Gold Bracelet                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $960
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $1160
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (82)
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start gap-[0.5rem]">

                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_145px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://www.chamathkajewellers.lk/wp-content/uploads/2022/09/6.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-medium">
                  Blue sapphire necklace
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.75rem] text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $1620
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[1.5rem] font-medium text-text2 opacity-[0.5]">
                    $1700
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (75)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute top-[0.75rem] right-[0.75rem] flex flex-col items-start justify-start gap-[0.5rem]">

                </div>
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_145px)] w-[11.88rem] h-[11.25rem] overflow-hidden">
                  <img
                    className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                    alt=""
                    src="https://zeverat.pk/tpl_assets/2023/03/Silver-jhumki.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-medium">
                  Silver Earring                </div>
                <div className="flex flex-row items-start justify-start text-button2">
                  <div className="relative leading-[1.5rem] font-medium">
                    $160
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem] text-[0.88rem]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                    <img
                      className="relative rounded-11xs-4 w-[1.25rem] h-[1.25rem] object-cover"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2048px-Gold_Star.svg.png"
                    />
                  </div>
                  <div className="relative leading-[1.31rem] font-semibold inline-block w-[2rem] h-[1.25rem] shrink-0 opacity-[0.5]">
                    (94)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="absolute top-[133.56rem] left-[8.44rem] flex flex-col items-center justify-start gap-[3.75rem]">
          <div className="flex flex-col items-center justify-start gap-[3.75rem]">
            <div className="flex flex-row items-end justify-start gap-[42rem]">
              <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                <div className="flex flex-row items-center justify-start gap-[1rem]">
                  <div className="relative w-[1.25rem] h-[2.5rem]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
                  </div>
                  <div className="w-36 h-10 justify-start items-center gap-4 inline-flex">
                    <div className="w-5 h-10 relative">
                      <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                    </div>
                    <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Our Products</div>
                  </div>
                </div>
                <div className="relative text-[2.25rem] tracking-[0.04em] leading-[3rem] font-semibold font-heading-24px-semibold text-text2">
                  Explore Our Products
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                <img
                  className="relative w-[2.88rem] h-[2.88rem] object-cover"
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                />
                <img
                  className="relative w-[2.88rem] h-[2.88rem] object-cover"
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                />
              </div>
            </div>




            <div className="flex flex-col items-start justify-start gap-[3.75rem] text-text2">



              <div className=" grid grid-cols-4 gap-4 items-start justify-start gap-[1.88rem]">

              {data1.map((e, i) => {
        return (
          <div className="flex flex-col items-center justify-center gap-[1rem] text-text">
                  <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                    <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />


                    <div className="absolute top-[0.94rem] left-[2.5rem] w-[11.88rem] h-[11.25rem] overflow-hidden">
                      <img
                        className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                        alt=""
                        src={e.images[0].url}
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
                      {e.title}
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[0.75rem] text-secondary-2">
                      <div className="relative leading-[1.5rem] font-medium">
                        {e.price}$
                      </div>
                    </div>
                  </div>
                </div>
        );
      })}



              </div>





              <div className="flex flex-row items-start justify-start gap-[1.88rem]">




























































              </div>
            </div>
          </div>
          <div className="rounded bg-button2 flex flex-row py-[1rem] px-[3rem] items-center justify-center text-text">
            <button className="w-60 h-14 px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All Products</div>
            </button>
          </div>
        </div>






        <div className="absolute top-[200.81rem] left-[8.44rem] flex flex-col items-start justify-start gap-[3.75rem]">
          <div className="flex flex-col items-start justify-start gap-[1.25rem]">
            <div className="flex flex-row items-center justify-start gap-[1rem]">
              <div className="relative w-[1.25rem] h-[2.5rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
              </div>
              <div className="w-28 h-10 justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 relative">
                  <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                </div>
                <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Featured</div>
              </div>
            </div>
            <div className="relative text-[2.25rem] tracking-[0.04em] leading-[3rem] font-semibold font-heading-24px-semibold text-text2">
              New Arrival
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.88rem] text-[1.5rem] text-text font-heading-24px-semibold">
            <div className="relative rounded bg-text2 w-[35.63rem] h-[37.5rem] overflow-hidden shrink-0">
              <img
                className="absolute left-[1.81rem] w-[31.94rem] h-[37.41rem] object-cover"
                alt=""
                src="https://i0.wp.com/www.elf925.com/blog/wp-content/uploads/AdobeStock_270733509-scaled.jpeg?fit=2560%2C1707&ssl=1"
              />

            </div>
            <div className="flex flex-col items-center justify-start gap-[2rem]">
              <div className="relative rounded bg-stone-950 w-[35.63rem] h-[17.75rem] overflow-hidden shrink-0">
                <img
                  className="absolute top-[0rem] left-[0rem] w-[35.63rem] h-[20.75rem] object-cover"
                  alt=""
                  src="https://www.bizzbuzz.news/h-upload/2022/09/24/1596109-png-jewellers.webp"
                />

              </div>
              <div className="flex flex-row items-center justify-center gap-[1.88rem]">
                <div className="relative rounded bg-text2 w-[16.88rem] h-[17.75rem] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[16.88rem] h-[17.75rem] object-cover"
                    alt=""
                    src="https://www.marthajackson.co.uk/content/uploads/2022/11/MS1235RG-ROSE-GOLD-PLATED-SILVER-BREEZE-STUDS_1-740x740.jpg"
                  />


                </div>
                <div className="relative rounded bg-text2 w-[16.88rem] h-[17.75rem] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[16.88rem] h-[17.75rem] object-cover"
                    alt=""
                    src="https://img.freepik.com/premium-photo/sea-collection-grey-marble-background-seashell-motherofpearl-earrings-summer-jewelry-metal-chain-motherofpearl-shells_653979-3839.jpg"
                  />


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[255.56rem] left-[15.56rem] flex flex-row items-center justify-center gap-[5.5rem] text-[1.25rem] text-text2">
          <div className="flex flex-col items-center justify-start gap-[1.5rem]">
            <img
              className="relative w-[rem] h-[5rem] object-cover"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/4947/4947265.png"
            />
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="relative leading-[1.75rem] font-semibold">
                FREE AND FAST DELIVERY
              </div>
              <div className="relative text-[0.88rem] leading-[1.31rem] text-center">
                Free delivery for all orders over $1000
              </div>
            </div>
          </div>
          <div className="w-[16.38rem] flex flex-col items-center justify-start gap-[1.5rem]">
            <img
              className="relative w-[5rem] h-[5rem] object-cover"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3930/3930266.png"
            />
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="relative leading-[1.75rem] font-semibold">
                24/7 CUSTOMER SERVICE
              </div>
              <div className="relative text-[0.88rem] leading-[1.31rem]">
                Friendly 24/7 customer support
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[1.5rem]">
            <img
              className="relative w-[5rem] h-[5rem] object-cover"
              alt=""
              src="https://thumbs.dreamstime.com/b/days-money-back-guarantee-icon-vector-graphic-design-logo-website-social-media-mobile-app-ui-illustration-days-money-back-253780876.jpg"
            />
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="relative leading-[1.75rem] font-semibold">
                MONEY BACK GUARANTEE
              </div>
              <div className="relative text-[0.88rem] leading-[1.31rem]">
                We return money within 30 days
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-center justify-start gap-[1.5rem]">
            <img
              className="relative w-[5rem] h-[5rem] object-cover"
              alt=""
              src="/undefined183.png"
            />
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="relative leading-[1.75rem] font-semibold">
                MONEY BACK GUARANTEE
              </div>
              <div className="relative text-[0.88rem] leading-[1.31rem]">
                We reurn money within 30 days
              </div>
            </div>
          </div>
        </div>
      </div>



    </main>

  )
}
