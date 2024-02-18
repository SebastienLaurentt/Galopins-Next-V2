interface PhotoIconProps {
  children:React.ReactNode;
  number:string;
  description: string;
}

function PhotoIcon ({children, number, description }: PhotoIconProps) {
  return (
      <div className='flex flex-col items-center text-center gap-y-2 p-4'>
          {children}
          <div className="flex flex-col">
              <span className='font-bold'>{number}</span>
              <span>{description}</span>
          </div>

      </div>
  )
}

export default PhotoIcon;
