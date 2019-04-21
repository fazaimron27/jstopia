import StoryItem from './StoryItem'

const StoryList = ({ stories }) => (
   <section className="story-list">
      { stories.map(story => (
         <StoryItem story={story} key={ story.id } />
      ))}
   <style jsx>
   {`
      .story-list {
          padding: 0 1em;
      }  
   `}
   </style>
   </section>
)

export default StoryList