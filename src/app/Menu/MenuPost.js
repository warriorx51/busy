import React, { Component } from 'react';
import numeral from 'numeral';
import IsScrolling from '../../helpers/IsScrolling';

import Icon from '../../widgets/Icon';

import './MenuPost.scss';

@IsScrolling
export default class MenuPost extends Component {
  render() {
    const {
      reblog,
      isReblogged,
      openCommentingDraft,
      isPostLiked,
      isPostDisliked,
      likePost,
      unlikePost,
      dislikePost,
      content
    } = this.props;
    const payout = numeral(
      parseFloat(content.total_payout_value) +
      parseFloat(content.total_pending_payout_value)
    ).format('$0,0.00');

    const numberOfComments = numeral(content.children).format('0,0');
    const numberOfVotes = numeral(content.net_votes).format('0,0');
    const numberOfDislikes = content.active_votes.filter(vote => vote.percent < 0).length;

    return (
      <ul
        className="MenuPost secondary-nav"
        style={this.props.isScrolling ? { display: 'none' } : {}}
      >
        <li>
          <a
            className={isPostLiked ? 'active' : ''}
            onClick={isPostLiked ? unlikePost : likePost}
          >
            <Icon name="thumb_up" />
          </a>
          { ` ${numberOfVotes}` }
        <span className="hidden-xs">
          { ' Likes' }
        </span>
        </li>

        <li>
          <a
            className={isPostDisliked ? 'active' : ''}
            onClick={isPostDisliked ? unlikePost : dislikePost}
          >
            <Icon name="thumb_down" />
          </a>
          { ` ${numberOfDislikes}` }
        <span className="hidden-xs">
          { ' Dislikes' }
        </span>
        </li>

        <li>
          <Icon name="attach_money" />
          { ' ' }
          { payout }
        </li>
        <li>
          <a
            onClick={e => {
            e.stopPropagation();
            openCommentingDraft();
          }}
          >
            <Icon name="reply" />
          </a>
          { ` ${numberOfComments}` }
        <span className="hidden-xs">
          { ' Comments' }
        </span>
        </li>
        <li>
          <a
            className={isReblogged ? 'active' : ''}
            onClick={reblog}
          >
            <Icon name="repeat" />
          </a>
        </li>
      </ul>
    );
  }
}
