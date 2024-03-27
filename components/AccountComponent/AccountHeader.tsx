import { BiArrowBack } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import AccountLinkButton from "./Button/AccountLinkButton";
import { useAuth } from '@/components/Auth';

function AccountHeader () {
    const { logout } = useAuth(); 

    const handleLogout = async () => {
        logout();
        };


    return (
        <header className='p-4 bg-stone-300'>
            <ul className="flex flex-wrap gap-4 justify-center">
                <li>
                    <AccountLinkButton
                        bgColor='bg-sky-800'
                        href="/"
                        linkName="Retourner sur les Galopins"
                        logo={<BiArrowBack/>}
                        classname='md:hover:bg-sky-600'
                    />
                </li>
                <li>
                    <AccountLinkButton
                        bgColor='bg-sky-800'
                        href="/account"
                        linkName="Espace Administrateur"
                        logo={<BiArrowBack/>}
                        classname='md:hover:bg-sky-600'
                    />
                </li>
                <li>
                    <AccountLinkButton
                        onClick={handleLogout}
                        bgColor='bg-red-800'
                        href="/login"
                        linkName="Deconnexion"
                        logo={<CiLogout/>}
                        classname='md:hover:bg-red-600'
                    />
                </li>
            </ul>

        </header>
    )
}

export default AccountHeader;