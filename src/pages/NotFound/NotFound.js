import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import Footer from "../../components/Footer/Footer";

import "./notFound.scss";

const NotFound = () => {
	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<div class="not-found-wrapper">
				<h4>404 Page Not Found</h4>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
