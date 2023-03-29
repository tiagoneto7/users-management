import SearchIcon from "../../assets/icons/SearchIcon";
import styles from "./styles.module.css";

interface ListFiltersProps {
  onSearchInputChange(keyword: string): void;
  onSortbyChange(sortBy: string): void;
  searchInput: string;
  sortedBy: string;
}

function ListFilters({
  onSearchInputChange,
  onSortbyChange,
  searchInput,
  sortedBy,
}: ListFiltersProps) {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onSearchInputChange(value);
  };

  const handleSortSelectorChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    onSortbyChange(value);
  };

  return (
    <div>
      <div className={styles.pageWrapper}>
        <label className={styles.sortByLabel}>Sort by</label>
        <div className={styles.filtersWrapper}>
          <div className={styles.sortSelectorWrapper}>
            <select
              data-testid="select"
              className={styles.sortSelector}
              name="sort"
              id="sort"
              onChange={handleSortSelectorChange}
              value={sortedBy}
            >
              <option value="id">Id</option>
              <option value="username">Username</option>
              <option value="email">Email</option>
              <option value="city">City</option>
            </select>
          </div>

          <div className={styles.searchInputWrapper}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
              onChange={handleSearchInputChange}
              value={searchInput}
            />
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFilters;
