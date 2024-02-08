import React from 'react'

function Footer() {
  return (
    <footer
    className="w-full mt-10 md:min-h-[200px]   bg-[#eeeeee] p-10 justify-end" id="contactUs"
  >
    <div className="flex md:flex-row flex-col justify-between">
      <div>
        <div className="m-4 text-4xl md:text-6xl text-black font-semibold">
          Blossom Flora
        </div>
        <div className="m-4 text-2xl md:text-3xl text-gray-500">
          some great sayn by ritvik
        </div>
        <div className="m-4 text-xl md:text-2xl text-gray-500">
        Attingal, thiruvananthapuram
        </div>
      </div>


      <div className='flex md:w-[50%] w-full justify-between p-5 '>
      <div className="mt-10">
        <div className="text-xl text-black font-semibold">Socials </div>
        <a href="">
          <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
            twitter: ddgsd
          </div>
        </a>

        <a href="">
          <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
            Insta : dsgsd
          </div>
        </a>
        <a href="https://www.adithyakrishnan.com/">
          <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
            Website : fdhfd
          </div>
        </a>
      </div>
      <div className="mt-10">
        <div className="text-xl text-black font-semibold">Contact Us</div>
        <a href="">
          <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
            Phone:
          </div>
        </a>
        <a href="">
          <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
            Adress 1
          </div>
        </a>
        <a href="">
          <div className="text-lg text-gray-500 hover:text-black cursor-pointer transition-all duration-600">
            adress 2
          </div>
        </a>
      </div>
      </div>

    </div>
  </footer>
  )
}

export default Footer