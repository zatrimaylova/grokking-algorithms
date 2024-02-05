const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy", "claire"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const isSeller = (name) => {
  return name[name.length - 1] === "m";
};

const breadthFirstSearch = (name) => {
  let queue = [];
  const searched = [];

  queue = [...graph[name]];

  while (queue.length) {
    const name = queue.shift();
    if (searched.indexOf(name) === -1) {
      searched.push(name);
      if (isSeller(name)) {
        console.log(`${name} is a mango seller!!!`);
        return true;
      } else {
        searched.push(name);
        queue = [...queue, ...graph[name]];
      }
    }
  }

  return false;
};

breadthFirstSearch("you");
