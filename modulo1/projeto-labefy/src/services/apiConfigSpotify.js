const client_secret = 'c38ade9fab1d456794fc9f90cd377490'
const client_id = '8f42eaf44d024bb5897c474457d47fbc'

const spotifyConfig = {
    url: 'https://accounts.spotify.com/api/token',
    client_id: client_id,
    client_secret: client_secret,
    response_type: '',
    redirect_uri: 'http://localhost:3000/',
    headers: {
        'Authorization': 'Basic ' + (() => Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    json: true,
    state: '',
    scope: '',
    show_dialog: '',
    form:{
        grant_type: 'client_credentials'
    }
}

const authOptions = {
    url: spotifyConfig.url,
    headers: spotifyConfig.headers,
    form: spotifyConfig.form,
    json: spotifyConfig.json
}

export default { apiConfig, authOptions, spotifyConfig };