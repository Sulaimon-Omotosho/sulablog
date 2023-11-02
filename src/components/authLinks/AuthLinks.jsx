'use client'

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)

  // const status = 'notAuthenticated'
  const status = 'authenticated'
  return (
    <>
      {status === 'notAuthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={styles.link}>
            Write
          </Link>
          <Link href='/logout' className={styles.link}>
            Logout
          </Link>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === 'notAuthenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <Link href='/logout'>Logout</Link>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
