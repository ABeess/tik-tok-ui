import { HeaderOnly } from '@/layouts';
import config from '@/config';
import Home from '@/pages/Home/Home';
import Following from '@/pages/Following/Following';
import Profile from '@/pages/Profile/Profile';
import Upload from '@/pages/Upload/Upload';
import Search from '@/pages/Search/Search';

// Public Route
const publicRoutes = [
	{ path: config.path.root, components: Home },
	{ path: config.path.following, components: Following },
	{ path: config.path.profile, components: Profile },
	{ path: config.path.upload, components: Upload, layout: HeaderOnly },
	{ path: config.path.search, components: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
