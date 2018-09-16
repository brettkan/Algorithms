/*


There are n cities connected by m flights. Each fight starts from city u and arrives at v with a price w.

Now given all the cities and fights, together with starting city src and the destination dst, your task
is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.


Example 1:

Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.


Example 2:

Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph looks like this:


The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.
Note:

The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
The size of flights will be in range [0, n * (n - 1) / 2].
The format of each flight will be (src, dst, price).
The price of each flight will be in the range [1, 10000].
k is in the range of [0, n - 1].
There will not be any duplicated flights or self cycles.

*/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    const cheapest = findCheapest(src, dst, 0, 0, K, generateFlights(flights))
    return cheapest === null ? -1 : cheapest
};

function generateFlights(flightsArr) {
    return flightsArr.reduce((aggregator, [src, dst, price]) => {
        aggregator[src] = aggregator[src] || []
        aggregator[src].push({ dst, price })
        return aggregator
    }, {})
}

function findCheapest(current, dst, currentPrice, currentStops, maxStops, allFlights) {
    let currentCheapest = null

    if (current === dst) {
        return currentPrice
    }

    if (currentStops > maxStops) {
        return null
    }

    const flights = allFlights[current] || []
    for (let i = 0; i < flights.length; i++) {
        const cheapestWithPath = findCheapest(flights[i].dst, dst, flights[i].price, currentStops + 1, maxStops, allFlights)
        if (cheapestWithPath !== null) {
            currentCheapest = currentCheapest === null ? cheapestWithPath : Math.min(currentCheapest, cheapestWithPath)
        }
    }

    return currentCheapest === null ? null : currentCheapest + currentPrice
}


/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(findCheapestPrice(5, [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]], 2, 1, 1), 'and the answer is ???')
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1), 'and the answer is 200')
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0), 'and the answer is 500')
