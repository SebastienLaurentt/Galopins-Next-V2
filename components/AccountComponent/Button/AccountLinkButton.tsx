import  Link  from "next/link";

interface AccountLinkButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    bgColor:string;
    href:string;
    linkName:string;
    logo: React.ReactNode;
    classname?:string;
}

function AccountLinkButton ({onClick,  bgColor, href, linkName, logo, classname }: AccountLinkButtonProps) {
    return(
        <button
        onClick={onClick}>
            <Link
                className={`flex p-3 rounded-lg md:text-md 2xl:text-xl  ${classname} ${bgColor}`}
                href={href}
                target='_blank' 
            >
                <div className='flex gap-x-1 items-center'>
                    {linkName}
                    <span className="text-md md:text-md 2xl:text-xl">{logo}</span>
                </div>
            </Link>
        </button>

        )
}

export default AccountLinkButton;