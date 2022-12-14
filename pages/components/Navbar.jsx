import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive(!active)
	}

	return (
		<>
			<nav className='flex items-center flex-wrap bg-custom-black-light p-3 border-b-2 border-white'>
				<Link href='/' className='inline-flex items-center p-2 mr-4'>
					<img
						className='h-14 w-14 mr-6 filter invert '
						src='/static/images/nb_logo.png'
						alt=''
					/>{' '}
					<span className='text-xl text-white font-bold uppercase tracking-wide'>
						NerdBrainz Coffee{' '}
					</span>
				</Link>
				<button
					className=' inline-flex p-3 hover:bg-custom-tan rounded lg:hidden text-white ml-auto hover:text-black outline-none'
					onClick={handleClick}
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>

				<div
					className={`${
						active ? '' : 'hidden'
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
				>
					<div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
						<Link
							href='/'
							className='uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black'
						>
							<i className='fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3'></i>
							Home
						</Link>
						<Link
							href='/menu'
							className='uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black'
						>
							<i className='fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3'></i>
							Our Menu
						</Link>
						<Link
							href='/news'
							className='uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black'
						>
							<i className='fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3'></i>
							News & Events
						</Link>
						<Link
							href='/about'
							className='uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black'
						>
							<i className='fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3'></i>
							ABOUT
						</Link>
						<Link
							href='/contact'
							className='uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black'
						>
							<i className='fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3'></i>
							Contact us
						</Link>
					</div>
				</div>
			</nav>
		</>
	)
}
export default Navbar
