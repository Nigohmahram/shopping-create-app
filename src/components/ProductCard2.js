import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { FcSalesPerformance } from 'react-icons/fc';

const ProductCard2 = () => {
	return (
		<div className='col-3'>
			<div className='product-card position-relative'>
				<div className='wishlist-icon position-absolute'>
					<Link>
						<img src='images/wish.svg' alt='wish' />
					</Link>
				</div>
				<div className='product-image'>
					<img src='images/tv0.jpg' alt='productimage' />
					<img src='images/tv1.jpg' alt='productimage' />
				</div>
				<div className='product-details'>
					<h6 className='brand'>SamSung TV</h6>
					<h5 className='product-title'>전자 4K UHD 울트라 HD TV, 163cm, 65UR8300NNA, 스탠드형, 방문설치</h5>
					<p className='parach'>
						8% <span className='parach1'>1,040,000</span>
					</p>
					<p className='price'>949,400원</p>
					<p className='item'>토요일 12/16 부터 설치 가능</p>
					<ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
					<h4 className='skidka'>
						<FcSalesPerformance className='skidk' />
						<span className='skid'>최대 47,470원 적립</span>
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

export default ProductCard2;
