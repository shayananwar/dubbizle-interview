import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {getPublicGists, getGistForUser} from '../services/gistService';
import Gist from "./Gist";

function GistList() {
	// Declare a new state variable, which we'll call "gists"  
	const [gists, setGists] = useState([]);

	//call service and fetch data
	async function fetchGists(search, cb) {
		try {
			let response = [];
			
			if(search.length > 0)
				response = await getGistForUser(search);
			else
				response = await getPublicGists();

			if(typeof response.data !== undefined)
				cb(response.data);
		} catch(error) {
			// TODO: handle error cases
			cb([]);
		}
	}

	// Similar to componentDidMount
	useEffect(() => {    
		fetchGists("", function(gistsResponse) {
			setGists(gistsResponse);
		});
	}, []);

  return (
    <Wrapper>
	    {
	    	gists.map(function(gist, i){
	        	return <Gist data={gist} key={i} />
	    	})
	    }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 40%;
  margin: auto;
  padding: 10px 0px;
`;

export default GistList
