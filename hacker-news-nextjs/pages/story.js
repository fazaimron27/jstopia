import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import Layout from '../components/Layout'
import CommentList from '../components/CommentList'

const Story = ({ story }) => {
   return story 
   ? ( 
      <Layout title={ story.title }>
         <main>
            <h1 className="story-title">
               <a href={story.url}>{ story.title }</a>
            </h1>
            <div className="story-details">
               <strong>{ story.points } points</strong>
               <strong>{ story.comments_count } comments</strong>
               <strong>{ story.time_ago }</strong>
            </div>
            { story.comments.length > 0 ? (
               <CommentList comments={ story.comments } />
               ) : ( <div> No comment for this story </div> )
            }
         </main>
         <style jsx>{`
            main {
               padding: 1em;
            }
            .story-title {
               font-size: 1.2rem;
               font-weigth: 300;
               padding-bottom: .5em;
            }
            .story-title a {
               color: #333;
               text-decoration: none;
            }
            .story-title a:hover {
               text-decoration: underline;
            }
            .story-details {
               font-size: .8rem;
               padding-bottom: 1em;
               border-bottom: 1px solid rgba(0,0,0,.1);
               margin-bottom: 1em;
            }
            .story-details strong {
               margin-right: 1em;
            }
            .story-details a {
               color: #f60;
            }
         `}</style>
      </Layout> 
   ) 
   : <Error statusCode={503} />
}

Story.getInitialProps = async ({req, res, query }) => {
   let story
   try {
      const storyId = query.id
      const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
      story = await res.json()
   }
   catch(err) {
      console.log(err)
      story = null
   }
   return { story }
}

export default Story