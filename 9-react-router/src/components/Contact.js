import React from 'react';
import Modal from './Modal';

const Contact = (props) => {
	return (
		<div>
			<Modal />
			<div
				className='ui raised very padded text container segment'
				style={{ marginTop: '80px' }}
			>
				<h3 className='ui header'>Contact</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus eos cupiditate animi obcaecati vero expedita
					accusantium quibusdam quos nostrum aliquid maiores doloremque
					distinctio, rerum debitis voluptatum similique. Minus, maiores
					deleniti!
				</p>
			</div>
		</div>
	);
};

export default Contact;
