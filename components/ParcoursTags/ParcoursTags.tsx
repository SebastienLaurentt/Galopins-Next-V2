interface ParcoursTagsProps {
  tagName:string;
  classname?:string;
}


function ParcoursTags ({tagName, classname }: ParcoursTagsProps) {

  return(
          <span className={`p-2 xl:p-4 rounded-lg inline text-black font-bold ${classname}`}>
              {tagName}
          </span>
      )
}


export default ParcoursTags;