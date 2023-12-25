import { Footer, } from 'flowbite-react';

function Footers() {
  return (
    <Footer container className='bg-gradient-to-r from-cyan-900 to-blue-900 mt-4 text-white'>
      <div className="w-full ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <div>
                 <h1 className='text-[30px] my-1'>Faree</h1>
            </div>
       
          <Footer.LinkGroup>
            <Footer.Link >About</Footer.Link>
            <Footer.Link >Privacy Policy</Footer.Link>
            <Footer.Link >Licensing</Footer.Link>
            <Footer.Link >Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright  by="Ghifary Adnan™" year={2023} />
      </div>
    </Footer>
  );
}

export default Footers