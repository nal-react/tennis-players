import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Player from '../components/player';

// it('renders welcome message', () => {
//   const { getByText } = render(<Player />);
//   expect(getByText('Welcome to React')).toBeInTheDocument();
let player = 
      {
        "firstname": "Stan",
        "lastname": "Wawrinka",
        "shortname": "S.WAW",
        "sex": "M",
        "country": {
          "picture": "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
          "code": "SUI"
        },
        "picture": "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
        "data": {
          "rank": 21,
          "points": 1784,
          "weight": 81000,
          "height": 183,
          "age": 33,
          "last": [
            1,
            1,
            1,
            0,
            1
          ]
        }
      };

  it('renders correctly', () => {
    const tree = renderer
      .create(<Player {...player}> </Player>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });