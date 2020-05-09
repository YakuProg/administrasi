export function pasreToFormData(item: Object){
  const data = new FormData();

  Object.entries(item).forEach(
    ([key, value]) => data.append(key, value)
  )

  return data;

}