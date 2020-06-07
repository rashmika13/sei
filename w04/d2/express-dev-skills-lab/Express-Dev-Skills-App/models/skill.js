const skills = [
  { id: 123, skill: "HTML", type: "text" },
  { id: 456, skill: "CSS", type: "style" },
  { id: 789, skill: "Javascript", type: "script" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}

function update(id, skill) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skill.id = parseInt(id);
  skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}
