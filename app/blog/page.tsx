import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedPage from '@/components/AnimatedPage'

export default function BlogPage() {
  return (
    <main>
      <Header />
      <AnimatedPage>
        <section className="mx-auto max-w-5xl py-16 md:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">Edit Journal</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
            Coming soon. I am preparing notes on pacing, color grading, sound design, and practical editing workflows.
          </p>
        </section>
        <Footer />
      </AnimatedPage>
    </main>
  )
}
