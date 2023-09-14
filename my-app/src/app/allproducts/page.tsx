
const page = () => {
    return (
        <div>




            <div className="flex flex-col items-start justify-start gap-[1.25rem] pt-20 pl-24">
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







            <div className=" grid grid-cols-4 gap-4 items-start justify-start gap-[1.88rem] p-20">




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
                            Gucci duffle bag
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[0.75rem] text-secondary-2">
                            <div className="relative leading-[1.5rem] font-medium">
                                $960
                            </div>
                        </div>
                    </div>
                </div>






            </div>








        </div>
    )
}

export default page