import Link from "next/link"

export const Footer = () => {



  return (
    <footer className='bottom-0 border-t border-t-accent '>
      <div className="flex items-center px-6 py-4 justify-between bg-green-600">
        <span>
          2024 - Les Galopins
        </span>
        <span>
          <Link href="/mentions"> Mentions légales </Link>
        </span>
      </div>
    </footer>
  )
}
