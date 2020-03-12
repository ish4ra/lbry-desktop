import { connect } from 'react-redux';
import { makeSelectMetadataItemForUri, makeSelectClaimForUri } from 'lbry-redux';
import ChannelAbout from './view';

const select = (state, props) => ({
  claim: makeSelectClaimForUri(props.uri)(state),
  description: makeSelectMetadataItemForUri(props.uri, 'description')(state),
  website: makeSelectMetadataItemForUri(props.uri, 'website_url')(state),
  email: makeSelectMetadataItemForUri(props.uri, 'email')(state),
});

export default connect(select, null)(ChannelAbout);
