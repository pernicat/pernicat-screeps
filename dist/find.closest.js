module.exports = {
  // TODO use paths instead of how the crow flys
  find: function (loc, list) {
    let closest = null;
    let distance = -1;

    list.forEach(function (item) {
      let dist = Math.sqrt(
          Math.pow(loc.pos.x - item.pos.x, 2) +
          Math.pow(loc.pos.y - item.pos.y, 2));

      if (-1 == distance) {
        closest = item;
        distance = dist;
      } else if (dist < distance) {
        closest = item;
        distance = dist;
      }
    });

    return closest;
  }
};
