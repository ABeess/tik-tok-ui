import { HeaderOnly } from '@/Layout';
import path from '@/config/path';
import Home from '@/pages/Home/Home';
import Following from '@/pages/Following/Following';
import Profile from '@/pages/Profile/Profile';
import Upload from '@/pages/Upload/Upload';
import Search from '@/pages/Search/Search';

// Public Route
const publicRoutes = [
	{ path: path.root, components: Home },
	{ path: path.following, components: Following },
	{ path: path.profile, components: Profile },
	{ path: path.upload, components: Upload, layout: HeaderOnly },
	{ path: path.search, components: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
