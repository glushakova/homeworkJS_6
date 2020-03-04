const depts = [
  {
    id: 0,
    name: "IT dept"
  },
  {
    id: 1,
    name: "QA dept"
  }
];

const positions = [
  {
    deptId: 0,
    id: 0,
    salary: 10,
    name: "Lead dev"
  },
  {
    deptId: 1,
    id: 1,
    salary: 5,
    name: "QA engineer"
  }
];

const empls = [
  {
    id: 0,
    name: "Ivan Ivanov",
    deptId: 0,
    positionId: 0
  },
  {
    id: 1,
    name: "Petr Petrov",
    deptId: 1,
    positionId: 1
  }
];

function getIdMain(id) {
  return new Promise(function(resolve, reject) {
    if (id < empls.length) {
      let IdMain = empls[id];
      resolve(IdMain);
    } else {
      reject("Hет такого id");
    }
  });
}

function getDepts(deptId) {
  return new Promise(function(resolve, reject) {
    resolve(depts[deptId.id]);
  });
}

function getPosition(positionId) {
  return new Promise(function(resolve, reject) {
    resolve(positions[positionId.id]);
  });
}

function getSalary(positionId) {
  return new Promise(function(resolve, reject) {
    resolve(positionId);
  });
}
let name;
let dept;
let position;
let salary;

getIdMain(1)
  .then(function(result) {
    name = result.name;
    return getDepts(result);
  })
  .then(function(department) {
    dept = department.name;
    return getPosition(department);
  })
  .then(function(resolve) {
    position = resolve.name;
    salary = resolve.salary;
    return getSalary(resolve);
  })
  .then(() =>
    console.log(
      `${name} from ${dept} has position of ${position} and has salary: ${salary}`
    )
  )
  .catch(fail => console.error(fail));
