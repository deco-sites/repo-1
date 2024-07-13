import Icon from "site/components/ui/Icon.tsx"
type Props = {
    username? : string
}
export default function Navbar({username} : Props ){
    return(
        <div class="fixed -translate-y-1/2 right-0 top-1/2 z-50">
            <nav>
                <ul class="flex flex-col gap-3 group bg-violet-50 rounded-full hover:rounded-lg px-2 py-4 hover:pr-6 "> 
                    <li class="flex gap-2">
                        <div class="icon">
                            <Icon id="lucide-house" width={"24"} height={"24"}/>
                        </div>
                        <div class="text hidden group-hover:block">Home</div>
                    </li>
                    <li class="flex gap-2">
                        <div class="icon">
                            <Icon id="lucide-users" width={"24"} height={"24"}/>
                        </div>
                        <div class="text hidden group-hover:block">Cateogries</div>
                    </li>
                    <li class="flex gap-2">
                        <div class="icon">
                            <Icon id="lucide-shopping-cart" width={"24"} height={"24"}/>
                        </div>
                        <div class="text hidden group-hover:block">Cart</div>
                    </li>
                    <li class="flex gap-2">
                        <div class="icon">
                            <Icon id="lucide-users" width={"24"} height={"24"}/>
                        </div>
                        <div class="text hidden group-hover:block">About Us</div>
                    </li>
                    <li class="flex gap-2">
                        <div class="icon">
                            <Icon id="lucide-contact" width={"24"} height={"24"}/>
                        </div>
                        <div class="text hidden group-hover:block">Contact Us</div>
                    </li>
                    <li class="flex gap-2 mt-12">
                        <div class="icon">
                            <Icon id="lucide-user-detail" width={"24"} height={"24"}/>
                        </div>
                        <div class="text hidden group-hover:block">{username || "User"}</div>
                    </li>
                    <li class="flex gap-2">
                        <div class="icon">
                            <Icon id="lucide-log-out" width={"24"} height={"24"}/>
                        </div>
                        <div class="text hidden group-hover:block">Logout</div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}