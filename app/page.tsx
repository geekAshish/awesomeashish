import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import FeaturedProjects from '@/components/FeaturedProjects'
import Testimonials from '@/components/Testimonials'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'
import AnimatedPage from '@/components/AnimatedPage'

export default function Page() {
return (
<main>
<Header />
<AnimatedPage>
<Hero />
<Experience />
<FeaturedProjects />
<Testimonials />
<GetInTouch />
<Footer />
</AnimatedPage>
</main>
)
}
