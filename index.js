/************* This function return  query string key and value    **********************/
// Put in utils and call any pages or components this function return current page query string value
// for example if current page URL like below 
// URL = http://localhost:3000/calendar?activedate=2022-10-31&view=timeGridWeek&staff_id=61a47377ed594e37805801bc
/**********
output :-
const {activedate, view,staff_id} = queryString();

 *************** */

const queryString = () => {
    let query = window.location.search.substr(1);
    let resultval = {};
    query.split('&').forEach((part) => {
      let item = part.split('=');
      resultval[item[0]] = decodeURIComponent(item[1]);
    });
    return resultval;
  };
  