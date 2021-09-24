// Variables and Constants
const BASE_URL = 'https://app.sportdataapi.com/api/v1/soccer/seasons?';
const API_KEY = '05293820-1a09-11ec-a4a8-357e8b33afe0&league_id=18';
const $form = $('form');
let soccerInformation;

//Cached Elemnet References
const $league_id = $('league_id');
const $country_id = $('country_id');
const $name = $('name')
const $input = $('#results');

//Event Listeners
$form.on('submit', handleGetData)

//Functions
function handleGetData(event) {
    console.log('hello')
    event.preventDefault();
    const leagueResults = $input.val();
    //if (!leagueResults) return;
    $input.val("");
    // use $.ajax to fetch data from the space x api
    $.ajax(`${BASE_URL}apikey=${API_KEY}`)
    .then(function(response) {
        soccerInformation = response.data
        console.log(response.data)
        console.log(soccerInformation[0]['league_id'])
        render()
        $year.text(new Date().getUTCFullYear());
        
    })
    render();
    function render() {
        console.log(soccerInformation)

        const html = soccerInformation.map(function(result) {
            return `<article>
            <p> league Id: ${result.league_id}</p>
            <p> Country Id: ${result.country_id}</p>
            <p> Name: ${result.name}</P>
            </article>`;
        })
        $('main').html(html);

    }  

}
