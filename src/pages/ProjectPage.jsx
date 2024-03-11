
import { useParams } from 'react-router-dom';
import Project from '@components/Project';
import Header from '@components/Header';
import Footer from '../components/Footer';

function ProjectPage() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <Project id={id}/>
            <Footer />
        </>        
    );
}

export default ProjectPage;