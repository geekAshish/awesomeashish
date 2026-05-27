import Header from '@/components/Header'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import AnimatedPage from '@/components/AnimatedPage'

export default function ProjectsPage() {
return (
<main>
<Header />
<AnimatedPage>
<Experience />
<Projects />
<Footer />
</AnimatedPage>
</main>
)
}
