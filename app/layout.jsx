import React from 'react'


export const metadata = {
    title:"Hello I'm Lian",
    description:"This is my desain Sticker"
}


const RootLayout = ({children}) => {
  return (
   <html lang='en' className='scroll-smooth'>
    <body>
        <main className="app">
            
            {children}
        </main>
    </body>
   </html>
  )
}

export default RootLayout