interface Props {
  title?: string,
  subtext?: string,
  buttonText?: string,
  buttonText2?: string,
  comment?: string,
  username?: string,
  position?: string,
}

export default function Section({ 
    title = "Level up your coding skills with CodeMentor",
    subtext = "Get personalized guidance from experienced mentors and accelerate your coding skills.",
    buttonText = "Start Your Coding Journey",
    buttonText2 = "Connect with a Mentor",
    comment = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, deserunt quo officia vitae architecto alias saepe voluptate voluptatum animi ut? Doloremque nobis unde iure iusto, et perferendis atque blanditiis magnam.",
    username = "Sofia Shane",
    position = "Project Manager at Atlasian"
 }: Props) {
  return (

    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
                <img class="object-cover w-16 h-16 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/9/female-avatar-1.png" alt="" />
                <blockquote>
                    <p class="mt-6 text-xl leading-relaxed text-black">{comment}</p>
                </blockquote>
                <p class="mt-6 text-base font-semibold text-black">{username}</p>
                <p class="mt-1 text-base text-gray-600">{position}</p>
            </div>

            <div>
                <div class="overflow-hidden bg-white">
                    <div class="p-8 lg:px-12 lg:py-10">
                        <h3 class="text-2xl font-semibold text-black">{title}</h3>
                        <p class="mt-4 text-base text-gray-600">{subtext}</p>

                        <a href="#" title="" class="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                            {buttonText}
                        </a>

                        <a href="#" title="" class="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white" role="button">
                            {buttonText2}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}