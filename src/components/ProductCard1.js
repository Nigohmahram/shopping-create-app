import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { FcSalesPerformance } from 'react-icons/fc';

const ProductCard1 = () => {
	return (
		<div className='col-3'>
			<Link className='product-card position-relative'>
				<div className='wishlist-icon position-absolute'>
					<Link>
						<img src='images/wish.svg' alt='wish' />
					</Link>
				</div>
				<div className='product-image'>
					<img src='images/macbook.jpg' alt='productimage' />
					<img src='images/macbook1.jpg' alt='productimage' />
				</div>
				<div className='product-details'>
					<h6 className='brand'>Macbook PRO</h6>
					<h5 className='product-title'>Apple 2023 맥북 에어 15, 8코어, 10코어 GPU, 256GB, 8GB, 한글</h5>
					<p className='parach'>
						11% <span className='parach1'>1,890,000</span>
					</p>
					<p className='price'>1,798,000원</p>
					<p className='item'>내일(수) 12/13 도착 보장 </p>
					<ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
					<h4 className='skidka'>
						<FcSalesPerformance className='skidk' />
						<span className='skid'>최대 50,000원 적립</span>
					</h4>
				</div>
				<div className='action-bar position-absolute'>
					<div className='d-flex flex-column gap-10'>
						<Link>
							<img src='images/prodcompare.svg' alt='car' />
						</Link>
						<Link>
							<img src='images/view.svg' alt='car' />
						</Link>
						<Link>
							<img src='images/add-cart.svg' alt='car' />
						</Link>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard1;
