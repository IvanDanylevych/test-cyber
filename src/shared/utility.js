export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  }
}

export const handleSearch = (arr, searchInput) =>
  arr.filter(obj =>
    Object.values(obj)
      .flat()
      .some(v => `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase())),
  )
