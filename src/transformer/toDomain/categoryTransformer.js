export default ({values: categories}) => (categories.flatMap(category=> category.path_from_root)).map(category=> category.name);