import apiLabefy from "./apiLabefy";
import apiSpotify from "./apiSpotify";

const api = {
    getAllPlaylists: () => {
        const url = 'playlists';
        return apiLabefy.get(url);
    },

    createPlaylists: (name) => {
        const body = {
            name: name 
        }
        const url = 'playlists'
        return apiLabefy.post(url, body );
    },

    deletePlaylist: (params) => {
        const url = `playlists/${params}`;
        return apiLabefy.delete(url, params);
    },

    getPlayListTracks: ( idPlaylist ) => {
        const url = `playlists/${idPlaylist}/tracks`
        return apiLabefy.get(url);
    },

    addTrackToPlaylist: ( name, artist, urlMusic, idPlaylist ) => {
        const url = `playlists/${idPlaylist}/tracks`;
        const body = {
            name: name,
            artist: artist,
            url: urlMusic
        }

        return apiLabefy.post(url, body);
    },

    removeTrackFromPlaylist: (idPlaylist, idTrackFormPlaylist) => {
        const url = `playlists/${idPlaylist}/tracks/${idTrackFormPlaylist}`
        return apiLabefy.delete(url);
    },

    spotify:{
        getCurrentUserProfile: ( token ) => {
            const url = `me`
            return apiSpotify.get(url, mountHeader(token) );
        },

        getCurrentUserPlaylists: ( token ) => {
            const url = `me/playlists`
            return apiSpotify.get(url, mountHeader(token) );
        }
    }
}

const mountHeader = ( token ) => {
    const headers = {
        headers:{
            Authorization: 'Bearer '+token,
            'Content-Type': 'application/json'
        }       
    }

    return headers;
}

export default api;