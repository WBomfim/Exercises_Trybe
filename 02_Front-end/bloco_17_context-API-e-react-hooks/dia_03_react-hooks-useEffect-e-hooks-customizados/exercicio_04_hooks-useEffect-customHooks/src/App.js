import React, { useContext, useEffect } from 'react';
import Posts from './components/Posts';
import Selector from './components/Selector';
import RedditContext from './context/RedditContext';

function App() {
  const {
    fetchPosts,
    shouldRefreshSubreddit,
    selectedSubreddit,
    postsBySubreddit,
    refreshSubreddit,
    isFetching,
  } = useContext(RedditContext);

  useEffect(() => {
    fetchPosts();
  }, [shouldRefreshSubreddit, selectedSubreddit]);

  const renderLastUpdatedAt = () => {
    const { lastUpdated } = postsBySubreddit[selectedSubreddit];

    return (lastUpdated && (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    ));
  };

  const renderRefreshButton = () => (
    <button
      type="button"
      onClick={ refreshSubreddit }
    >
      Refresh
    </button>
  );

  const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = (posts.length === 0);

  return (
    <div>
      {isFetching ? <h2>Loading...</h2> : (
        <>
          <Selector />
          <div>
            {renderLastUpdatedAt()}
            {renderRefreshButton()}
          </div>
          {isEmpty ? <h2>Empty.</h2> : <Posts />}
        </>
      )}
    </div>
  );
}

export default App;
