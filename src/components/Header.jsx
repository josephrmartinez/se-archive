export default function Header({ searchClass, pageTitle, searchText, onSearchTextChange, icon }) {
  return (
    <div className='header'>
      <input
        className={searchClass}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <div className='pageTitle'>{pageTitle}</div>
      <img src={icon} className='icon'/>
    </div>
  )
}