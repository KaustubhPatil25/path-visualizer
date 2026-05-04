import { bfs } from "./bfs";
import { dfs } from "./dfs";
import { astar } from "./astar";
import { dijkstra } from "./dijkstra";

function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

// sorts the nodes by distance
function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

// returns an array of unvisited neighbours of the node
function getUnvisitedNeighbours(node, grid) {
  const neighbours = [];
  const { row, col } = node;
  if (row > 0) neighbours.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbours.push(grid[row + 1][col]);
  if (col > 0) neighbours.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbours.push(grid[row][col + 1]);
  return neighbours.filter((neighbor) => !neighbor.isVisited);
}

// backtracks from the finishNode to find the shortest path
// only works when called *after* the algorithm function is executed
function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}

export {
  bfs,
  astar,
  dfs,
  dijkstra,
  getAllNodes,
  getNodesInShortestPathOrder,
  getUnvisitedNeighbours,
  sortNodesByDistance,
};
