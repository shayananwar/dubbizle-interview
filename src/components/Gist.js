import styled from 'styled-components';
import Octicon from 'react-octicon';

function Gist(props) {
	console.log(props.data)
	return (
	    <Wrapper>
		    <div style={userSection}>
		    	<div style={userProfile}>
		    		<img src={props.data.owner.avatar_url} style={userPic} />
		    		<a href={props.data.owner.html_url} style={userName}> {props.data.owner.login} </a>
		    	</div>

		    	<div>
		    		<a target="_blank" href={props.data.url} style={userName}><Octicon name="code" /> {Object.keys(props.data.files).length} Files</a>

		    		<a target="_blank" href={props.data.forks_url} style={userName}><Octicon name="fork" /> Forks</a>

		    		<a target="_blank" href={props.data.comments_url} style={userName}><Octicon name="comment" /> Comments</a>

		    		<a target="_blank" href={props.data.owner.starred_url} style={userName}><Octicon name="star" /> Stars</a>
		    	</div>
		    </div>

		    <div>

		    </div>

		    <div>

		    </div>

			<div>

		    </div>		    
	    </Wrapper>
	);
}

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const userSection = {
	display: "flex",
	justifyContent: "space-between"
};

const userProfile = {
  width: 'auto',
  display: 'flex'
};

const userPic = {
	width: '50px',
	borderRadius: '50%'
};

const userName = {
	alignSelf: 'center',
	marginLeft: '10px',
	fontSize: '16px',
	color: '#0a52e3',
	textDecoration: 'none'
};

export default Gist