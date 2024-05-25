function logics(tool, resourse) {
  if (
    (tool == "axe" && (resourse == "leaf" || resourse == "wood")) ||
    (tool == "pickaxe" && resourse == "stone") ||
    (tool == "shovel" && (resourse == "ground" || resourse == "ground-land"))
  )
    return true;
  else return false;
}
export default logics;
