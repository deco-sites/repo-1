import Icon from "site/components/ui/Icon.tsx"

export type HeaderProps = {
    title? : string,

}

export default function Header({title = "StoreFront"}: HeaderProps){
    return (
        <div class="flex justify-between py-4 md:mx-14 mx-3">
            <h1 class="font-bold text-3xl"><a href="/">{title}.</a></h1>
            <Icon id="ShoppingBag" width="24" height="24"/> 
        </div>
    )
}