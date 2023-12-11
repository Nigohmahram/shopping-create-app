import React from 'react';
import { Link } from 'react-router-dom';

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
						<div className='col-12'></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
