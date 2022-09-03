const levelDict = { 1: '새싹', 2: '일반', 3: '우수', 4: '베스트' };

const Level = (levelNum) => {
  return levelDict[parseInt(levelNum)];
};

export default Level;
