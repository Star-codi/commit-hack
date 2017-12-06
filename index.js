import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const git = simpleGit();
const path = "./data.json";

const makeCommits = async (n) => {
  for (let i = 0; i < n; i++) {
    const x = random.int(0, 54);
    const y = random.int(0, 6);

    const date = moment()
      .subtract(9, "y")
      .add(1, "d")
      .add(x, "w")
      .add(y, "d")
      .format();

    await jsonfile.writeFile(path, { date });

    await git.add([path]);
    await git.commit(date, { "--date": date });

    console.log(`Commit ${i + 1}`);
  }

  await git.push();
};

makeCommits(5000);
