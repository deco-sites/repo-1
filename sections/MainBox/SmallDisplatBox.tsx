export type Props = {
    title_1? : string,
    title_2? : string,
    title_3? : string,
    image_1? : string,
    image_2? : string,
    image_3? : string,

}


export default function SmallDisplayBox({title_1, title_2, title_3,
 image_1 ="https://cpmnkgrfpshwpkkhwzpu.supabase.co/storage/v1/object/public/hackathon/pillow_sofa_decoration_luxury_livingroom_interior_1339_4974.jpg?t=2024-07-13T12%3A43%3A05.097Z",
 image_2 ="https://cpmnkgrfpshwpkkhwzpu.supabase.co/storage/v1/object/public/hackathon/decor.jpg?t=2024-07-13T12%3A43%3A27.420Z",
 image_3 = "https://cpmnkgrfpshwpkkhwzpu.supabase.co/storage/v1/object/public/hackathon/poster.jpg?t=2024-07-13T12%3A43%3A42.033Z"
} : Props){
    return (
        <div class="flex flex-col md:flex-row mx-3 md:mx-14 justify-between my-5 gap-4">
            <div class={` bg-cover  flex justify-center items-center flex-col gap-3 text-center w-full p-24 `} style={{backgroundImage: `url('${image_1}')`}}>
                <h4 class="text-3xl text-white font-black filter-none">{title_1 || "Furniture"}</h4>
                <div>
                    <p class="text-white text-xl text-bold">Shop Now  {`->`}</p>
                </div>
            </div>
            <div class={` bg-cover  flex justify-center items-center flex-col gap-3 text-center w-full p-24 `} style={{backgroundImage: `url('${image_2}')`}}>
                <h4 class="text-3xl text-white font-black">{title_2 || "Decorations"}</h4>
                <div>
                    <p class="text-white text-xl text-bold">Shop Now  {`->`}</p>
                </div>
            </div>
            <div class={` bg-cover  flex justify-center items-center flex-col gap-3 text-center w-full p-24 `} style={{backgroundImage: `url('${image_3}')`}}>
                <h4 class="text-3xl text-white font-black">{title_3 || "Posters"}</h4>
                <div>
                    <p class="text-white text-xl text-bold">Shop Now  {`->`}</p>
                </div>
            </div>
        </div>
    )
}