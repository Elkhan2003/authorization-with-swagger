import scss from './LayoutSite.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const LayoutSite = () => {
	return (
		<div className={scss.LayoutPage}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default LayoutSite;
