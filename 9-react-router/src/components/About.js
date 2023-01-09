import React from 'react';
import './Modal.css'

const About = () => {
	return (
		<div>
			<div className="wrapper">
				<div className="modal">
					<div className="modal-content">
						<h4>Modal Header</h4>
						<p>A bunch of text</p>
					</div>
				</div>
			</div>
			<div
				className='ui raised very padded text container segment'
				style={{ marginTop: '80px' }}
			>
				<h3 className='ui header'>About</h3>
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

export default About;
