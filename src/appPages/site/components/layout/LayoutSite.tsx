import scss from './LayoutSite.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';

const LayoutSite = () => {
	return (
		<div className={scss.LayoutPage}>
			<Header />
			<main>LayoutSite main</main>
			<Footer />
		</div>
	);
};

export default LayoutSite;
