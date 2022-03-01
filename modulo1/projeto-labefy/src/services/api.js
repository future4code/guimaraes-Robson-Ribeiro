import apiClient from "./apiClient";
import apiConfig from "./apiConfig";

const api = {
    getAllPlaylists: () => {
        const url = 'playlists';
        return apiClient.get(url);
    },

    createPlaylists: (name) => {
        const body = {
            name: name 
        }
        const url = 'playlists'
        return apiClient.post(url, body );
    },

    deletePlaylist: (params) => {
        const url = `playlists/${params}`;
        return apiClient.delete(url, params);
    },

    getPlayListTracks: ( idPlaylist ) => {
        const url = `playlists/${idPlaylist}/tracks`
        return apiClient.get(url);
    },

    addTrackToPlaylist: ( name, artist, urlMusic, idPlaylist ) => {
        const url = `playlists/${idPlaylist}/tracks`;
        const body = {
            name: name,
            artist: artist,
            url: urlMusic
        }

        return apiClient.post(url, body);
    },

    removeTrackFromPlaylist: (idPlaylist, idTrackFormPlaylist) => {
        const url = `playlists/${idPlaylist}/tracks/${idTrackFormPlaylist}`
        return apiClient.delete(url);
    }
}

export default api;