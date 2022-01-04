import "./Card.scss";

const Card = (props) => {
	return (
		<div>
			<div className="card" style={{ backgroundImage: `url(${props.url})` }}></div>
			<style class="hover"></style>
		</div>
	);
};

export default Card;
