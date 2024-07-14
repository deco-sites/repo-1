import Icon from "site/components/ui/Icon.tsx";

interface Props {
  /**
  * @title Heading
  */
  heading?: string;

 /** 
  * @title comment text
  */
  comment1?: string;

    /** 
  * @title comment text
  */
 comment2?: string;

   /** 
  * @title comment text
  */
  comment3?: string;
}



export default function Testimonial({
    heading = "What our members say about us",
    comment1 = "Joining CodeMentor was the best decision I made for my career. The courses are comprehensive, and the community support is invaluable.",
    comment2 = "The mentors and peers at CodeMentor helped me transition from a beginner to landing my dream job in tech. I'm grateful for the guidance and resources.",
    comment3 = "The interactive learning modules made complex concepts easy to grasp. I enjoyed the hands-on approach and personalized feedback from instructors.",
}: Props){
    return (
        <div class="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="flex flex-col items-center">
                    <div class="text-center">
                        <h2 class="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">{heading}</h2>
                    </div>

                    <div class="mt-8 text-center md:mt-16 md:order-3">
                        <a href="#" title="" class="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check out all reviews </a>
                    </div>

                    <div class="relative mt-10 md:mt-24 md:order-2">
                        <div class="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div class="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"></div>
                        </div>

                        <div class="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            <div class="flex flex-col overflow-hidden shadow-xl">
                                <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div class="flex-1">
                                        <div class="flex items-center">
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                        </div>

                                        <blockquote class="flex-1 mt-8">
                                            <p class="text-lg leading-relaxed text-gray-900 font-pj">“{comment1}”</p>
                                        </blockquote>
                                    </div>

                                    <div class="flex items-center mt-8">
                                        <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                        <div class="ml-4">
                                            <p class="text-base font-bold text-gray-900 font-pj">John Doe</p>
                                            <p class="mt-0.5 text-sm font-pj text-gray-600">Frontend Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col overflow-hidden shadow-xl">
                                <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div class="flex-1">
                                        <div class="flex items-center">
                                        <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                        </div>

                                        <blockquote class="flex-1 mt-8">
                                            <p class="text-lg leading-relaxed text-gray-900 font-pj">“{comment2}”</p>
                                        </blockquote>
                                    </div>

                                    <div class="flex items-center mt-8">
                                        <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                                        <div class="ml-4">
                                            <p class="text-base font-bold text-gray-900 font-pj">Jane Smith</p>
                                            <p class="mt-0.5 text-sm font-pj text-gray-600">Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col overflow-hidden shadow-xl">
                                <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div class="flex-1">
                                        <div class="flex items-center">
                                        <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                            <Icon id="star" class="w-5 h-5 text-[#FDB241]"/>
                                        </div>

                                        <blockquote class="flex-1 mt-8">
                                            <p class="text-lg leading-relaxed text-gray-900 font-pj">“{comment3}”</p>
                                        </blockquote>
                                    </div>

                                    <div class="flex items-center mt-8">
                                        <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                                        <div class="ml-4">
                                            <p class="text-base font-bold text-gray-900 font-pj">Alexa Johnson</p>
                                            <p class="mt-0.5 text-sm font-pj text-gray-600">Backend Developer</p>
                                        </div>
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