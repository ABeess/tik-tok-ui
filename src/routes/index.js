import { HeaderOnly } from '@/components/Layout'

import Home from '@/pages/Home/Home'
import Following from '@/pages/Following/Following'
import Profile from '@/pages/Profile/Profile'
import Upload from '@/pages/Upload/Upload'
import Search from '@/pages/Search/Search'

// Public Route
const publicRoutes = [
	{ path: '/', components: Home },
	{ path: '/following', components: Following },
	{ path: '/profile', components: Profile },
	{ path: '/upload', components: Upload, layout: HeaderOnly },
	{ path: '/search', components: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
