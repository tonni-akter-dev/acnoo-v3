import React from 'react'
type IProps={
   title:string
}
const Title:React.FC<IProps> = ({title}) => {
   return (
      <>
         <h2 className='text-primary text-lg font-bold'>  <span className="border-l-2 border-blue-500 h-4 mr-2"></span> {title}</h2>
      </>
   )
}

export default Title