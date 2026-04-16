import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
    return (
        <Layout>
            <Hero />

            {/* Future sections */}
            <div className="h-screen" />
            <div className="h-screen" />
        </Layout>
    );
}
