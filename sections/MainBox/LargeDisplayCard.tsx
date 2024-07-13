export type Props ={
    heading? : string,
    subheading? : string,
    buttontext?: string,
    bgimage?: string
}

export default function LargeDisplayCard({heading, 
    subheading, 
    buttontext,
    bgimage = "https://cpmnkgrfpshwpkkhwzpu.supabase.co/storage/v1/object/public/hackathon/bg_img.png"
} : Props){
 
        return ( 
            <div class=" mx-3 md:mx-14 my-3  md:px-0 ">
                <div class={` bg-cover w-full h-[550px] flex justify-center items-center flex-col gap-3 text-center`} style={{backgroundImage: `url('${bgimage}')`}}>
                <h2 class="text-3xl text-white font-black">{heading || "Tansform your Space with Stylish Furniture and Decor"}</h2>
                <h4 class="text-lg text-white">{subheading || "Discover unique  pieces to elevate every room in your home."}</h4>
                <button class="text-bold text-xl text-white bg-black mt-10 px-5 py-3">{buttontext || "Shop Now"}</button>
                </div>
            </div>
        )
}