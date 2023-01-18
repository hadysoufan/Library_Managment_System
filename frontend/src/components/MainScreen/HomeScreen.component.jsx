import React from 'react';
import Footer from '../Footer/Footer.component';
import Header from '../Header/Header.component';
import NavBar from '../NavBar/Navbar.component';
import Sidebar from '../SideBar/Sidebar.component';
import './HomeScreen.styles.css';

function HomeScreen() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Header />
      <Footer />
    </>
  );
}

export default HomeScreen;
