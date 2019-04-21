import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Link from 'next/link'

import Layout from '../components/Layout'
import StoryList from '../components/StoryList'

const App = props => {
   const { page, stories } = props

   return stories.length === 0 ? <Error statusCode={503} /> : (
      <Layout title="Hacker Next" description="A hacker news clone made with nextjs">
         <main>
            <StoryList stories={stories} />
         </main>
         <footer>
            <Link href={`/?page=${ page + 1 }`}>
               <a>More</a>
            </Link>
         </footer>
         <style global jsx>
            {`
               * {
                  margin: 0;
               }
               body {
                  box-sizing: border-box;
                  background-color: white;
                  padding: 8px;
                  font-family: Verdena, Geneva, sans-serif;
               }
            `}
            </style>
            <style jsx>
               {`
                  footer {
                     padding: 1em;
                  }
                  footer a {
                     font-weight: bold;
                     color: black;
                     text-decoration: none;
                  }
               `}
            </style>
      </Layout>
   )
}

App.getInitialProps = async ({ req, res, query }) => {
   let stories
   let page
   try {
      page = Number(query.page) || 1;
      const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
      stories = await res.json()
   }
   catch (err) {
      console.log(err)
      stories = []
   }
   return { page, stories }
}

export default App