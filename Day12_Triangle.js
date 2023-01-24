/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length;
    let pathSums = triangle[n - 1];

    for (let layer = n - 2; layer >= 0; layer--) {
        for (let i = 0; i <= layer; i++) {
            pathSums[i] = Math.min(pathSums[i], pathSums[i + 1]) + triangle[layer][i];
        }
    }

    return pathSums[0];
};
