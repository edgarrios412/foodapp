const graph={
  a:["c"],
  b:["c"],
  c:["s","r"],
  d:["a"],
  s:["a","c"],
  r:["d"],
  z:["z"],
}

function SolveGraph(graph,start,end){
  if(graph[start].includes(end)) return true;
  for (const node of graph[start]) {
    let nodo = graph[start].shift()
    console.log(nodo)
    return SolveGraph(graph,nodo,end)
  }
  return false
}


console.log(SolveGraph(graph,"a","d"))