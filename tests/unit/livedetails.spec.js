import { shallowMount } from '@vue/test-utils';
import Livedetails from '@/components/Livedetails.vue';
import axios from 'axios';

jest.mock('axios');

describe('Livedetails.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Livedetails);
  });

  // Test : Sorted Match Results
  it('sorts match results with "Match Nul" in the middle', () => {
    const matchResults = [{
        "id": 3,
        "name": "Unibet IT gagne",
        "currentOdd": 20.7,
        "state": "OPENED",
        "result": null,
        "market": {
          "id": 2,
          "name": "Résultat du match",
          "event": {
            "id": 1,
            "name": "Unibet IT vs Real madrid",
            "startDate": "2022-01-29T13:41:15.125+00:00"
          }
        }
      },
      {
        "id": 4,
        "name": "Real madrid gagne",
        "currentOdd": 1.2,
        "state": "OPENED",
        "result": null,
        "market": {
          "id": 2,
          "name": "Résultat du match",
          "event": {
            "id": 1,
            "name": "Unibet IT vs Real madrid",
            "startDate": "2022-01-29T13:41:15.125+00:00"
          }
        }
      },
      {
        "id": 5,
        "name": "Match Nul",
        "currentOdd": 4.3,
        "state": "OPENED",
        "result": null,
        "market": {
          "id": 2,
          "name": "Résultat du match",
          "event": {
            "id": 1,
            "name": "Unibet IT vs Real madrid",
            "startDate": "2022-01-29T13:41:15.125+00:00"
          }
        }
      }];
    const sortedResults = wrapper.vm.sortedMatchResults(matchResults);
    const middleIndex = Math.floor(sortedResults.length / 2);
    expect(sortedResults[middleIndex].name).toBe('Match Nul');
  });

});
