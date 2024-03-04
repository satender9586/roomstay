import React from 'react'

const CustomTextArea = ({value="", placeholder=""}) => {
  return (
    <textarea id="username" rows={5}  value={value} placeholder={placeholder} className="col-span-3 flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none" />
  )
}

export default CustomTextArea