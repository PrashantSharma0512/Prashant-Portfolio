import React from 'react'

const Contact = () => {
  return (
      <div className='w-screen  flex justify-center items-center  h-screen'>
                    <form action="" method="post" className='border  flex flex-col w-1/2 p-10 gap-3 '>
                        <input
                            type="text"
                            placeholder='Enter your Username'
                            name='username'
                            required
                            autoComplete='off'
                            className='border border-zinc-500 p-4'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your Email'
                            autoComplete='on'
                            required
                            className='border border-zinc-500 p-4'
                        />
                        <textarea
                            name="message"
                            placeholder='Enter your Feedback'
                            autoComplete='on'
                            required
                            cols={10}
                            rows={5}
                            className='border border-zinc-500 p-4'
                        ></textarea>
                        <input
                            type="submit"
                            value={"Send"}
                            className='bg-blue-600 text-white h-12'
                        />
                    </form>
                </div>
  )
}

export default Contact
