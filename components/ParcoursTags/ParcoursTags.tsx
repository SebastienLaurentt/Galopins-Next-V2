interface ParcoursTagsProps {
  tagName:string;
  classname?:string;
}


function ParcoursTags ({tagName, classname }: ParcoursTagsProps) {

  return(
          <span className={`p-2 rounded-md w-min-20 text-black font-bold ${classname}`}>
              {tagName}
          </span>
      )
}


export default ParcoursTags;