import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {getPublicGists, getGistForUser} from '../services/gistService';
import Gist from "./Gist";
import { useSelector } from 'react-redux';

let fetchTimer;

function loading() {
	return (
	    <Wrapper>
		    <p>Loading...</p>
	    </Wrapper>
	  );
}

function noDataFound() {
	return (
	    <Wrapper>
		    <p>No Data Found</p>
	    </Wrapper>
	  );
}

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

function GistList() {
	// Declare a new state variable, which we'll call "gists"  
	const [gists, setGists] = useState([]);
	const [fetching, setFetching] = useState(1);
	const search = useSelector(state => state.search);

	// Similar to componentDidMount
	useEffect(() => {  
		if(typeof fetchTimer !== undefined && fetchTimer)
			clearTimeout(fetchTimer);

		setFetching(1);
		setGists([]);
		fetchTimer = setTimeout(function() {
			fetchGists(search, function(gistsResponse) {
				setGists(gistsResponse);
				clearTimeout(fetchTimer);
				setFetching(0);
			});
		}, 2000);
	}, [search]);

	// Case: No Data Found 
	if(!fetching && gists.length === 0)
		return noDataFound();

	// Case: Loading Data
	if(fetching && gists.length === 0)
		return loading();
  	
  	return (
	    <Wrapper>
		    {
		    	gists.map(function(gist, i){
		        	return <Gist data={gist} datakey={i} key={i} />
		    	})
		    }
	    </Wrapper>
	)
}

const Wrapper = styled.div`
  width: 700px;
  margin: auto;
  padding: 10px 0px;
`;

export default GistList
