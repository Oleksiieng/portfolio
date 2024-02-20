import React from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Projects') {
      return <Projects />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else {
      return <About />
    }
  }

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Wrapper>
        {renderPage()}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
