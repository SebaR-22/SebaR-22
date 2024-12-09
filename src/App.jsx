import Header from './components/Header';
import Footer from './components/Footer';
import AdivinanzaContainer from './components/AdivinanzaContainer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AdivinanzaContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
