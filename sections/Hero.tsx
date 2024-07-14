import Icon from "site/components/ui/Icon.tsx";

interface Props {
  /**
  * @title Headline
  * 
  */
  headline?: string;
  /**
  * @title Sub Headline
  * 
  */
    subheadline?: string;
 /**
  * @title Sub Headline 2
  * 
  */
    subheadline2?: string;

 /** 
  * @title Button Text
  *
  */
  buttonText?: string;

}


export default function Section({
    subheadline = "Master Your Skills with CodeMentor",
    headline = "Join a thriving community of software enthusiasts",
    subheadline2 = "Accelerate your learning journey",
    buttonText = "Start Learning Today"
}: Props) {
  return (
        <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <p class="text-base font-semibold tracking-wider text-blue-600 uppercase"> {subheadline}</p>
                        <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">{headline}</h1>
                        <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">{subheadline2}</p>

                        <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                            {buttonText}
                            <Icon id="arrow-right" class="ml-8 -m-r-2 w-6 h-6"/>
                        </a>

                        <p class="mt-5 text-gray-600">Already have an account? <a href="#" title="" class="text-black transition-all duration-200 hover:underline">Log in</a></p>
                    </div>

                    <div>
                        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
  )
}