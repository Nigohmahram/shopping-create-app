import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { FcSalesPerformance } from 'react-icons/fc';

const ProductCard3 = () => {
	return (
		<div className='col-3'>
			<div className='product-card position-relative'>
				<div className='wishlist-icon position-absolute'>
					<Link>
						<img src='images/wish.svg' alt='wish' />
					</Link>
				</div>
				<div className='product-image'>
					<img src='images/phone1.jpg' alt='productimage' />
					<img src='images/phone2.jpg' alt='productimage' />
				</div>
				<div className='product-details'>
					<h6 className='brand'>Apple Iphone</h6>
					<h5 className='product-title'>Apple 정품 아이폰 15 Pro Max 자급제, 블루티타늄, 256GB</h5>
					<p className='parach'>
						12% <span className='parach1'>2,100,000</span>
					</p>
					<p className='price'>1,900,000원</p>
					<p className='item'>내일(수) 12/13 새벽 7시 전 도착 보장</p>
					<ReactStars count={5} size={24} value={5} edit={false} activeColor='#ffd700' />
					<h4 className='skidka'>
						<FcSalesPerformance className='skidk' />
						<span className='skid'>최대 15,640원 적립</span>
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
			</div>
		</div>
	);
};

export default ProductCard3;
