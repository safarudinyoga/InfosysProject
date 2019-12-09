import React from 'react';

export default function Star(props) {
	const stars = (rate) =>
		[ ...Array(5) ].map((item, index) => {
			// console.log('star',rate)
			// index += 1;
			rate -= 1;
			if (index <= rate) return <i key={index} className="fas fa-star text-warning" />;
			else if (index - rate < 1 && index - rate > 0) {
				return <i key={index} className="fas fa-star-half-alt text-warning" />;
			} else return <i key={index} className="far fa-star text-warning" />;
		});

	return (
		<div>
			{stars(props.rate)}
			<span className="text-warning ml-2">{props.rate}</span>
		</div>
	);
}
