import React from 'react'

const CustomTextArea = ({ value = "", handleChange = false, name = "",  ...props }) => {
  return (
    <textarea id="username" rows={5} name={name} className="col-span-3 flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none" {...props}/>
  )
}

export default CustomTextArea