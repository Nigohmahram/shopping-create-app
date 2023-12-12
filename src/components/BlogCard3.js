import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard3 = () => {
	return (
		<div className='col-3'>
			<div className='blog-card'>
				<div className='card-image'>
					<img src='images/blog-3.jpg' className='img-fluid ' alt='blog' />
				</div>
				<div className='blog-content'>
					<p className='date'>1 Dec, 2023</p>
					<h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
					<p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum.</p>
					<Link to='/' className='button'>
						READ MORE
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard3;
