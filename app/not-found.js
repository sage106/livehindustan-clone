import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container" style={{ 
        padding: '100px 20px', 
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ 
          fontSize: '120px', 
          fontWeight: 'bold', 
          color: '#e31e24',
          margin: '0'
        }}>404</h1>
        <h2 style={{ 
          fontSize: '32px', 
          margin: '20px 0',
          color: '#1a1a1a'
        }}>पेज नहीं मिला</h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#666',
          marginBottom: '30px'
        }}>
          क्षमा करें, आप जो पेज खोज रहे हैं वह मौजूद नहीं है।
        </p>
        <Link href="/">
          <button className="btn-load-more">
            होम पर वापस जाएं
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}