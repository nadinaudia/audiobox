import React, { useState } from 'react';
import CreatePlaylistForm from 'src/components/CreatePlaylistForm';
import MainLayout from 'src/components/Layouts/MainLayout';
import SearchBox from 'src/components/SearchBox';
import TracksGrid from 'src/components/TracksGrid';

const CreatePlaylist = () => {
	const [selectedTracks, setSelectedTracks] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	const resetTracks = () => {
		setSelectedTracks([]);
		setSearchResult([]);
	};

	return (
		<MainLayout title="Create Playlist" className="container flex-bs gap-16 pt-8 w-full">
			<div className="w-2/3">
				<SearchBox setSearchResult={setSearchResult} />
				<TracksGrid
					selectedTracks={selectedTracks}
					searchResult={searchResult}
					setSelectedTracks={setSelectedTracks}
				/>
			</div>
			<div className="w-1/3">
				<CreatePlaylistForm selectedTracks={selectedTracks} resetTracks={resetTracks} />
			</div>
		</MainLayout>
	);
};

export default CreatePlaylist;
