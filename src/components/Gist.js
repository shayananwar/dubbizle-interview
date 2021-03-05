import Octicon from 'react-octicon';
import Moment from 'moment';

function Gist(props) {
	return (
	    <div className="main-section">
		    <div className="user-section">
		    	<div className="flex-box">
		    		<img alt="props.data.owner.login" src={props.data.owner.avatar_url} className="user-pic" />
		    		<a href={props.data.owner.html_url} className="link-style"> {props.data.owner.login} </a>
		    	</div>

		    	<div className="flex-box">		    		
		    		<a target="_blank" rel="noreferrer"  className="link-style resource-link-style" href={props.data.url}><Octicon name="code" /> {Object.keys(props.data.files).length} Files</a>

		    		<a target="_blank" rel="noreferrer"  className="link-style resource-link-style" href={props.data.forks_url}><Octicon name="code" /> Forks</a>

		    		<a target="_blank" rel="noreferrer"  className="link-style resource-link-style" href={props.data.comments_url}><Octicon name="comment" /> Comments</a>

		    		<a target="_blank" rel="noreferrer"  className="link-style resource-link-style" href={props.data.owner.starred_url}><Octicon name="star" /> Stars</a>
		    	</div>
		    </div>

		    <div className="dates-section">
		    	<div>
		    		<span>Created at: {Moment(props.data.created_at).format('YYYY-MM-DD')}</span>
		    		<span style={{marginLeft:'20px'}}>Updated at: {Moment(props.data.updated_at).format('YYYY-MM-DD')}</span>
		    	</div>
		    </div>

		    <div className="desc-section">
		    	<span>{props.data.description}</span>
		    </div>

			<div className="files-section">
				{
			    	Object.keys(props.data.files).map(function(fileKey, i){
			        	return <a key={props.data.id + '-file-' + i} target="_blank" rel="noreferrer" href={props.data.files[fileKey].raw_url} className="link-style resource-link-style"><Octicon name="file" /> { fileKey }</a>
			    	})
			    }
		    </div>		    
	    </div>
	);
}

export default Gist