import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { GiLargeDress } from 'react-icons/gi';
import { TbPerfume } from 'react-icons/tb';
import { GiFruitBowl } from 'react-icons/gi';
import { FaKitchenSet } from 'react-icons/fa6';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa6';

const Header = () => {
	return (
		<>
			<header className='header-top-strip py-3'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-6'>
							<p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
						</div>
						<div className='col-6'>
							<p className='text-end text-white mb-0'>
								Hotline: <a href='tel:+8210 5692 5066'>+8210 5692 5066</a>
							</p>
						</div>
					</div>
				</div>
			</header>
			<header className='header-upper py-3'>
				<div className='container-xxl'>
					<div className='row align-items-center'>
						<div className='col-2'>
							<h2>
								<Link className='text-white'>Dev Usman</Link>
							</h2>
						</div>
						<div className='col-5'>
							<div className='input-group '>
								<input
									type='text'
									className='form-control py-2'
									placeholder='Search Product Here...'
									aria-label='Search Product Here...'
									aria-describedby='basic-addon2'
								/>
								<span className='input-group-text p-3' id='basic-addon2'>
									<BsSearch className='fs-6' />
								</span>
							</div>
						</div>
						<div className='col-5'>
							<div className='header-upper-links d-flex align-items-center justify-content-between'>
								<div>
									<Link className='d-flex align-items-center gap-10 text-white'>
										<img src='images/compare.svg' alt='Compare' />
										<p className='mb-0'>
											Compare <br /> Products
										</p>
									</Link>
								</div>
								<div>
									<Link className='d-flex align-items-center gap-10 text-white'>
										<img src='images/wishlist.svg' alt='wishlist' />
										<p className='mb-0'>
											Favourite <br /> wishlist
										</p>
									</Link>
								</div>
								<div>
									<Link className='d-flex align-items-center gap-10 text-white'>
										<img src='images/user.svg' alt='user' />
										<p className='mb-0'>
											Log in <br /> My Account
										</p>
									</Link>
								</div>
								<div>
									<Link className='d-flex align-items-center gap-10 text-white'>
										<img src='images/cart.svg' alt='cart' />
										<div className='d-flex flex-column gap-10'>
											<span className='badge bg-white text-dark'>0</span>
											<p className='mb-0'>$ 500</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<header className='header-bottom py-3'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<div className='menu-bottom d-flex align-items-center gap-15'>
								<div>
									<div class='dropdown'>
										<button
											class='btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center'
											type='button'
											id='dropdownMenuButton1'
											data-bs-toggle='dropdown'
											aria-expanded='false'
										>
											<img src='images/menu.svg	' alt='' />
											<span className='me-0 inline-block'>SHOP CATEGORS</span>
										</button>
										<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
											<li>
												<Link className='dropdown-item' to='#'>
													<GiLargeDress className='shop' /> Dress
												</Link>
											</li>
											<li>
												<Link className='dropdown-item' to='#'>
													<TbPerfume className='shop' /> Perfume
												</Link>
											</li>
											<li>
												<Link className='dropdown-item' to='#'>
													<GiFruitBowl className='shop' /> Fruit
												</Link>
											</li>
											<li>
												<Link className='dropdown-item' to='#'>
													<FaKitchenSet className='shop' /> Kitchen
												</Link>
											</li>
											<li>
												<Link className='dropdown-item' to='#'>
													<FaPlaneDeparture className='shop' /> Travel
												</Link>
											</li>
											<li>
												<Link className='dropdown-item' to='#'>
													<FaShopify className='shop' /> Abjective
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className='menu-links'>
									<div className='d-flex align-items-center gap-15'>
										<NavLink to='/'>Home</NavLink>
										<NavLink to='/'>Our Store</NavLink>
										<NavLink to='/'>Blogs</NavLink>
										<NavLink to='/contact'>Contact</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
