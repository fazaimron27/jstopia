import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

const Layout = ({ children, title, description, backButton }) => (
   <div className="container">
   <Head>
      <title>{ title }</title>
      <meta name="description" content={ description } />
   </Head>
      <header className="main-header">
         <div className="bar"></div>
         <nav>
            { backButton && <span onClick={ () => Router.back() } className="back-button">&#x2b05;</span> }
            <Link href="/">
               <a>
                  <span className="main-title">Hacker News</span>
               </a>
            </Link>
         </nav>
      </header>
         { children }
      <style jsx>{`
         .container {
            min-width: 500px;
            width: 85%;
            margin: 0 auto;
            background: #f6f6ef;
         }
         .bar {
            width: inherit;
            height: 5px;
            background-color: black;
         }
         nav {
            background: #f60;
            padding: 2px 5px;
         }
         nav > * {
            display: inline;
            color: black;
         }
         nav a {
            text-decoration: none;
         }
         nav .main-title {
            font-size: .9em;
            font-weight: bold;
         }
         .back-button {
            font-size: .9rem;
            padding-right: 1em;
            cursor: pointer;
         }
      `}</style>
   </div>
)

export default Layout