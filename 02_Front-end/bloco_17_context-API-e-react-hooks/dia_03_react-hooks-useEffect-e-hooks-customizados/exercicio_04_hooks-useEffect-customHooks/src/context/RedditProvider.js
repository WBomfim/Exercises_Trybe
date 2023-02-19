import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getPostsBySubreddit from '../services/redditAPI';
import RedditContext from './RedditContext';

function RedditProvider({ children }) {
  const [state, setState] = useState({
    postsBySubreddit: {
      frontend: {},
      reactjs: {},
    },
    selectedSubreddit: 'reactjs',
    shouldRefreshSubreddit: false,
    isFetching: true,
  });

  const shouldFetchPosts = () => {
    const {
      selectedSubreddit,
      postsBySubreddit,
      shouldRefreshSubreddit,
      isFetching,
    } = state;

    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  };

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setState({
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
      postsBySubreddit: {
        ...state.postsBySubreddit,
        [state.selectedSubreddit]: {
          items,
          lastUpdated,
        },
      },
    });
  };

  const handleFetchError = (error) => {
    setState({
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: false,
      postsBySubreddit: {
        ...state.postsBySubreddit,
        [state.selectedSubreddit]: {
          error: error.message,
          items: [],
        },
      },
    });
  };

  const handleSubredditChange = (selectedSubreddit) => setState({
    ...state,
    selectedSubreddit,
  });

  const handleRefreshSubreddit = () => setState({
    ...state,
    shouldRefreshSubreddit: true,
  });

  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;

    setState({
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: true,
    });

    getPostsBySubreddit(state.selectedSubreddit)
      .then(handleFetchSuccess)
      .catch(handleFetchError);
  };

  const context = {
    ...state,
    fetchPosts,
    selectSubreddit: handleSubredditChange,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(state.postsBySubreddit),
    posts: state.postsBySubreddit[state.selectedSubreddit].items,
  };

  return (
    <RedditContext.Provider value={ context }>
      {children}
    </RedditContext.Provider>
  );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RedditProvider;
