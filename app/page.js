"use client"
import { createContext } from 'react';
import styles from './page.module.css'
import { StyledContainer } from './components/Styles';
import Login from './login/page';
import Signup from './signup/page';
// import WelcomePage from './welcomePage/page';
import Dashboard from './dashboard/page';
// import HomePage from './home/page';
// import TaskPage from './tasks/page';
export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  )
}
