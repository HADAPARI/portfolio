const Footer = () => {
    const date = new Date();
  return (
    <div className="px-4 sm:px-14 xl:px-40 py-14 bg-primary text-white flex flex-col lg:flex-row justify-between">
        <div className="mb-10 lg:mb-0">
            <h1 className="text-3xl font-bold">Portfolio</h1>
        </div>
        <div className="mb-10 lg:mb-0">
            <p className="text-xl pt-1">Ambatoroka, Antananarivo, Madagascar</p>
            <p className="border-b-2 mt-10 mb-3 pb-2 w-fit">(261) 34 42 127 77</p>
            <a href="mailto:davs.richard1@gmail.com" className="border-b-2 pb-2 w-fit" target="_blank">davs.richard1@gmail.com</a>
        </div>
        <div className="flex flex-col gap-1">
            <a href='https://web.facebook.com/profile.php?id=100003537838780' target="_blank">Facebook</a>
            <a href="#">Linkedin</a>
            <a href="#">Github</a>
            <p className='mt-10 text-sm'>&copy; {date.getFullYear()} Portfolio. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer