import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navbar/logo.png";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Container>
				<div className='flex bg-white text-black py-5 justify-between items-center'>
					<div className='flex items-center justify-center gap-x-10'>
						<Link to='/'>
							<img src={logo} alt='logo' class='h-7' />
						</Link>
						<Link to='/'>Home</Link>
						<Link to='/'>About Us</Link>
						<Link to='/'>FAQ</Link>
						<Link to='/contact-us'>Contact Us</Link>
					</div>
					<div className='flex items-center gap-x-6'>
						<Link to='/sign-in'>
							<button class='bg-white rounded-lg border-2 border-gray-300 h-8 w-16'>
								<span class='text-sm'>Sign In</span>
							</button>
						</Link>
						<Link to='/get-started'>
							<button class='bg-yellow-400 h-8 w-24 rounded-lg'>
								<span class='text-sm'>Get Started</span>
							</button>
						</Link>
					</div>
				</div>
			</Container>
			{/* <Nav>
				<NavLink to='/'>
					<img src={logo} alt='logo' class='h-7' />
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to='../pages/Home' activeStyle>
						Home
					</NavLink>
					<NavLink to='/about' activeStyle>
						About Us
					</NavLink>
					<NavLink to='/about' activeStyle>
						F.A.Q
					</NavLink>
					<NavLink to='../pages/ContactUs' activeStyle>
						Contact Us
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
				<NavBtn>
					<NavBtnLink to='/signup'>Get Started</NavBtnLink>
				</NavBtn>
			</Nav> */}
			{/* <div class='flex flex-wrap place-items-center'>
				<section class='relative mx-auto'>
					<nav class='flex justify bg-gray-900 text-white w-screen'>
						<div class='px-5 xl:px-12 py-6 flex w-full items-center'>
							<a class='text-3xl font-bold font-heading' href='#'>
								<img class='h-9' src={logo} alt='logo' />
							</a>
							<ul class='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
								<li>
									<a class='hover:text-gray-200' href='#'>
										Home
									</a>
								</li>
								<li>
									<a class='hover:text-gray-200' href='#'>
										Catagory
									</a>
								</li>
								<li>
									<a class='hover:text-gray-200' href='#'>
										Collections
									</a>
								</li>
								<li>
									<a class='hover:text-gray-200' href='#'>
										Contact Us
									</a>
								</li>
							</ul>
							<div class='hidden xl:flex items-center space-x-5'>
								<a class='hover:text-gray-200' href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
										/>
									</svg>
								</a>
								<a class='flex items-center hover:text-gray-200' href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
										/>
									</svg>
									<span class='flex absolute -mt-5 ml-4'>
										<span class='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75'></span>
										<span class='relative inline-flex rounded-full h-3 w-3 bg-pink-500'></span>
									</span>
								</a>
								<a class='flex items-center hover:text-gray-200' href='#'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='h-6 w-6 hover:text-gray-200'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</a>
							</div>
						</div>
						<a class='xl:hidden flex mr-6 items-center' href='#'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-6 w-6 hover:text-gray-200'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
							<span class='flex absolute -mt-5 ml-4'>
								<span class='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75'></span>
								<span class='relative inline-flex rounded-full h-3 w-3 bg-pink-500'></span>
							</span>
						</a>
						<a class='navbar-burger self-center mr-12 xl:hidden' href='#'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-6 w-6 hover:text-gray-200'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</a>
					</nav>
				</section>
			</div> */}
		</>
	);
};

export default Navbar;