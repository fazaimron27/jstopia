import Link from 'next/link'

const StoryItem = ({ story}) => (
   <article className="story" >
      <h2 className="story-title">
         <Link href={story.url}>
            <a>{ story.title }</a>
         </Link>
      </h2>
      <div className="story-details">
         <span>{ story.points || 0 } points</span>
         <Link href={`/story?id=${story.id}`}>
            <a>{ story.comments_count || 0 } comments</a>
         </Link>
      </div>

      <style jsx>
      {`
         .story {
            padding: 1em 0;
         }
         .story-title {
            font-size: 1rem;
            font-weight: 400;
            margin: 0;
            margin-bottom: .5em;
         }
         .story-title a {
            color: #333;
            text-decoration: none;
         }
         .story-title a:hover, 
         .story-details a:hover {
            text-decoration: underline;
         }
         .story-details {
            font-size: .8rem;
            font-weight: bold
         }
         .story-details span {
            margin-right: 1rem;
         }
         .story-details a {
            color: #6600ff;
            text-decoration: none;
         }
      `}
      </style>
   </article>
)

export default StoryItem