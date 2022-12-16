let names = [
  { name: "amin" },
  { name: "ali" },
  { name: "akbar" },
  { name: "ahmad" },
  { name: "mostafa" },
];

let list = names => {
  let list = names.map((person) => person.name);

  let namesString = list.join(',');
  let replacement = '&';
  let resualt = namesString.replace(/,([^,]*)$/, replacement + "$1");
  console.log(resualt);
}

list(names);

