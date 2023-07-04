import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import ThemeContext, { ThemeOptions } from '@contexts/ThemeContext';
import NavLocationContext from '@contexts/NavLocationContext';
import { lightTheme, darkTheme, links } from '@sections/me';

// components
import Intro from '@sections/Intro';
import Navbar from '@components/Navbar';
import Skills from '@sections/Skills';
import Projects from '@sections/Projects';
import Contact from '@sections/Contact';
import Footer from '@components/Footer';

// fonts
import '@fontsource/archivo-black';
import '@fontsource/ubuntu';

const Home: NextPage = () => {
  const [theme, setTheme] = useState(ThemeOptions.Dark);
  const [location, setLocation] = useState('');

  const themeStyle = useMemo(() => {
    return theme === ThemeOptions.Dark ? darkTheme : lightTheme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeStyle }}>
      <NavLocationContext.Provider value={{ location, setLocation }}>
        <div style={themeStyle}>
          <Head>
            {/* change your meta information here */}
            <title>Steve Vang Dev</title>
            <meta
              name='description'
              content='Personal Portfolio Website by Steve Vang'
            />
            <link rel='icon' href='/favicon.ico' />
            <script
              src='https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js'
              async
            ></script>
          </Head>
          <Navbar links={links} />

          {/* add sections here */}
          <main>
            <Intro />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </NavLocationContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Home;
