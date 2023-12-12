import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import BlogCard2 from '../components/BlogCard2';
import BlogCard3 from '../components/BlogCard3';
import BlogCard4 from '../components/BlogCard4';
import ProductCard from '../components/ProductCard';
import ProductCard1 from '../components/ProductCard1';
import ProductCard2 from '../components/ProductCard2';
import ProductCard3 from '../components/ProductCard3';

const Home = () => {
	return (
		<>
			<section className='home-wrapper-1 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-6'>
							<div className='main-banner position-relative '>
								<img src='images/main-banner-1.jpg' alt='banner' className='img-fluid rounded-3' />
								<div className='main-banner-content para position-absolute'>
									<h4>SUPERCHARGED FOR PROPS.</h4>
									<h5>iPad S15+ Pro.</h5>
									<p>From $1300.00 or $41.65/mo.</p>
									<Link className='button'>BUY NOW</Link>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='d-flex flex-wrap justify-content-between align-items-center'>
								<div className='small-banner position-relative pb-3 '>
									<img src='images/catbanner-01.jpg' alt='banner' className='img-fluid rounded-3' />
									<div className='small-banner-content para position-absolute'>
										<h4>BEST SALE</h4>
										<h5>Laptop Max</h5>
										<p>
											From $1399.00 or <br />
											$64.65/mo.
										</p>
									</div>
								</div>
								<div className='small-banner position-relative pb-3'>
									<img src='images/catbanner-02.jpg' alt='banner' className='img-fluid rounded-3' />
									<div className='small-banner-content para position-absolute'>
										<h4>15% OFF SALE</h4>
										<h5>Smart Watch 7</h5>
										<p>
											Shop the latest for
											<br />
											styles and colors.
										</p>
									</div>
								</div>
								<div className='small-banner position-relative '>
									<img src='images/catbanner-03.jpg' alt='banner' className='img-fluid rounded-3' />
									<div className='small-banner-content para position-absolute'>
										<h4>NEW ARRIVAL</h4>
										<h5>Buy IPad Air</h5>
										<p>
											From $599 or
											<br />
											$49.91/mo.12 mo.*
										</p>
									</div>
								</div>
								<div className='small-banner position-relative '>
									<img src='images/catbanner-04.jpg' alt='banner' className='img-fluid rounded-3' />
									<div className='small-banner-content para position-absolute'>
										<h4>FREE ENGRAVING</h4>
										<h5>AirPods Max</h5>
										<p>
											High-fidelity &<br />
											ultra-low distortion
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='home-wrapper-2 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<div className='servies d-flex align-items-center justify-content-between'>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service.png' alt='wrapper2' />
									<div>
										<h6>Free Shipping</h6>
										<p className='mb-0 text-'>From all orders over $5</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-02.png' alt='wrapper2' />
									<div>
										<h6>Daily Surprise Offers</h6>
										<p className='mb-0 text-'>Save up to 25% off</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-03.png' alt='wrapper2' />
									<div>
										<h6>Support 24/7</h6>
										<p className='mb-0 text-'>Shop with an expert</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-04.png' alt='wrapper2' />
									<div>
										<h6>Affordable Prices</h6>
										<p className='mb-0 text-'>Get Factory direct price</p>
									</div>
								</div>
								<div className='d-flex align-items-center gap-15'>
									<img src='images/service-05.png' alt='wrapper2' />
									<div>
										<h6>Secure Payments</h6>
										<p className='mb-0 text-'>100% Producted Payments</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='home-wrapper-2 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<div className='categories d-flex flex-wrap justify-content-betweenalign-items-center'>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Computers & Laptop</h6>
										<p>8 Items</p>
									</div>
									<img src='images/laptop.jpg' alt='camera' />
								</div>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Camera & Videos</h6>
										<p>12 Items</p>
									</div>
									<img src='images/camera.jpg' alt='camera' />
								</div>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Smart Televizor</h6>
										<p>15 Items</p>
									</div>
									<img src='images/tv.jpg' alt='camera' />
								</div>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Smart Watch</h6>
										<p>5 Items</p>
									</div>
									<img src='images/martwatch.jpg' alt='camera' />
								</div>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Headphone & AirPods</h6>
										<p>8 Items</p>
									</div>
									<img src='images/headphone.jpg' alt='camera' />
								</div>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Headphone & Touch</h6>
										<p>12 Items</p>
									</div>
									<img src='images/speaker.jpg' alt='camera' />
								</div>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Home & Heater</h6>
										<p>15 Items</p>
									</div>
									<img src='images/homeapp.jpg' alt='camera' />
								</div>
								<div className='d-flex gap-10 align-items-center'>
									<div>
										<h6>Music & Gaming</h6>
										<p>9 Items</p>
									</div>
									<img src='images/DualSense.jpg' alt='camera' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='blog-wrapper py-5 home-wrapper-2'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<h3 className='section-heading'>Featured Collection</h3>
						</div>
						<ProductCard />
						<ProductCard1 />
						<ProductCard2 />
						<ProductCard3 />
					</div>
				</div>
			</section>
			<section className='marque-wrapper py-5'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-12'>
							<div className='marquee-inner-wrapper card-wrapper'>
								<Marquee className='d-flex'>
									<div className='mx-4 w-25'>
										<img src='images/brand-01.png' alt='brend' />
									</div>
									<div className='mx-4 w-25'>
										<img src='images/brand-02.png' alt='brend' />
									</div>
									<div className='mx-4 w-25'>
										<img src='images/brand-03.png' alt='brend' />
									</div>
									<div className='mx-4 w-25'>
										<img src='images/brand-04.png' alt='brend' />
									</div>
									<div className='mx-4 w-25'>
										<img src='images/brand-05.png' alt='brend' />
									</div>
									<div className='mx-4 w-25'>
										<img src='images/brand-06.png' alt='brend' />
									</div>
									<div className='mx-4 w-25'>
										<img src='images/brand-07.png' alt='brend' />
									</div>
									<div className='mx-4 w-25'>
										<img src='images/brand-08.png' alt='brend' />
									</div>
								</Marquee>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='blog-wrapper py-5 home-wrapper-2'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-12'>
							<h3 className='section-heading'>Our Latest Blogs</h3>
						</div>
						<BlogCard />
						<BlogCard2 />
						<BlogCard3 />
						<BlogCard4 />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
